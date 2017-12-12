import React, { Component } from 'react'
import { Menu, Grid, Container, Segment, Icon } from 'semantic-ui-react'
import Link from 'gatsby-link'
import logo from '../images/centrico-logo-300(2x)-negative.png'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className={"footer"}>
        <Container>
          <Segment padded={"very"} basic className={"site-logo"}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </Segment>
          <Segment padded={"very"} basic className={"fluid-grid"}>
            <Grid columns={3} className="phone">
              <Grid.Column>
              <p>STRATEGY</p>
              <Link to="/services/"> UX Design</Link>
              <Link to="/services/"> Product Management</Link>
              <Link to="/services/"> Project Management</Link>
              </Grid.Column>
              <Grid.Column>
              <p>DESIGN</p>
              <Link to="/services/"> Interface Design</Link>
              <Link to="/services/"> Brand Identity</Link>
              <Link to="/services/"> Web Design</Link>
              <Link to="/services/"> Graphic Design</Link>
              <Link to="/services/"> Advertising</Link>
              </Grid.Column>
              <Grid.Column>
              <p>DEVELOPMENT</p>
              <Link to="/services/">Custom Solutions</Link>
              <Link to="/services/"> Native Apps</Link>
              <Link to="/services/"> E-Commerce</Link>
              <Link to="/services/">Content Management</Link>
              </Grid.Column>
            </Grid>
          </Segment>
          <Grid columns={3}>
            <Grid.Column>
              <Segment padded={'very'} basic>
                <Icon link name='linkedin' size={'large'} />
                <Icon link name='facebook f' size={'large'} />
                <Icon link name='twitter' size={'large'} />
                <Icon link name='google plus' size={'large'} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment padded={'very'} basic>
                Copyright Centrico LLC 2017
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}
