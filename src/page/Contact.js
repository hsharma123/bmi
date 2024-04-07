import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row,Col,Form,Button,Card } from 'react-bootstrap';
import { styled } from 'styled-components';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8t82r3f', 'template_kz4m0zk', form.current, 'OtmFwmT72U9GIavs9')
      .then((result) => {
        console.log(result.text);
        alert('message Sent');
        console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>

          <div className="sec-space">
             <Container>
               <Cont>
                 <Row>
                    <Col md= {6} className="mx-auto">
                            <div className="contact-form">
                            <h4 className='mb-4 text-center'>Write Your Feedback</h4>
                                <Card className='pb-4'>
                                      <Form  ref={form} onSubmit={sendEmail}>
                                                  <Form.Group>
                                                      <Form.Label>Full Name</Form.Label>
                                                      <Form.Control type="text" name="from_name" placeholder="EnterYour Full Name" required />
                                                    </Form.Group>
                                                    <Form.Group>
                                                      <Form.Label>Email</Form.Label>
                                                      <Form.Control type="email" name="user_email" placeholder="Enter Your Email" required/>
                                                    </Form.Group>
                                                    <Form.Group>
                                                      <Form.Label>Message</Form.Label>
                                                      <Form.Control as="textarea"  name="message" rows={3} required />
                                                    </Form.Group>
                                                    <Button className='convert-btn' type="submit" size="lg" value= 'send'>Send Message</Button>
                                      </Form>
                                </Card>
                                  
                              </div>
                      </Col>
                 </Row>
               </Cont>
             </Container>
          </div>
  
    </div>
  )
}
const Cont = styled.main`
.card{
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 420px;
  margin: auto;
  border-radius: 20px;
}
`
export default Contact