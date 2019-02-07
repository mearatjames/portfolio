import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './showcase.css'

class Showcase extends Component {

render() {

    return (
        <div id='showcase'>
          <div className='showcase'>
          <div className='circle'></div>
          <div className='square'></div>
            <h1 className='primary'>Showcase</h1>
          </div>
        </div>
    )
}
}

export default Showcase