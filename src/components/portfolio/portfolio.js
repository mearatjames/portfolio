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
                    <Image src='./images/nytscraper.webp' />
                    <Card.Content>
                    <Card.Header>NYT Scraper</Card.Header>
                    <Card.Meta>Web Scraping Project</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content className='cardsLink' extra>
                        <a target='blank' href='https://still-castle-19414.herokuapp.com/'>
                            <Icon name='globe' />
                            Demo Link
                        </a>
                        <a target='blank' href='https://github.com/mearatjames/nytScrapping'>
                            <Icon name='code branch' />
                            Github Link
                        </a>
                    </Card.Content>
                </Card>
            </div>
            <div> 
                <Card className='cards' fluid>
                    <Image src='./images/googlebooks.webp' />
                    <Card.Content>
                    <Card.Header>Google Books</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content className='cardsLink' extra>
                        <a target='blank' href='https://secure-reef-41974.herokuapp.com/'>
                            <Icon name='globe' />
                            Demo Link
                        </a>
                        <a target='blank' href='https://github.com/mearatjames/googlebooks'>
                            <Icon name='code branch' />
                            Github Link
                        </a>
                    </Card.Content>
                </Card>
            </div>
            <div> 
                <Card className='cards' fluid>
                    <Image src='./images/deeznutrients.webp' />
                    <Card.Content>
                    <Card.Header>Deez Nutrients</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content className='cardsLink' extra>
                        <a target='blank' href='https://vitamind-b6c3c.firebaseapp.com/'>
                            <Icon name='globe' />
                            Demo Link
                        </a>
                        <a target='blank' href='https://github.com/mearatjames/Deez-Nutrients'>
                            <Icon name='code branch' />
                            Github Link
                        </a>
                    </Card.Content>
                </Card>
            </div>
            <div> 
                <Card className='cards' fluid>
                    <Image src='./images/webaccounting.webp' />
                    <Card.Content>
                    <Card.Header>Web Accounting</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content className='cardsLink' extra>
                        <a target='blank' href='https://peaceful-anchorage-98434.herokuapp.com/'>
                            <Icon name='globe' />
                            Demo Link
                        </a>
                        <a target='blank' href='https://github.com/stevenguy/bc-project-3/tree/mearat'>
                            <Icon name='code branch' />
                            Github Link
                        </a>
                    </Card.Content>
                </Card>
            </div>
            <div> 
                <Card className='cards' fluid>
                    <Image src='./images/deezpolls.webp' />
                    <Card.Content>
                    <Card.Header>Deez Polls</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content className='cardsLink' extra>
                        <a target='blank' href='https://afternoon-crag-56596.herokuapp.com/polls'>
                            <Icon name='globe' />
                            Demo Link
                        </a>
                        <a target='blank' href='https://github.com/bunrithbuth/bc-project-2/tree/master'>
                            <Icon name='code branch' />
                            Github Link
                        </a>
                    </Card.Content>
                </Card>
            </div>
            <div> 
                <Card className='cards' fluid>
                    <Image src='./images/triviagame.webp' />
                    <Card.Content>
                    <Card.Header>Trivia Game</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content className='cardsLink' extra>
                        <a target='blank' href='https://mearatjames.github.io/TriviaGame/'>
                            <Icon name='globe' />
                            Demo Link
                        </a>
                        <a target='blank' href='https://github.com/mearatjames/TriviaGame'>
                            <Icon name='code branch' />
                            Github Link
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