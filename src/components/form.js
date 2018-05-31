import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import axios from 'axios';


class ContactForm extends React.Component {

  render() {
    return (
    <div>
      <form name="contact" method="POST" data-netlify="true">
        <p className={"form-info"}>
          <p>
            <label>Your Name: <br/><input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email:<br/> <input type="email" name="email" /></label>
          </p>
        </p>
        <p className={'form-message'}>
          <p>
            <label>Message: <br/><textarea name="message"></textarea></label>
          <br/>
          </p>
        </p>
        <p className={"form-button"}>
          <button className={'c-button primary-button--inverse'} type="submit">Send</button>
        </p>
      </form>
    </div>
    );
  }
}
export default ContactForm
