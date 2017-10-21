import React from 'react'
import { Grid, Form, Button } from 'semantic-ui-react'


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
    // console.log(this.state.name);
    // console.log(this.state.email);
    // console.log(this.state.phone);
    // console.log(this.state.company);
    // console.log(this.state.message);
   event.preventDefault();
 }

  render() {
    return (
    <Form onSubmit={this.handleSubmit}>
      <Grid columns={2}>
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
