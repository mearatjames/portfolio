import React, { Component } from 'react'
import {Container, Image, Header, Icon, Button } from 'semantic-ui-react'
import './about.css'
import Fade from 'react-reveal/Fade';

class About extends Component {

render() {

    return (
    <div id='about'> 
        <div className='about'>
        <div>
        <Header textAlign='center' as='h2' icon>
                <Fade>
                    <Icon className='glow' name='user circle' />
                </Fade>
                About
        </Header>
            <Container className='aboutMe'>
                <Image className='mearat' src='./images/Mearat.jpg' size='medium' circular />
                <div className='link'>
                    <Button target='blank' href='https://github.com/mearatjames/' size='large' circular color='black' icon='github' title='Github' />
                    <Button target='blank' href='https://www.linkedin.com/in/mearat-hou-013a93164/' size='large' circular color='linkedin' icon='linkedin' title='LinkedIn'/>
                    <Button href='./files/resume.pdf' download size='large' circular color='google plus' icon='file pdf' title='Download Resume' />
                </div>
                <img className='myImage' src='./images/aboutMe.jpg' alt='aboutMe' />
                <div style={{alignSelf:'start'}}>
                    <Button basic color='blue' href='./files/resume.pdf' target='_blank' icon labelPosition='right'>
                        View Resume
                        <Icon name='right arrow' />
                    </Button>
                </div>
            </Container>
        </div>
        </div>
    </div>
    )
}
}

export default About