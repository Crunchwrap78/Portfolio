import React from 'react';

class Home extends React.Component{
  render(){
    return(
      <div className="main-bar">
        <video loop="loop" autoPlay="autoplay" src="../app/sources/motivation2.mp4" width= "1051" height="545">
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
