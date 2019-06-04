import React, { Component } from 'react'
import { Container, Button, TextArea, Form, Icon, Header } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade';
import './contact.css'

class Contact extends Component {

render() {

    return (
        <div id='contact'>
          <Container className='contact'>
            <Header textAlign='center' as='h2' icon>
                <Fade>
                    <Icon className='glow' name='paper plane' />
                </Fade>
                Contact
            </Header>
            <Form size='huge' name="contact" action='#' method="post" data-netlify="true">
                <Form.Field>
                    <input type="hidden" name="form-name" value="contact" />
                </Form.Field>
                <Form.Field required>
                    <label>Name</label>
                    <input name='name' type='text' required placeholder='Name' />
                </Form.Field>
                <Form.Field required>
                    <label>Email</label>
                    <input name='email' type='email' placeholder='Email' />
                </Form.Field>
                <Form.Field
                    name='message'
                    control={TextArea}
                    label='Message'
                    placeholder='Message'
                    required
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