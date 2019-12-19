import React, {} from 'react';
import styled from 'styled-components'
import {MapEurope} from './modules/map-europe';
import {MapCeskoKrajeFull} from './modules/map-cs';

import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Section = styled.section`
background-color: lightslategrey;
`;

function App() {
 const isCzCountry = window.location.hash === '#/countries/cz';

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Section>
      {!isCzCountry && <MapEurope />}
      {isCzCountry && <MapCeskoKrajeFull />}
      </Section>
    </div>
  );
}

export default App;
