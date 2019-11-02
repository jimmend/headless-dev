import React from "react";
import { navigate } from 'gatsby-link'
import { Link } from "gatsby";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    const postId = props.postId ? props.postId.replace(/\//g,'') : "post-id-not-provided"
    this.state = { isValidated: false, postId: postId };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <section className="section section-dark newsletter-signup">
        <div className="container">
          <p className="title">Sign Up for the Newsletter</p>
          <div className="columns">
            <div className="column is-one-quarter-tablet padding-column"></div>
            <div className="column">
              <p>
                <Link className="button is-link" to="/newsletter">Unsure? More info here.</Link>
              </p>
              <form
                name={`newsletter-signup-${this.state.postId}`}
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'firstName'}
                      onChange={this.handleChange}
                      id={'firstName'}
                      required={true}
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                  <input
                      className="input"
                      type={'text'}
                      name={'lastName'}
                      onChange={this.handleChange}
                      id={'lastName'}
                      required={true}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                  <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      placeholder="EMail"
                    />
                  </div>
                </div>
                <div className="field is-clearfix">
                  <button
                    type="submit"
                    className="button is-link is-red is-pulled-right"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
            <div className="column is-one-quarter-tablet padding-column"></div>
          </div>
        </div>
      </section>
    )
  }
}