import _ from 'lodash'
import React from 'react'
import Link from 'gatsby-link'
import StrategyHmIcon from '../../public/images/strategy-hm-icon.png'
import DesignHmIcon from '../../public/images/design-hm-icon.png'
import DevHmIcon from '../../public/images/dev-hm-icon.png'


var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

import { Grid, Container, Image, Header, Input, Form, Button, Segment } from 'semantic-ui-react'


export default ({ data }) => {
  return (
    <div>
      <div className={"marquee"}>
        <Container>
          <Segment padded={"very"} basic>
            <Header as={'h2'} color={"purple"} className={"main-header"}>Creative Digital Solutions</Header>
          </Segment>
        </Container>
      </div>
      <Segment padded={"very"} basic className={"fluid-grid"}>
        <Container>
          <Segment padded={"very"} basic>
            <Header as={'h4'} className={"spaced"} color={"purple"}>RECENT WORK</Header>
          </Segment>
        </Container>
        <Grid columns={4}>
        {data.allMarkdownRemark.edges.map(({ node }) =>
            <Grid.Column>
              <h3>{node.frontmatter.title}</h3>
              {node.excerpt}
              <Link to={node.fields.slug}> go </Link>
              <img src={node.frontmatter.image.childImageSharp.responsiveResolution.src} alt={node.frontmatter.title} />
              {node.frontmatter.tags.map(({i}) =>
              <span>{[i]}</span>
            )}
            </Grid.Column>
        )}
        </Grid>
      </Segment>

      <Container>
        <Segment padded={"very"} basic className={"fluid-grid"}>
          <Header as={'h2'} color={"purple"}>We’re All an Innovative Force</Header>
          <Header as={'h4'} className={"spaced"} color={"purple"}> OUR APPROACH</Header>
          <p>We are a digital firm with creativity at the core. We believe our clients represent the innovative force that enhances, helps, transforms... people’s lifes. We are here to help you push those boundries even further and provide meaningful experiences that WOW costmers and drive bussines. We focus in  websites, custom apps, user experience, branding, marketing, and all things digital for clients, audiences and ourselves.</p>
          <Link className={"spaced c-button"} to="/about/">
          ABOUT</Link>
        </Segment>
      </Container>

      <div className={'muted-bg'}>
        <Container>
          <Segment padded={"very"} basic className={"fluid-grid hm-block-img"}>
            <Header as={'h2'} color={"purple"}>We help you design and develop products that your costumers will love.</Header>
            <Grid columns={3} className={'no-vertical-margin'}>
              <Grid.Column>
                <img src={StrategyHmIcon} alt="Strategy Icon" />
                <Header as={'h4'} className={"spaced"} color={"purple"}>STRATEGY</Header>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
              </Grid.Column>
              <Grid.Column>
                <img src={DesignHmIcon} alt="Strategy Icon" />
                <Header as={'h4'} className={"spaced"} color={"purple"}>DESIGN</Header>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
              </Grid.Column>
              <Grid.Column>
                <img src={DevHmIcon} alt="Strategy Icon" />
                <Header as={'h4'} className={"spaced"} color={"purple"}> DEVELOPMENT</Header>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,</p>
              </Grid.Column>
            </Grid>
            <Link className={"spaced c-button"} to="/services/"> All SERVICES</Link>
          </Segment>
        </Container>
      </div>
      <div className={"form"}>
        <Container>
          <Segment padded={"very"} basic className={"fluid-grid"}>
            <Header as={'h2'}>Like what you see?  LETS TALK.</Header>
            <Header as={'h4'} className={"spaced"}>SUBMIT REQUEST</Header>
            <Form>
              <Grid columns={2}>
                <Grid.Column>
                  <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                  </Form.Field>
                  <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column>
                  <Form.TextArea label='About' placeholder='Please describe your project ...' />
                  <Button className={'c-button inverse'} type='submit'>Submit</Button>
                </Grid.Column>
              </Grid>
            </Form>
          </Segment>
        </Container>
      </div>
    </div>
  )
}

export const query = graphql`
query MyFilesQuery {
  allMarkdownRemark(
    filter: {frontmatter: { tags: {in: ["featured"]} } },
   sort: { fields: [frontmatter___index], order: ASC }
 )
     {
       edges {
         node {
           id
           excerpt
           fields {
             slug
           }
           frontmatter {
             title
             date
             tags
            image {
              childImageSharp {
                responsiveResolution(width: 600) {
                  src
                }
              }
            }
           }
         }
       }
     }
  }
`
