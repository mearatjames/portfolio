import React, { Component } from 'react'
import {Container, Segment, Card, Image, Icon} from 'semantic-ui-react'
import './portfolio.css'

class Portfolio extends Component {

render() {

    return (
    <div id='portfolio'> 
        <Segment style={{zIndex:'1', marginTop:'0'}} className='portfolio' placeholder>
         <Container className='projects'>
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
        </Segment>
    </div>
    )
}
}

export default Portfolio