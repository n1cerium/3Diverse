import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import mugObj from "../../models/mug.obj";
import mugMtl from "../../models/mug.mtl";

export default function Mug() {
    const group = useRef();
    const materials = useLoader(MTLLoader, mugMtl);
    const obj = useLoader(OBJLoader, mugObj, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <group ref={group}>
            <primitive object={obj} />
        </group>
    );
}
