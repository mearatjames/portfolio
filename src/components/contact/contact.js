import React, { Component } from 'react'
import { Container, Button, TextArea, Form } from 'semantic-ui-react'
import './contact.css'

class Contact extends Component {

render() {

    return (
        <div id='contact'>
          <Container className='contact'>
            <Form name="contact" action='#' method="post" data-netlify="true">
                <Form.Field>
                    <label>Name</label>
                    <input name='name' placeholder='Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input name='email' type='email' placeholder='Email' />
                </Form.Field>
                <Form.Field
                    id='form-textarea-control-opinion'
                    name='message'
                    control={TextArea}
                    label='Message'
                    placeholder='Message'
                    />
                <Form.Field>
                <div data-netlify-recaptcha="true"></div>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
          </Container>
        </div>
    )
}
}

export default Contact