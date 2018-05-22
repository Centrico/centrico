import React from 'react'
import Link from 'gatsby-link'
import { Grid, Container, Image, Header, Input, Form, Button, Segment, Label } from 'semantic-ui-react'
import ContactForm from '../components/form'


const Contact = () => (
  <div>
    <Container>
      <Segment padded={"very"} basic>
        <Header as={'h2'} color={"purple"} className={"main-header"}>Start a Project with Us!</Header>
        <p>We’ve been producing top quality products for over a decade combined of efforts that give THOUGHTCODE a unique approach. Our experience working in corporate, startup and consulting setups give us the confidence to understand what you mean, what you want and the urgency of the matter. We strive to provide you the best we can be with any project.</p>
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

export default Contact
