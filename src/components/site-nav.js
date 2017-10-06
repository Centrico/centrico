import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Link from 'gatsby-link'
import logo from '../../public/images/centrico-logo-300(2x).png'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className={'site-nav'}>
        <Menu.Item
          name='logo'
          active={activeItem === 'logo'}
          onClick={this.handleItemClick}
          as={'div'}
          position={'left'}
          className={'site-logo'}
        >
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        </Menu.Item>
        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick}
          position={'right'}
          as={'div'}
        >
          <Link to="/portfolio/">Portfolio</Link>
        </Menu.Item>
        <Menu.Item
          name='services'
          active={activeItem === 'services'}
          onClick={this.handleItemClick}
          as={'div'}
        >
        <Link to="/services/">Services</Link>
        </Menu.Item>

        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
          as={'div'}
        >
          <Link to="/about/">About</Link>
        </Menu.Item>

        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          as={'div'}
        >
          <Link to="/contact/">Contact</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
