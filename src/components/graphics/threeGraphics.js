import React, { useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { softShadows } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Model from "./threeHeadModel";
import { useSpring, animated } from "react-spring";

//Soft Shadows
softShadows();

//Orbit Controls
extend({ OrbitControls });
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame((state) => {
    controls.current.update();
  });

  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

//Component
const ThreeGraphics = () => {
  const Spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={Spring} className="cgi">
      {/*Canvas*/}
      <Canvas
        shadowMap
        colorManagement
        camera={{ fov: 60, position: [0.18, 0.03, 0.18] }}
      >
        {/*Orbit Controls*/}
        <CameraControls />
        {/*Light*/}
        <ambientLight intensity={0.25} />
        <directionalLight
          castShadow
          position={[3, 3, 3]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={64}
          shadow-camera-top={8}
          shadow-camera-right={8}
          shadow-camera-left={-8}
          shadow-camera-bottom={-8}
        />
        <pointLight position={[-3, 0, -3]} intensity={0.5} />
        {/*Models*/}
        <Model />
      </Canvas>
    </animated.div>
  );
};
export default ThreeGraphics;
