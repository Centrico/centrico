import React from "react"
import { Grid, Container, Label, Segment, Header} from 'semantic-ui-react'
import ContactForm from '../components/form'
import SiteNav from '../components/site-nav'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <SiteNav></SiteNav>
      <Segment basic className={"fluid-grid"}>
          <Grid columns={1} className={'thumbnails-grid'}>
            <Grid.Column>
            {post.frontmatter.hero ? <img className="project-hero" src={post.frontmatter.hero.childImageSharp.resolutions.src} alt="Smiley face" /> : null}
            </Grid.Column>
          </Grid>
      </Segment>
      <Container>
        <Segment padded={'very'} basic>
          <Header as={'h2'} color={"purple"} className={"main-header"}>{post.frontmatter.title}</Header>
          {post.frontmatter.tags.map(i => <Label circular color={'black'}>{[i]}</Label>)}
          <div className='markdown-text'>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Segment>
      </Container>
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
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        hero {
         childImageSharp {
           resolutions(width: 3600) {
             src
            }
          }
        }
      }
    }
  }
`
