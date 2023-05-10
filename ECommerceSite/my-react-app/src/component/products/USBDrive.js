import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import usbdriveObj from "../../models/usbdrive.obj";
import usbdriveMtl from "../../models/usbdrive.mtl";

export default function USBDrive() {
    const group = useRef();
    const materials = useLoader(MTLLoader, usbdriveMtl);
    const obj = useLoader(OBJLoader, usbdriveObj, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    return (
        <group ref={group}>
            <primitive object={obj} />
        </group>
    );
}
