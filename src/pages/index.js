import React from 'react'
import Link from 'gatsby-link'

var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');


var mark = `
 Contents
`;

export default ({ data }) => {
  return (
    <div>
      <ReactMarkdown source={mark} />
      <h1>markdown</h1>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div>
            {node.id.toString()}
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query MyFilesQuery {
  allMarkdownRemark
   (filter: {frontmatter: { tags: {in: ["react"]} } } )
     {
       edges {
         node {
           id
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
