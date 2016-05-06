import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="column">
          <h4>Isaac Hayes</h4>
            <div className="photo"></div>
            <p> Coming to your company soon! </p>
        </div>
        <div className="column">
          <h4 className="center">Contact Me</h4>
          <div className="contact"></div>
          <p className="light">
          {this.props.phone} <br/>
          {this.props.email}
          <br/>
          <a href="mailto:hayesapples78@gmail.com">
           <img className="social" src="app/sources/email.png"  width="48" height="48" />
          </a>
          <a href="https://github.com/Crunchwrap78">
           <img className="social" src="app/sources/github.png"  width="48" height="48" />
          </a>
          <a href="https://twitter.com/ihayes78">
           <img className="social" src="app/sources/twitter.png"  width="48" height="48" />
          </a>
          <a href="https://www.linkedin.com/in/isaac-hayes-ba5666116">
           <img className="social" src="app/sources/linkedin.png"  width="48" height="48" />
          </a>
          </p>
        </div>
        <div className="column">
          <h4 className="center">Something Cool</h4>
          <Link to="/Portfolio">
            <div className="portfolio"> </div>
          </Link>
          <p> If you want to jump straight to the portfolio itself just click on the blue folder and it will link you to everything </p>
        </div>
      </div>

    )
  }
}

module.exports= Footer;
