import React, { Component } from 'react'
import { Container, Button, Icon, Menu, Modal, List} from 'semantic-ui-react'
import Scrollspy from 'react-scrollspy'
import Fade from 'react-reveal/Fade';
import './nav.css'


class NavMenu extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })


    render() {
    
        return (
        <React.Fragment>
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
                            <Button onClick={this.handleOpen} size='huge' className='hamburger' style={{display:'none', boxShadow: 'none'}} animated='vertical'>
                                    <Icon name='th large' />
                            </Button>
                        </div>
                        <Scrollspy className='menuItems' offset={-200} items={ ['showcase', 'portfolio', 'about', 'contact'] } currentClassName="active">
                            <a href='#showcase' style={{display:'none'}}>Showcase</a>
                            <Menu.Item
                            name='work'
                            href='#portfolio'
                            />
                            <Menu.Item
                            name='about'
                            href='#about'
                            />
                            <Menu.Item
                            name='contact'
                            href='#contact'
                            />
                        </Scrollspy>
                    </Container>
                </Menu>
            </div>
    <Modal
        closeIcon
        centered={false}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
    >
        <Modal.Content>
        <List relaxed size='massive' divided verticalAlign='middle'>
            <List.Item>
            <List.Content>
                <List.Header onClick={this.handleClose} href='#portfolio' as='a'>Work</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Content>
                <List.Header onClick={this.handleClose} href='#about' as='a'>About</List.Header>
            </List.Content>
            </List.Item>
            <List.Item>
            <List.Content>
                <List.Header onClick={this.handleClose} href='#contact' as='a'>Contact</List.Header>
            </List.Content>
            </List.Item>
        </List>
        </Modal.Content>
    </Modal>
        </React.Fragment>
    )
  }
}

export default NavMenu