import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import toyTankObj from "../../models/toytank.obj";
import toyTankMtl from "../../models/toytank.mtl";

export default function ToyTank() {
    const group = useRef();
    const materials = useLoader(MTLLoader, toyTankMtl);
    const obj = useLoader(OBJLoader, toyTankObj, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <group ref={group}>
            <primitive object={obj} />
        </group>
    );
}
