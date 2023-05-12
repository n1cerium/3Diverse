import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../images/map.jpg";


//creates the 3d box 
//uses txtureloader from three to add the texture image to the sides of the box
//returns a mesh that can rotate and generating a geometric shape size 3 with a color map

export default function Box() {
    const colorMap = useLoader(TextureLoader, texture);
    return (
        < mesh rotation={[90, 0, 20]} >
            <boxBufferGeometry attach="geometry" args={[3,3,3]} />
            <meshStandardMaterial map={colorMap} />
        </mesh>
    );
}

// <meshLambertMaterial attach="material" color="blue" />  other was to add color 
// <meshNormalMaterial attach="material" />