import React, { Component } from 'react'
import { Container, Icon, Popup } from 'semantic-ui-react'
import './footer.css'


class Footer extends Component {
  
  render() {
    return (
        <div>
            <Container className='footer' style={{backgroundColor: 'rgba(0,0,0,0)'}}>
                <div className='connect'>
                    <h3>Connect</h3>
                </div>
                <div className='list3'>
                    <a target='blank' href='https://github.com/mearatjames'><h3><Icon name='github' /> Github</h3></a> 
                    <a target='blank' href='https://www.linkedin.com/in/mearat-hou-013a93164/'><h3><Icon name='linkedin' /> LinkedIn</h3></a> 
                    <a target='blank' href="mailto:mearatjames@gmail.com"><h3><Icon name='envelope' /> Email</h3></a> 
                </div>
                <div className='project'>
                    <h3>Portfolio</h3>
                </div>
                <div className='list1'>
                    <a target='blank' href='https://github.com/mearatjames/Deez-Nutrients'><h3>Deez Nutrients</h3></a> 
                    <a target='blank' href='https://github.com/mearatjames/nytScrapping'><h3>NYT Scraping</h3></a> 
                    <a target='blank' href="https://github.com/mearatjames/googlebooks"><h3>Googlebooks</h3></a> 
                </div>
                <div className='list2'>
                    <a target='blank' href='https://github.com/stevenguy/bc-project-3'><h3>Web Accounting</h3></a> 
                    <a target='blank' href='https://github.com/bunrithbuth/bc-project-2'><h3>Deez Polls</h3></a> 
                    <a target='blank' href="https://github.com/mearatjames/TriviaGame/tree/dev"><h3>Trivia Game</h3></a> 
                </div>
                <div className='upArrow'>
                    <Popup
                        trigger={<a href='#showcase'><Icon className='backToTop' link name='chevron up' size='large'/></a>}
                        content='BACK TO TOP'
                        position='bottom left'
                    />
                </div>
                <div className='copyright'>
                    <span>© 2019.  </span><a href='https://github.com/mearatjames'> Mearat Hou</a>
                </div>
            </Container>
        </div>
    )
  }
}

export default Footer