import React, { Component } from 'react'
import './showcase.css'
import Typewriter from 'typewriter-effect';

class Showcase extends Component {

render() {

    return (
        <div id='showcase'>
          <div className='showcase'>
            <div style={{textAlign: 'center', zIndex: 0}}>
              <p>Mearat Hou</p>
              <Typewriter
                options={{
                  strings: ['Web','Javascript','React','Freelance'],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p>Developer</p>
            </div>
            <div className='round'></div>
            <div className='square'></div>
          </div>
        </div>
    )
}
}

export default Showcase