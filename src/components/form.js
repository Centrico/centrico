import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'
import axios from 'axios';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
      let url = "https://formspree.io/german@centrico.io";
      axios.post(url, {
        data: {
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          company: this.state.company,
          message: this.state.message
        }
      })
      event.preventDefault();
      document.getElementById("contact-form").reset();
  }

  render() {
    return (
    <Form id="contact-form" onSubmit={this.handleSubmit}>
      <Grid columns={2} className={'mobile tablet'}>
        <Grid.Column>
        <Form.Field>
          <label>
            Name:
            <input
              name="name"
              type="text"
              checked={this.state.name}
              onChange={this.handleInputChange} />
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            Email:
            <input
              name="email"
              type="text"
              checked={this.state.email}
              onChange={this.handleInputChange} />
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            Phone Number:
            <input
              name="phone"
              type="text"
              checked={this.state.phone}
              onChange={this.handleInputChange} />
          </label>
          </Form.Field>
          <Form.Field>
          <label>
            Company Name:
            <input
              name="company"
              type="text"
              checked={this.state.company}
              onChange={this.handleInputChange} />
          </label>
          </Form.Field>
        </Grid.Column>
        <Grid.Column>
          <label>
            Have an idea in mind?:
            <Form.TextArea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
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
