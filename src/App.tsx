import React, {} from 'react';
import './App.css';
import styled from 'styled-components'
import Popup from "reactjs-popup";

import {MapEurope} from './modules/map-europe';
import {MapCeskoKrajeFull} from './modules/map-cs';
import { PopupRightCenter } from './modules/popup-right-center';

import { City } from './modules/city';


import { ReactComponent as Logo } from './logo.svg';


const Section = styled.section`
background-color: lightslategrey;
`;


const PopupExample = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);

function App() {
 const isCzCountry = window.location.hash === '#/countries/cz';
  return (
    <div>
      <PopupRightCenter />
       <Section>
      {!isCzCountry && <MapEurope />}
      {isCzCountry && <MapCeskoKrajeFull />}
    </Section>
    </div>
   
  );
}

export default App;
