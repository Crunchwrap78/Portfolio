import React from 'react';

class Paragraph extends React.Component{
  render(){
    return(
      <p>
      {this.props.text1}
      <br/>
      <br/>
      {this.props.text2}
      </p>
    )
  }
}

module.exports = Paragraph;
