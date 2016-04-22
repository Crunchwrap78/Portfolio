import React from 'react';

class Footer extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="column">
          <h5>Isaac Hayes</h5>
            <div className="photo"></div>
            <p> Could be coming to your company </p>
        </div>

        <div className="column">
          <h5 className="center">Contacts</h5>
          <div className="contact"></div>
          <p className="light">
          {this.props.phone}
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
          <h5 className="center">Something Cool</h5>
          <p className="light">The origins of the word "cocktail" are lost to history, but the first definition we find in print comes from an 1806 newspaper from upstate New York. A cocktail is called </p>
        </div>
      </div>
    )
  }
}

module.exports= Footer;
