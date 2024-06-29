"use client";

import React from 'react';
import { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from '@vis.gl/react-google-maps';

function AreaMap() {
  const position = { lat: 53.54, lng: 10 };

  return (
    <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
      <div style={{ height: '50vh' }}>
        <Map zoom={9} center={position}></Map>
      </div>
    </APIProvider>
  );
}

export default AreaMap;
