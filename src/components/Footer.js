import React from 'react'

import logo from '../img/jimmendes-logo-white-32px.png'
import twitter from '../img/twitter.svg'
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
            <a className="social-icons" href="https://www.jimmendes.com">
              <img 
                src={twitter}
                alt="twitter"
                style={{height: '20px'}}
              />
            </a>
            <a className="social-icons" href="https://www.jimmendes.com">
              <img 
                src={pinterest}
                alt="pinterest"
                style={{height: '20px'}}
              />
            </a>
            <a className="social-icons" href="https://www.jimmendes.com">
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
