import React, { useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber';
// import * as THREE from 'three';
import Box from '../Box';
import CameraControls from '../CameraControls';


function AnimationCanvas() {
  return (
    <Canvas camera={{ position: [1, 0, 0], fov: 75 }}>
      <Suspense fallback={null}>
        <Box />
      </Suspense>
      <CameraControls />
      <ambientLight args={[0xff0000]} intensity={0.1} />
      <directionalLight position={[0, 0, 5]} intensity={0.5} />
    </Canvas>
  )
}

export default AnimationCanvas;