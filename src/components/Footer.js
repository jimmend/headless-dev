import React from "react";

import logo from "../img/jimmendes-logo-white-32px.png";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";
import pinterest from "../img/pinterest.svg";
import {Link} from 'gatsby'

const Footer = class extends React.Component {
  render() {
    const footerStyle = (this.props.isLandingPage) ? {
      position: "absolute",
      width: "100%",
      bottom: "0"
    } : {}
    return (
      <footer 
        className="footer has-background-black has-text-white-ter" 
        style={footerStyle}>
        <div className="content has-text-centered">
          <Link to="/">
            <img src={logo} alt="jimmendes.com logo" style={{ height: "24px" }} />
          </Link>
        </div>
        <div className="content navbar has-background-black">
          <Link className="navbar-item" to="/about">
            about
          </Link>
{/*           <Link className="navbar-item" to="/newsletter">
            newsletter
          </Link> */}
          <Link className="navbar-item" to="/blog">
            blog
          </Link>
        </div>
        <div className="content has-text-centered">
          <a 
            className="social-icons" 
            href="http://www.linkedin.com/in/jimmendes" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" style={{ height: "20px" }} />
          </a>
          <a 
            className="social-icons" 
            href="http://www.twitter.com/jimmendes" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitter" style={{ height: "20px" }} />
          </a>
          <a 
            className="social-icons" 
            href="http://www.pinterest.com/jimrmendes" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pinterest} alt="pinterest" style={{ height: "20px" }} />
          </a>
        </div>
      </footer>
    );
  }
};

export default Footer;
