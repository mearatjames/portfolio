import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import './nav.css'


class NavMenu extends Component {
  state = { activeItem: 'about' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div className='shadow'>
            <Menu className='menu' style={{background: 'rgba(255, 255, 255, 0.9)'}} text>
                <Container className='navBar'>
                        <Menu.Item
                        href='./'
                        className='logo'
                        >
                            <img style={{width: '120px'}} src='./images/logo.png' alt='Logo'/>
                        </Menu.Item>
                    <div className='menuItems'>
                        <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        href='#about'
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='work'
                        href='#portfolio'
                        active={activeItem === 'work'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='contact'
                        href='#contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                        />
                    </div>
                </Container>
            </Menu>
        </div>
    )
  }
}

export default NavMenu