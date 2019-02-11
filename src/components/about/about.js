import React, { Component } from 'react'
import {Container, Image, Header, Icon } from 'semantic-ui-react'
import './about.css'
import Slide from 'react-reveal/Slide';

class About extends Component {

render() {

    return (
    <div id='about'> 
        <div className='about'>
        <Header textAlign='center' as='h2' icon>
                <Slide left>
                    <Icon className='glow' name='user circle' />
                </Slide>
                About
        </Header>
            <Container>
                <Image className='mearat' src='./images/Mearat.jpg' size='medium' circular />
                <h2>Full Stack Web Developer</h2>
                {/* To Do: Make a javascript object displaying about me overview: let AboutMe = {
                    name: Mearat Hou,
                    softSkills: ['adaptable', 'teamPlayer', 'problemSolving', 'timeManagement']
                    language: javascript,
                    skills: [HTML, CSS, React, Node, MongoDB, Express, mySQL],
                    education: UCI Coding Boot Camp,         
                } */}
            </Container>
        </div>
    </div>
    )
}
}

export default About