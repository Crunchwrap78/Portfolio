import React from 'react';

class NavBar extends React.Component{
  render(){
    return(
      <ul className="inline">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Education</li>
      </ul>
    )
  }
}

module.exports = NavBar;
