import React, { Component } from 'react'
import {Container, Card, Image, Icon, Header} from 'semantic-ui-react'
import './portfolio.css'
import Fade from 'react-reveal/Fade';

const portfolioContents = [
    {
        header: 'NYT Scraper',
        images: './images/nytscraper.webp',
        meta: 'Web Scraping Project',
        description: 'A MERN stack web application using Cheerio npm package to scrape news off NYT website.',
        demoLink: 'https://still-castle-19414.herokuapp.com/',
        githubLink: 'https://github.com/mearatjames/nytScrapping'
    },
    {
        header: 'Google Books',
        images: './images/googlebooks.webp',
        meta: 'Book Searching Project',
        description: 'Another MERN stack web application using google books api to search for books.',
        demoLink: 'https://secure-reef-41974.herokuapp.com/',
        githubLink: 'https://github.com/mearatjames/googlebooks'
    },
    {
        header: 'Deez Nutrients',
        images: './images/deeznutrients.webp',
        meta: 'Nutrition Search and Track Application',
        description: 'First project utilising NutritionIx and Google Charts api to search and track nutritional value.',
        demoLink: 'https://vitamind-b6c3c.firebaseapp.com/',
        githubLink: 'https://github.com/mearatjames/Deez-Nutrients'
    },
    {
        header: 'ACCTG Web Accounting',
        images: './images/webaccounting.webp',
        meta: 'Basic Web Accounting Application',
        description: 'A simple enterprise accounting/book-keeping web-based application (UCI Boot Camp Group Project).',
        demoLink: 'https://peaceful-anchorage-98434.herokuapp.com/',
        githubLink: 'https://github.com/stevenguy/bc-project-3/tree/mearat'
    },
    {
        header: 'Deez Polls',
        images: './images/deezpolls.webp',
        meta: 'Customized Polling Web Application',
        description: '2nd Group Project Express application using Sequelize and deployed via Heroku.',
        demoLink: 'https://afternoon-crag-56596.herokuapp.com/polls',
        githubLink: 'https://github.com/bunrithbuth/bc-project-2/tree/master'
    },
    {
        header: 'Trivia Game',
        images: './images/triviagame.webp',
        meta: 'Basic Javascript Application',
        description: 'Javascript functions and methods warm up in a form of U.S citizenship trivia game.',
        demoLink: 'https://mearatjames.github.io/TriviaGame/',
        githubLink: 'https://github.com/mearatjames/TriviaGame'
    }
]


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
                Portfolio
            </Header>
            {portfolioContents.map((e, i) => (
                <div key={i}> 
                    <Card className='cards' fluid>
                        <Image src={e.images} />
                        <Card.Content>
                        <Card.Header>{e.header}</Card.Header>
                        <Card.Meta>{e.meta}</Card.Meta>
                        <Card.Description>{e.description}</Card.Description>
                        </Card.Content>
                        <Card.Content className='cardsLink' extra>
                            <a target='blank' href={e.demoLink}>
                                <Icon name='globe' />
                                Demo Link
                            </a>
                            <a target='blank' href={e.githubLink}>
                                <Icon name='code branch' />
                                Github Link
                            </a>
                        </Card.Content>
                    </Card>
                </div>
            ))}
         </Container>
        </div>
    </div>
    )
}
}

export default Portfolio