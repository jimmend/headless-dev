import React from 'react'

import logo from '../img/jimmendes-logo-white-32px.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="jimmendes.com logo"
            style={{ height: '24px' }}
          />
        </div>
        <div className="content has-text-centered">
          <span className="icon">
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </span>
          <span className="icon">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </span>
          <span className="icon">
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer
