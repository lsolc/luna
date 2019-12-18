// @ts-nocheck
import React from "react";
import { LocationPoint } from './location-point';
import { AirportIcon } from './airport';
import { MapCZ } from "./map-cz";

export function MapCeskoKrajeFull() {

  return (
    <MapCZ>
      <LocationPoint />      
    </MapCZ>
  );
}