import React, { Component } from 'react'
import { Menu, Grid, Container, Segment, Icon } from 'semantic-ui-react'
import Link from 'gatsby-link'

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
              THOUGHTCODE
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
          <Grid columns={2} className="phone">
            <Grid.Column>
              <Segment padded={'very'} basic className={"social"}>
                <a title={"thoughtcode Linkedin profile"} href="https://www.linkedin.com/company/thought-code/">
                  <Icon link name='linkedin' size={'large'} />
                </a>
                <a title={"thoughtcode facebook profile"} href="https://www.facebook.com/thoughtcodetech/">
                  <Icon link name='facebook f' size={'large'} />
                </a>
                <a title={"thoughtcode twitter profile"} href="https://twitter.com/thoughtcode1">
                  <Icon link name='twitter' size={'large'} />
                </a>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment padded={'very'} basic>
                Copyright THOUGHTCODE LLC 2018
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}
