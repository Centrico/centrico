import _ from 'lodash'
import React from 'react'
import Link from 'gatsby-link'

var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');

import { Grid, Image } from 'semantic-ui-react'


var mark = `
 Contents
`;

export default ({ data }) => {
  return (
    <div>
      <ReactMarkdown source={mark} />
      <h3>RECENT WORK</h3>
      <Grid columns={5}>
      {data.allMarkdownRemark.edges.map(({ node }) =>
          <Grid.Column>
            <h3>{node.frontmatter.title}</h3>
            {node.excerpt}
            <Link to={node.fields.slug}>
              go
            </Link>
            {node.frontmatter.tags.map(({i}) =>
            <span>{[i]}</span>
          )}
          </Grid.Column>
      )}
      </Grid>
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
