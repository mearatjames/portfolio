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
                    <a href='https://github.com/mearatjames'><h3><Icon name='github' /> Github</h3></a> 
                    <a href='https://www.linkedin.com/in/mearat-hou-013a93164/'><h3><Icon name='linkedin' />LinkedIn</h3></a> 
                    <a href="mailto:mearatjames@gmail.com"><h3><Icon name='envelope' /> Email</h3></a> 
                </div>
                <div className='project'>
                    <h3>Project</h3>
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