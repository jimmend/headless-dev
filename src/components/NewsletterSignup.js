import React from "react";
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class NewsletterSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
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
                Would you like to be notified when new stuff gets published?
              </p>
              <p>Enter your information below.</p>
              <form
                name="newsletter-signup"
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
              <p className="no-bs">
                Unsubscribe any time. No junk, spam or BS.
              </p>
            </div>
            <div className="column is-one-quarter-tablet padding-column"></div>
          </div>
        </div>
      </section>
    )
  }
}