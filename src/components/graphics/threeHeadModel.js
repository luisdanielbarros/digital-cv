import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import headModel from "../../media/3d-model-head.glb";

const Model = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(headModel);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Face_(4,_Web)"].geometry}
        material={materials["Blank Material"]}
      />
    </group>
  );
};
export default Model;

useGLTF.preload(headModel);
