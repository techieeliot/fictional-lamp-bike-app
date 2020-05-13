import React from 'react';
import { usePosition } from 'use-position';

const UseCurrentPosition = () => {
  const watch = true;
  const {latitude, longitude, error} = usePosition(watch, {enableHighAccuracy: true});
  return (
    <code>
      latitude: {latitude}<br/>
      longitude: {longitude}<br/>
      error: {error}
    </code>
  );
};

export default UseCurrentPosition