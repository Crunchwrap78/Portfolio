import React from 'react';
import Footer from './Footer';
import Header from './Header'

let footer_data ={
  phone: "Phone: 703-678-5155",
  email: "Email: hayesapples78@gmail.com"
}


class Main extends React.Component{
  render(){
    return(
      <div className= "main-container">
      <Header />
        {this.props.children}
        <Footer phone={ footer_data.phone } email={ footer_data.email }/>
      </div>
    )
  }
}

module.exports = Main;
