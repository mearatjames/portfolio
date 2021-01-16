import React, { Component } from 'react'
import {Container, Card, Icon, Header} from 'semantic-ui-react'
import './portfolio.css'
import Fade from 'react-reveal/Fade';
import Carousel from '../carousel/carousel.js'

const portfolioContents = [
    {
        header: 'Nail Artist',
        images: ['./images/nail-artist1.jpg', './images/nail-artist2.jpg', './images/nail-artist3.jpg'],
        meta: 'Inspiring Nail Artist Website',
        description: 'All in one site to help boost online presence and improve booking experience',
        githubLink: 'https://github.com/mearatjames/nail-artist'
    },
    {
        header: 'ACCTG Web Accounting',
        images: ['./images/webaccounting1.jpg', './images/webaccounting2.jpg', './images/webaccounting3.jpg'],
        meta: 'Basic Web Accounting Application',
        description: 'A simple enterprise accounting/book-keeping web-based application.',
        githubLink: 'https://github.com/stevenguy/bc-project-3/tree/mearat'
    },
    {
        header: 'NYT Scraper',
        images: ['./images/nytscraper1.jpg', './images/nytscraper2.jpg', './images/nytscraper3.jpg'],
        meta: 'Web Scraping Project',
        description: 'A MERN stack web application using Cheerio npm package to scrape news off NYT website.',
        githubLink: 'https://github.com/mearatjames/nytScrapping'
    },
    {
        header: 'Google Books',
        images: ['./images/googlebooks1.jpg', './images/googlebooks2.jpg', './images/googlebooks3.jpg'],
        meta: 'Book Searching Project',
        description: 'Another MERN stack web application using google books api to search for books.',
        githubLink: 'https://github.com/mearatjames/googlebooks'
    },
    {
        header: 'Deez Polls',
        images: ['./images/deezpolls1.jpg', './images/deezpolls2.jpg', './images/deezpolls3.jpg'],
        meta: 'Customized Polling Web Application',
        description: '2nd Group Project Express application using Sequelize and deployed via Heroku.',
        demoLink: 'https://afternoon-crag-56596.herokuapp.com/polls',
        githubLink: 'https://github.com/bunrithbuth/bc-project-2/tree/master'
    },
    {
        header: 'Trivia Game',
        images: ['./images/triviagame1.jpg', './images/triviagame2.jpg', './images/triviagame3.jpg'],
        meta: 'Basic Javascript Application',
        description: 'Javascript functions and methods warm up in a form of U.S citizenship trivia game.',
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
                        {/* <Image src={e.images} /> */}
                        <Card.Content>
                        <Carousel img={e.images} />
                        <Card.Header>{e.header}</Card.Header>
                        <Card.Meta>{e.meta}</Card.Meta>
                        <Card.Description>{e.description}</Card.Description>
                        </Card.Content>
                        <Card.Content className='cardsLink' extra>
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