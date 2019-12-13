import React, {} from 'react';
import './App.css';
import styled from 'styled-components'

import {MapEurope} from './modules/map-europe';
import {MapCeskoKrajeFull} from './modules/map-cs';
import { City } from './modules/city';
import { LocationDot } from './modules/location-dot';

import { ReactComponent as Logo } from './logo.svg';


const Section = styled.section`
`;


function App() {
 const isCzCountry = window.location.hash === '#/countries/cz';
  return (
    <Section>
      <LocationDot />
      {!isCzCountry && <MapEurope />}
      {isCzCountry && <MapCeskoKrajeFull />}
    </Section>
  );
}

export default App;
