import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import "./test.css";
import { QuizEngine } from "./QuizEngine.jsx";
import { ActualScene } from "./ActualScene.jsx";

const LightWithHelper = () => {
  const targetref = useRef();
  return (
    <>
      <object3D ref={targetref} position={[1.3, 0, -0.8]}></object3D>
      <spotLight
        ref={targetref}
        intensity={15}
        position={[1.2, 3.1, -0.8]}
        color={0xbcf1e1}
        angle={Math.PI / 3.4}
        penumbra={0}
        target-position={[1.2, 0, -0.8]}
      />
    </>
  );
};

const Background = () => {
  const basement = useGLTF("/models/basement.glb");
  return <primitive object={basement.scene} scale={0.4}></primitive>;
};
useGLTF.preload("/models/basement.glb");

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <OrbitControls
            makeDefault
            zoomToCursor
            maxDistance={1}
            target={[-0.35, 1.18, -1.85]}
          />
          <PerspectiveCamera
            makeDefault
            near={0.1}
            far={100}
            position={[-0.72, 1.23, -2.02]}
            fov={40}
          />
          <ambientLight intensity={0.05} color={0xffffff} />
          <LightWithHelper />
          <group position={[1, 0, -1]} rotation={[0, 3.2, 0]}>
            <ActualScene />
            <QuizEngine />
          </group>
          <Background />
        </Canvas>
      </div>
    </>
  );
}

export default App;
