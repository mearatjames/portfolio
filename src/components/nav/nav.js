import React, { Component } from 'react'
import { Container, Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Scrollspy from 'react-scrollspy'
import Fade from 'react-reveal/Fade';
import './nav.css'


class NavMenu extends Component {
    
    state = { visible: false }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })
  
  render() {
    const { visible } = this.state
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
                    <div>
                        <Button onClick={this.handleShowClick} size='huge' className='hamburger' style={{display:'none', boxShadow: 'none'}} animated='vertical'>
                                <Icon name='th large' />
                        </Button>
                    </div>
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
            <Sidebar
                direction='right'
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as='a'>
                <Icon name='home' />
                Home
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
                </Menu.Item>
                <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
                </Menu.Item>
            </Sidebar>
        </div>
    )
  }
}

export default NavMenu