import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import Scrollspy from 'react-scrollspy'
import Fade from 'react-reveal/Fade';
import './nav.css'


class NavMenu extends Component {

  render() {

    return (
        <div className='shadow'>
            <Menu className='menu' style={{background: 'rgba(255, 255, 255, 0.9)'}} text>
                <Container className='navBar'>
                    <Menu.Item
                        href='#showcase'
                        className='logo'
                        >
                        <Fade>
                            <img style={{width: '120px'}} src='./images/logo.png' alt='Logo'/>
                        </Fade>
                    </Menu.Item>
                    <Scrollspy className='menuItems' offset={-200} items={ ['showcase', 'portfolio', 'about', 'contact'] } currentClassName="active">
                        <a href='#showcase' style={{display:'none'}}>Showcase</a>
                        <Menu.Item
                        name='work'
                        href='#portfolio'
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='about'
                        href='#about'
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='contact'
                        href='#contact'
                        onClick={this.handleItemClick}
                        />
                    </Scrollspy>
                </Container>
            </Menu>
        </div>
    )
  }
}

export default NavMenu