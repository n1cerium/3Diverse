import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import mcPlankFbx from "../../models/mcplank.fbx";

//creates a Plank model from the imported obj and mtl
// uses loaders to load the materials and objesct

export default function MCPlank() {
    const group = useRef();
    const fbx = useLoader(FBXLoader, mcPlankFbx);

    return (
        <group ref={group}>
            <primitive object={fbx} />
        </group>
    );
}
