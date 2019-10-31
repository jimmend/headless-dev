import React from "react";

const NewsletterSignup = () => (
  <section className="section section-dark newsletter-signup">
    <div className="container">
      <p className="title">Sign Up for the Newsletter</p>
      <div className="columns">
        <div className="column is-one-quarter-tablet padding-column"></div>
        <div className="column">
          <p>Would you like to be notified when new stuff gets published?</p>
          <p>Enter your information below.</p>
          <form netlify name="newsletter-signup" method="POST">
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="First Name" name="firstName"/>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="Last Name" name="lastName" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
            </div>
            <div className="field is-clearfix">
              <button type="submit" className="button is-link is-red is-pulled-right">
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
);

export default NewsletterSignup;
