import React, { Suspense } from 'react';
import './ThreeEx.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Background from "./component/Background";
import TextSection from "./component/TextSection";
import Box from "./component/Box";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


/* example from https://www.youtube.com/watch?v=wxvSHOrBHbw */

export default function About() {
    return (
        <Wrapper className="App">
            <Background />
            <TextSection />
            <Canvas className="canvas">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <Box />
                </Suspense>
            </Canvas>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;


  canvas {
    height: 500px;
    }
`;