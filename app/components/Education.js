import React from 'react';

class Education extends React.Component{
  render(){
    return(
      <div class='section-content'>
          <h4>Hi, my name is Ryan Lee.</h4>
          <h5>I am a 22 year old web developer living in New York.</h5>

          <div id='photo_circle_container'>
            <div className='photo_circle UMW' id='umw'>
              <h6>UNIVERSITY OF MARY WASHINGTON</h6>
            </div>

            <div className='photo_circle new_york' id='va'>
              <h6>VIENNA, VA</h6>
            </div>
            <div className='photo_circle ga' id='ga'>
              <h6>GENERAL ASSEMBLY</h6>
            </div>
          </div>
        </div>
    )
  }
}

module.exports = Education;
