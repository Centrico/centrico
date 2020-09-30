import React from 'react'
import Link from 'gatsby-link'
import ContactForm from '../components/form'
import { Grid, Container, Image, Header, Input, Form, Button, Segment, Label } from 'semantic-ui-react'
import SiteNav from '../components/site-nav'

const Portfolio = ({ data }) => (
  <div>
    <SiteNav></SiteNav>
    <Segment padded basic className={"fluid-grid portfolio"}>
      <Grid columns={5} className={'thumbnails-grid thumbnails-grid-port'}>
      {data.allMarkdownRemark.edges.map(({ node }) =>
          <Grid.Column>
            <Link title={node.frontmatter.title} className={'thumbnail'} to={node.fields.slug} style={{ backgroundImage: "url(" + node.frontmatter.image.childImageSharp.resolutions.src + ")" }}>
              <div className={'text'}>
                <h5>{node.frontmatter.title}</h5>
                <div className={'tags'}>
                {node.frontmatter.tags.map(i => <Label circular color={'black'}>{[i]}</Label>)}
                </div>
              </div>
            </Link>
          </Grid.Column>
      )}
      </Grid>
    </Segment>
    <div className={"form"}>
      <Container>
        <Segment padded={"very"} basic className={"fluid-grid"}>
          <Header as={'h2'}>Like what you see?  LETS TALK.</Header>
          <Header as={'h4'} className={"spaced"}>SUBMIT REQUEST</Header>
          <ContactForm/>
        </Segment>
      </Container>
    </div>
  </div>
)

export default Portfolio


export const query = graphql`
query portfolio {
  allMarkdownRemark
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
                resolutions(width: 600) {
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
