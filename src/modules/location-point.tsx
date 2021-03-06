import React, { useState } from 'react';
import styled from 'styled-components';
import jsonData from '../cr-regions.json';

interface Service {
  name: string;
  type: 'bus' | 'taxi' | 'vip-taxi'
}

interface Item {
  type: 'city' | 'airport';
       gps: [number, number];
  services: Array<Service>;
  name: string;
}



const ServiceItemTspan = styled.tspan`
  font-size: 40px; 
  fill: #343a40; 
  z-index: 5;
  :hover {
    cursor: pointer;
    font-weight: 600;
  }
`;
function ServiceItem(props: { service: Service, index: number }) {
  const { service, index } = props;
  return (
    <ServiceItemTspan x={30} y={100 + index * 70}>
      {service.name}
    </ServiceItemTspan>
  );
}


function Services(props: { services: Array<Service>, coords: SvgCoords }) {
  const { coords } = props;
  return (
    <svg x={coords.x} y={coords.y }>
      <rect x="0" y="30" width="450" height="250" fill="white" rx="8" stroke="#343a40"></rect>
      <text>
        {props.services.map((s, i) => <ServiceItem key={s.name} service={s} index={i} />) }
      </text>
    </svg>
  );
}


function AirportIcon(props: { coords: SvgCoords }) {
  const { coords: { x, y } } = props;
  return (
  <svg x={x} y={y} className="airport_icon" width="70" height="70" viewBox="0 0 1024 1024" fill="royalblue" cursor="pointer">
    <path d="M942.787 117.91L904.53 80.7c-21.126-20.545-55.388-20.545-76.51 0L653.735 250.195 177.646 117.91l-76.51 74.406 374.062 231.512L303.939 590.38H65.364v52.613l216.414 105.237 3.355-4.894 1.678 1.63-5.032 3.264L389.986 958.71h54.103V677.325l145.886-141.881L828.02 899.246l76.51-74.411-136.027-463.018 174.284-169.5c21.132-20.547 21.132-53.867 0-74.407z" />
  </svg>
  );
}

type SvgCoords = { x: number, y: number };

interface CityAirportProps {
  item: Item;
  coords: SvgCoords;
}

const CityIcon = styled.circle`
  fill:darkorange; 
  cursor: pointer
  `;
const CityIconTitle = styled.text`
  font-size: 48px;
  font-weight: 600;
  fill:#343a40`
;
function City(props: CityAirportProps) {
  const { item, coords } = props;
  const [visible, setVisible] = useState(false);
  return (
    <g>
      <CityIcon cx={coords.x} cy={coords.y} r={20} onClick={() => setVisible(!visible)} />
      <CityIconTitle x={coords.x} y={coords.y}>{item.name}</CityIconTitle>
      {visible && <Services coords={coords} services={item.services} />}
    </g>
  )
}

const AirportIconTitle = styled.text`
  font-size: 48px;
  font-weight: 600;
  fill:#343a40
`;
function Airport(props: CityAirportProps) {
  const { item, coords } = props;
  const [visible, setVisible] = useState(false);
  return (
    <g onClick={() => setVisible(!visible)}>
      <AirportIcon coords={coords} />
      <AirportIconTitle x={coords.x} y={coords.y}>{item.name}</AirportIconTitle>
      {visible && <Services coords={coords} services={item.services} />}
    </g>
  )
}

interface PointProps {
  item: Item;
}

function Point(props: PointProps) {
  const { item } = props;
  const coords: SvgCoords = { x: getLong(item.gps[1]), y: getLat(item.gps[0]) }; 

  if (item.type === 'city') {
    return <City coords={coords} item={item} />;
  } else {
    return <Airport coords={coords} item={item} />
  }
}



/**
 * const x1 = [50.256606001583165,12.098201644486029];
const x2 = [49.55762957996575,18.847714122751142];
const y1 = [51.05305022211117,14.299896213465711];
const y2 = [48.56537072854968,14.32734443820593];
 */

const x1 = [12.098201644486029, -400];
const x2 = [18.847714122751142, 3850];
const y1 = [51.05305022211117, 25];
const y2 = [48.56537072854968, 2450];
const praha = [50.0874654, 14.4212535, 1100, 990];

const offsetX = 25+50;
const offsetY = -400;

// console.log(51.05305022211117-48.56537072854968) // 2.4876794935614868
const nX = 2225/(51.05305022211117-48.56537072854968); // 894.407822936458
console.log('Prague: ' + ((51.05305022211117-50.0874654)*nX+offsetX));

// console.log(18.847714122751142-12.098201644486029); // 6.749512478265114
const nY = 4250/(18.847714122751142-12.098201644486029); // 629.6751081927646




function getLat(lat:number) {
  lat = offsetX+(51.05305022211117-lat)*894.407822936458;
  return lat;
}

function getLong(long:number) {
 long = offsetY+(long-12.098201644486029)*nY
  return long;
}

export function LocationPoint() {
  const data = jsonData as unknown as Array<Item>;
  return  data.map((item, i) => <Point key={i} item={item} />);
}

