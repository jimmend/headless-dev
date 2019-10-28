import React from "react";

const NewsletterSignup = () => (
  <section className="section section-dark newsletter-signup">
    <div className="container">
      <h2>Sign Up for the Newsletter</h2>
      <div className="columns">
        <div className="column is-one-quarter-tablet"></div>
        <div className="column">
          <p>Would you like to be notified when new stuff gets published?</p>
          <p>Enter your information below.</p>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="First Name" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="control">
              <button className="button is-link is-red">SUBMIT</button>
            </div>
          </div>
          <p>No junk, no spam, no BS. Unsubscribe at any time.</p>
        </div>
        <div className="column is-one-quarter-tablet"></div>
      </div>
    </div>
  </section>
);

export default NewsletterSignup;
