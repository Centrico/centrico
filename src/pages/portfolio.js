import React from 'react'
import Link from 'gatsby-link'
import ContactForm from '../components/form'
import { Grid, Container, Image, Header, Input, Form, Button, Segment, Label } from 'semantic-ui-react'

const Portfolio = ({ data }) => (
  <div>
    <Container>
      <Segment padded={"very"} basic>
        <Header as={'h4'} className={"spaced"} color={"purple"}>PORTFOLIO</Header>
      </Segment>
    </Container>
    <Segment padded basic className={"fluid-grid"}>
      <Grid columns={5} className={'thumbnails-grid'}>
      {data.allMarkdownRemark.edges.map(({ node }) =>
          <Grid.Column>
            <Link className={'thumbnail'} to={node.fields.slug} style={{ backgroundImage: "url(" + node.frontmatter.image.childImageSharp.responsiveResolution.src + ")" }}>
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
