import React, { Component } from 'react'
import {Container, Card, Image, Icon, Header} from 'semantic-ui-react'
import './portfolio.css'
import Fade from 'react-reveal/Fade';

class Portfolio extends Component {

render() {

    return (
    <div id='portfolio'> 
        <div className='portfolio'>
         <Container className='projects'>
            <Header className='workTitle' textAlign='center' as='h2' icon>
                <Fade bottom>
                    <Icon className='glow' name='code' />
                </Fade>
                Work
            </Header>
            <div> 
                <Card className='cards' fluid>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                    <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='./'>
                            <Icon name='user' />
                            10 Friends
                        </a>
                    </Card.Content>
                </Card>
            </div>
            <div> 
                <Card className='cards' fluid>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                    <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='./'>
                            <Icon name='user' />
                            10 Friends
                        </a>
                    </Card.Content>
                </Card>
            </div>
            <div> 
                <Card className='cards' fluid>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                    <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='./'>
                            <Icon name='user' />
                            10 Friends
                        </a>
                    </Card.Content>
                </Card>
            </div>
         </Container>
        </div>
    </div>
    )
}
}

export default Portfolio