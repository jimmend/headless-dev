import React from 'react'

const NewsletterSignup = () => (
    <section className="section section-dark newsletter-signup">
        <h2>Sign Up for the Newsletter</h2>
        <div className="columns">
            <div className="column is-one-third is-offset-one-third">
                <p>Would you like to be notified when new stuff gets published?</p>
                <p>Enter your information below.</p>
                <div className="field">
                    <div className="control">
                        <input class="input" type="text" placeholder="First Name" />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input class="input" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input class="input" type="email" placeholder="Email Address" />
                    </div>
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
                <p>No junk, no spam, no BS. Unsubscribe at any time.</p>
            </div>
        </div>
    </section>
)

export default NewsletterSignup