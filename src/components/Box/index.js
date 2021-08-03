import React, { useRef, useState, Suspense, useMemo } from 'react';
// import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// import * as THREE from 'three';



function Box() {
    return(
        <mesh>
            <boxBufferGeometry attach='geometry' 
            args={[15,15,15,10,10,10]}
            />
            <meshPhongMaterial attach='material'
            wireframe={true}
            color={0x000000} />
        </mesh>
    )
}

export default Box;