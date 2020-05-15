import React from 'react';
import { usePosition } from 'use-position';

const UseCurrentPosition = () => {
  let watch = true;
  const {latitude, longitude } = usePosition(watch, {enableHighAccuracy: true});
  return (
    <code>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
    </code>
  );
};

export default UseCurrentPosition