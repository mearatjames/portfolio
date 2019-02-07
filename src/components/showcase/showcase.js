import React, { Component } from 'react'
import './showcase.css'

class Showcase extends Component {

render() {

    return (
        <div id='showcase'>
          <div className='showcase'>
            <div style={{textAlign: 'center', zIndex: 10}}>
              <p>Mearat Hou</p>
              <p>Javascript Developer</p>
            </div>
            <div className='circle'></div>
            <div className='square'></div>
          </div>
        </div>
    )
}
}

export default Showcase