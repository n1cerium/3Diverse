import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import keyboardObj from "../../models/keyboard.obj";
import keyboardMtl from "../../models/keyboard.mtl";

//creates a keyboard model from the imported obj and mtl
// uses loaders to load the materials and objesct

export default function Keyboard() {
    const group = useRef();
    const materials = useLoader(MTLLoader, keyboardMtl);
    const obj = useLoader(OBJLoader, keyboardObj, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <group ref={group}>
            <primitive object={obj} />
        </group>
    );
}
