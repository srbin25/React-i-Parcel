import React from 'react';

import {Nav, Navbar, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import { withTheme } from 'styled-components';

const Lista ={
color: "#fff"
};

const  Navigacija = ()=>(
  
         <Navbar bg="primary" variant="pills">
            <Navbar.Brand style={Lista} href="/">Navbar</Navbar.Brand>
            <Nav className ="mr-auto" >
                <Nav.Link style={Lista} href="/home">Home</Nav.Link>
                <Nav.Link style={Lista} href="/kontakt">Kontakt</Nav.Link>
                <Nav.Link  style={Lista} href="/omeni">O meni</Nav.Link>                
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
   
  </Navbar>

   
);
export default Navigacija;