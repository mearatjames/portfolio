import React, { Component } from 'react'
import {Container, Segment } from 'semantic-ui-react'
import './about.css'

class About extends Component {

render() {

    return (
    <div id='about'> 
        <Segment style={{zIndex:'1', marginTop:'0'}} className='about' placeholder>
         <Container>
          <p>About Me Section</p>
         </Container>
        </Segment>
    </div>
    )
}
}

export default About