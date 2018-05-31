import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import axios from 'axios';


class ContactForm extends React.Component {

  render() {
    return (
    // <Form name="contact" method="POST" netlify>
    //   <Grid columns={2} className={'mobile tablet'}>
    //     <Grid.Column>
    //     <Form.Field>
    //       <label>
    //         Name:
    //         <input
    //           name="name"
    //           type="text"/>
    //       </label>
    //       </Form.Field>
    //       <Form.Field>
    //       <label>
    //         Email:
    //         <input
    //           name="email"
    //           type="email"/>
    //       </label>
    //       </Form.Field>
    //       <Form.Field>
    //       <label>
    //         Company Name:
    //         <input
    //           name="company"
    //           type="text"/>
    //       </label>
    //       </Form.Field>
    //     </Grid.Column>
    //     <Grid.Column>
    //       <label>
    //         Have an idea in mind?:
    //         <Form.TextArea
    //           name="message"
    //           placeholder="Please describe your project ..."/>
    //         <Button className={'c-button inverse'} type='submit'>Submit</Button>
    //       </label>
    //     </Grid.Column>
    //   </Grid>
    // </Form>
    <div>
    <form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</div>
    );
  }
}
export default ContactForm
