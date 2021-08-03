// THIS CONTAINS THE STRUCTURE FOR COMPONENTS TO BE USED
import React, { Suspense } from 'react';
// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// import * as THREE from 'three';
import './App.css';
import AnimationCanvas from './components/AnimationCanvas'

function App() {
  return (
      <div id='app'>
        <h1>ENTRY-10:React/Three-Template</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas />
        </Suspense>
      </div>
  );
}

export default App;


