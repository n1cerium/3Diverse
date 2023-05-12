import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import rubiksObj from "../../models/rubiks.obj";
import rubiksMtl from "../../models/rubiks.mtl";

//creates a rubiks cube model from the imported obj and mtl
// uses loaders to load the materials and objesct

export default function Rubiks() {
    const group = useRef();
    const materials = useLoader(MTLLoader, rubiksMtl);
    const obj = useLoader(OBJLoader, rubiksObj, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <group ref={group}>
            <primitive object={obj} />
        </group>
    );
}
