import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import droneObj from "../../models/drone.obj";
import droneMtl from "../../models/drone.mtl";

export default function Drone() {
    const group = useRef();
    const materials = useLoader(MTLLoader, droneMtl);
    const obj = useLoader(OBJLoader, droneObj, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <group ref={group}>
            <primitive object={obj} />
        </group>
    );
}
