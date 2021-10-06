import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, FloatingLabel } from 'reactstrap';

const ContactForm = () => {

  return (
    <footer className='bg-dark fixed-bottom'>
      <Form className='mx-3 my-3'>
        <Row className='justify-content-center'>
          <Col xl={3} lg={3} md={3} sm={6} xs={6}>
            <FormGroup>
              <Label for='email' className='text-light'>Email</Label>
              <Input type='email' id='email' name='email' placeholder='JohnDoe@mail.com' bsSize='sm' />
            </FormGroup>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6} xs={6}>
            <FormGroup>
              <Label for='Name' className='text-light'>Full Name</Label>
              <Input type='text' id='name' name='name' placeholder='John Doe' bsSize='sm' />
            </FormGroup>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xl={2} lg={2} md={2} sm={4} xs={4}>
            <FormGroup>
              <Label for='company' className='text-light'>Company</Label>
              <Input type='text' id='company' name='company' placeholder='Company' bsSize='sm' />
            </FormGroup>
          </Col>
          <Col xl={2} lg={2} md={2} sm={4} xs={4}>
            <FormGroup>
              <Label for='location' className='text-light'>Location</Label>
              <Input type='text' id='location' name='location' placeholder='New York' bsSize='sm' />
            </FormGroup>
          </Col>
          <Col xl={2} lg={2} md={2} sm={4} xs={4}>
            <FormGroup>
              <Label for='remote' className='text-light'>Remote?</Label>
              <Input type='select' name='remote' id='remote' bsSize='sm'>
                <option>Yes</option>
                <option>No</option>
                <option>Possibility</option>
                <option>Hybrid</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xl={6} lg={6} md={6}>
            <FormGroup>
              <Label for="message" className='text-light'>Message</Label>
              <Input type="textarea" name="message" id="message" />
            </FormGroup>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col xl='auto' lg='auto' md='auto' sm='auto' xs='auto'>
            <Button color='success' className='mt-3 mb-3'>Submit</Button>
          </Col>
        </Row>
      </Form>
    </footer>
  )
};

export default ContactForm;