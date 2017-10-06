import React from 'react'
import Link from 'gatsby-link'

var ReactDOM = require('react-dom');
var ReactMarkdown = require('react-markdown');


var mark = `
# Contents
`;

export default ({ data }) => {
  return (
    <div>
      <ReactMarkdown source={mark} />
      {data.allSitePage.edges.map(({ node }) =>
        <div>
          <Link to={node.path}>
            {node.path.toString()}
          </Link>
        </div>

      )}
    </div>
  )
}

export const query = graphql`
  query MyFilesQuery {
    allSitePage
     (filter: {path: {regex: "/projects/i"}})
     {
       edges {
         node {
           path
         }
       }
    }
  }
`
