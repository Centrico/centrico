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
      <h1>pages filtered by folder</h1>
      {data.allSitePage.edges.map(({ node }) =>
        <div>
          <Link to={node.path}>
            {node.path.toString()}
          </Link>
        </div>
      )}
      <h1> Markdown </h1>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id}>
            <h3>{node.frontmatter.title}{" "}</h3>
            {node.frontmatter.date}
            {node.excerpt}
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query MyFilesQuery {
    allSitePage
     (filter: {path: {regex: "/posts/i"}})
     {
       edges {
         node {
           path
         }
       }
    }

    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
