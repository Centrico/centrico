import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import axios from 'axios';


class ContactForm extends React.Component {

  render() {
    return (
    <Form name="contact" method="POST" data-netlify="true">
      <Grid columns={2} className={'mobile tablet'}>
        <Grid.Column>
        <Form.Field>
          <label>
            Name:
            <input
              name="name"
              type="text"/>
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            Email:
            <input
              name="email"
              type="text"/>
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            Phone Number:
            <input
              name="phone"
              type="text"/>
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            Company Name:
            <input
              name="company"
              type="text"/>
          </label>
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <label>
            Have an idea in mind?:
            <Form.TextArea
              name="message"
              placeholder="Please describe your project ..."/>
            <Button className={'c-button inverse'} type='submit' value="Submit">Submit</Button>
          </label>
        </Grid.Column>
      </Grid>
    </Form>
    );
  }
}
export default ContactForm
