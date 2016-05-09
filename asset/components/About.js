import React from 'react';
import Paragraph from '../info/Paragraph';
import '../style/about.scss';

let data ={
  text1: "Following my graduation from college in 2014, I continued to program. I worked as a .Net Consultant. An invaluable experience, my time as a .Net developer, which importantly made me realize there was a lot more to what I was doing than being boxed in, working in a GUI and not being able to work on open source projects.",
  text2: "In the 12 weeks I've spent in General Assembly's Web Development Immersive program I was able to excel in building apps on new platforms and hone my skills as a developer."
}

class About extends React.Component{
  render(){
    return(
    <div className='Ed-content'>
      <nav className="about">

      </nav>
      <div className="section-content">
          <h4>Hi, my name is Isaac.</h4>
          <div className="circles"></div>
          <h5>I am a 24 year old web developer living in Virginia.</h5>

          <div id='photo_circle_container'>
           <div className="circle-holder">
            <div className='photo_circle UMW' id='umw'>
            </div>

            <div className='photo_circle va' id='va'>
            </div>

            <div className='photo_circle ga' id='ga'>
            </div>
            </div>
            <Paragraph text1={ data.text1 } text2={ data.text2 }/>
            </div>
          </div>
        </div>
    )
  }
}

module.exports = About;
