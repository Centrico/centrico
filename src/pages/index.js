import _ from 'lodash'
import React from 'react'
import Link from 'gatsby-link'

var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

import { Grid, Image, Header, Input, Form, Button } from 'semantic-ui-react'


export default ({ data }) => {
  return (
    <div>
      <Header as={'h2'} className={"main-header"}>Creative Digital Solutions</Header>

      <h4>RECENT WORK</h4>
      <Grid columns={4}>
      {data.allMarkdownRemark.edges.map(({ node }) =>
          <Grid.Column>
            <h3>{node.frontmatter.title}</h3>
            {node.excerpt}
            <Link to={node.fields.slug}> go </Link>
            {node.frontmatter.tags.map(({i}) =>
            <span>{[i]}</span>
          )}
          </Grid.Column>
      )}
      </Grid>

      <Header as={'h2'} className={"main-header"}>We’re All an Innovative Force</Header>
      <Header as={'h4'}> OUR APPROACH</Header>
      <p>We are a digital firm with creativity at the core. We believe our clients represent the innovative force that enhances, helps, transforms... people’s lifes. We are here to help you push those boundries even further and provide meaningful experiences that WOW costmers and drive bussines. We focus in  websites, custom apps, user experience, branding, marketing, and all things digital for clients, audiences and ourselves.</p>
      <Link to="/about/">About</Link>

      <Header as={'h2'} className={"main-header"}>We help you design and develop products that people love.</Header>
      <Grid columns={3}>
        <Grid.Column>
          <Header as={'h4'}>STRATEGY</Header>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        </Grid.Column>
        <Grid.Column>
          <Header as={'h4'}>DESIGN</Header>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        </Grid.Column>
        <Grid.Column>
          <Header as={'h4'}> DEVELOPMENT</Header>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        </Grid.Column>
        <Link to="/services/">VIEW All SERVICES</Link>
      </Grid>

      <Header as={'h2'}>Like what you see?  LETS TALK.</Header>
      <Header as={'h4'}> DEVELOPMENT</Header>
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
            <Button type='submit'>Submit</Button>
          </Grid.Column>
        </Grid>
      </Form>
    </div>
  )
}

export const query = graphql`
  query MyFilesQuery {
  allMarkdownRemark
   (filter: {frontmatter: { tags: {in: ["featured"]} } } )
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
           }
         }
       }
     }

  }
`
