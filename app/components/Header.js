import React from 'react';

import NavBar from '../info/NavBar';
import Logo from '../info/Logo';



class Header extends React.Component{
  render(){
    return(
      <div className="full-nav">
        <NavBar />
        <Logo />
      </div>
    )
  }
}

module.exports = Header;
