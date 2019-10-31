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
          <div className="field">
            <div className="control">
              <input className="input" type="email" placeholder="Email Address" />
            </div>
          </div>
          <div className="field is-clearfix">
              <button className="button is-link is-red is-pulled-right">SUBMIT</button>
          </div>
          <p className="no-bs">Unsubscribe at any time. No junk, no spam, no BS.</p>
        </div>
        <div className="column is-one-quarter-tablet padding-column"></div>
      </div>
    </div>
  </section>
);

export default NewsletterSignup;
