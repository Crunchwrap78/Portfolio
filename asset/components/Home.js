import React from 'react';
import Header from './Header'
import '../style/home.scss';

class Home extends React.Component{
  render(){
    return(
      <div className="main-bar">
        <video loop="loop" autoPlay="autoplay" src="../app/sources/motivation2.mp4"  muted>
          <source type="video/mp4" src="../app/sources/motivation2.mp4" />
        </video>
        <div className="container">
          <h1 className="motive">Your fullstack search ends here</h1>
        </div>
      </div>
    )
  }
}


module.exports = Home;
