import React from 'react';
import styled from 'styled-components';
import data from '../cr-regions.json';
import Popup from "reactjs-popup";

const Point = styled.circle`
  fill:darkorange;
`;

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
console.log(nY);

function getLat(lat:number) {
  lat = offsetX+(51.05305022211117-lat)*894.407822936458;
  return lat;
}

function getLong(long:number) {
 long = offsetY+(long-12.098201644486029)*nY
  return long;
}






const PopupExample = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);








export function LocationPoint() {
  return (
    data.map((item, i) => {  console.log("Long: " + item.gps[1])
      return (
        <Point  key={i} 
                cx={getLong(item.gps[1])} 
                cy={getLat(item.gps[0])} 
                r="25" 
                onClick={() => alert(item.name + ', LAT: ' + item.gps[0] + '/ ' + getLat(item.gps[0]) + ', LONG: ' + item.gps[1] + '/ ' + getLong(item.gps[1]))}
        />
      );
    })
  );
}

