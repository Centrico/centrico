import React, { Component } from 'react'
import { Menu, Grid, Container, Segment } from 'semantic-ui-react'
import Link from 'gatsby-link'
import logo from '../../public/images/centrico-logo-300(2x).png'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className={"footer"}>
        <Container>
          <Segment padded={"very"} basic className={"fluid-grid"}>
            <Grid columns={3}>
              <Grid.Column>
              STRATEGY
              UX-design
              Product Management
              Project Management
              </Grid.Column>
              <Grid.Column>
              DESIGN
              Interface Design
              Brand Identity
              Web Design
              Graphic Design
              Advertising
              </Grid.Column>
              <Grid.Column>
              DEVELOPMENT
              Custom Solutions
              Native Apps
              E-Commerce
              Content Management
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    )
  }
}
