import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import Link from 'gatsby-link'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    let linksEl = document.querySelector('.screen-display');
    const isMobile = window.innerWidth < 992;
    this.setState({ activeItem: name });
    if (isMobile) {
      linksEl.style.visibility = 'hidden';
    }
  }
  toggleMenu = () => {
  let linksEl = document.querySelector('.screen-display');
  if (linksEl.style.visibility === 'visible') {
            linksEl.style.visibility = 'hidden';
        } else {
            linksEl.style.visibility = 'visible';
        }
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu className={'site-nav'}>
      <div className={"common-nav"}>
        <Menu.Item
          name='logo'
          active={activeItem === 'logo'}
          onClick={this.handleItemClick}
          as={'div'}
          position={'left'}
          className={'site-logo'}
        >
        <Link to="/">
          THOUGHTCODE
        </Link>
        </Menu.Item>
        <Menu.Item
          name='logo'
          onClick={this.toggleMenu}
          as={'div'}
          position={'right'}
          className={'nav-toggle'}
        >
          <Icon link name='content' size={'large'} />
        </Menu.Item>
        </div>
        <div className="screen-display">
          <Menu.Item
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
            position={'right'}
            as={'div'}
            className={'spaced'}
          >
            <Link to="/portfolio/">Portfolio</Link>
          </Menu.Item>
          <Menu.Item
            name='services'
            active={activeItem === 'services'}
            onClick={this.handleItemClick}
            as={'div'}
            className={'spaced'}
          >
          <Link to="/services/">Services</Link>
          </Menu.Item>

          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            as={'div'}
            className={'spaced'}
          >
            <Link to="/about/">About</Link>
          </Menu.Item>

          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            as={'div'}
            className={'spaced'}
          >
            <Link to="/contact/">Contact</Link>
          </Menu.Item>
        </div>
      </Menu>
    )
  }
}
