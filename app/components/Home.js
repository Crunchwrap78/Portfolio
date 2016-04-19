import React from 'react';

class Home extends React.Component{
  render(){
    return(
      <div className="main-bar">
        <video loop="loop" autoPlay="autoplay" src="../app/sources/motivational.mp4" width= "1051" height="545">
          <source type="video/mp4" src="../app/sources/motivational.mp4" />
        </video>
        <div>
           <p className="brand"> "Curious Developer with an experienced background that is prepared to take on unknown challenges." </p>
           <p className ="brand"> "I devise creative solutions and adapt to other's solutions," </p>
           <p className ="brand"> "and shatter my current knowledge barrier to become an even better developer than yesterday."</p>
        </div>
      </div>
    )
  }
}

module.exports = Home;
