import React, {Component} from 'react';
import { Form, Button, Container } from 'react-bootstrap';


export default class Kontakt extends Component{
    
    render(){
        
      return(
    
         <div style={{backgroundColor:" #444", height:"800px" }}>
             <Container style={{border:"solid red 2px", boxShadow:"10px 10px 5px 0px rgba(0,0,0,0.75)", background:"lightBlue",marginTop:"50px", padding:"10px", borderRadius: "15px"}}>
 <Form >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
 </Container>
         </div>           

         
      );
    }
}

