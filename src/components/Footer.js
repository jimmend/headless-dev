import React from 'react'

import logo from '../img/jimmendes-logo-white-32px.png'
import facebook from '../img/facebook.svg'
import linkedin from '../img/linkedin.svg'
import pinterest from '../img/pinterest.svg'

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
            <a className="social-icons" href="#">
              <img 
                src={facebook}
                alt="facebook"
                style={{height: '20px'}}
              />
            </a>
            <a className="social-icons" href="#">
              <img 
                src={pinterest}
                alt="pinterest"
                style={{height: '20px'}}
              />
            </a>
            <a className="social-icons" href="#">
              <img 
                src={linkedin}
                alt="linkedin"
                style={{height: '20px'}}
              />
            </a>
        </div>
      </footer>
    )
  }
}

export default Footer
