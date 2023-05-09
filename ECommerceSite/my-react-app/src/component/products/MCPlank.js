import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import mcPlankFbx from "../../models/mcplank.fbx";

export default function MCPlank() {
    const group = useRef();
    const fbx = useLoader(FBXLoader, mcPlankFbx);

    return (
        <group ref={group}>
            <primitive object={fbx} />
        </group>
    );
}
