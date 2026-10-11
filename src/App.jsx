//Wael Yasmina
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import {
  Environment,
  FirstPersonControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import {
  GizmoHelper,
  GizmoViewcube,
  GizmoViewport,
  useHelper,
} from "@react-three/drei";
import { useControls } from "leva";
import { SpotLightHelper } from "three";
import { useGLTF } from "@react-three/drei";
import { Card } from "./Card.jsx";
// import CardCoordinates from "./Temp.jsx";
import "./test.css";
import { Arcade } from "./Arcade.jsx";
import { QuizEngine } from "./QuizEngine.jsx";
import { ActualScene } from "./ActualScene.jsx";
// import { Option1 } from "./Option1.jsx";

const LightWithHelper = () => {
  const targetref = useRef();
  // useHelper(targetref, SpotLightHelper, "red");
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

// const LightWithHelper = () => {
//   const targetref = useRef();
//   // useHelper(targetref, SpotLightHelper, "red");
//   return (
//     <>
//       <object3D ref={targetref} ></object3D>
//       <spotLight
//       ref={targetref}
//         intensity={6}
//         position={[-1,1, -3]}
//         color={0xbcf1e1}
//         angle={Math.PI / 3.4}
//         penumbra={0}
//         target-position={[1.2,0,-0.8]}
//       />

//     </>
//   );
// };

//[1.5 ,3, -2.1]

const Background = () => {
  const basement = useGLTF("/models/basement.glb");
  return <primitive object={basement.scene} scale={0.4}></primitive>;
};
useGLTF.preload("/models/basement.glb");

// const Floor = () => {
//   const floor_material = useGLTF("/models/floor_material.glb");
//   return <primitive object={floor_material.scene} scale={0.48} />;
// };
// useGLTF.preload("/models/floor_material.glb");
// const NpcMiddle = () => {
//   const character_middle = useGLTF("/models/character_middle.glb");
//   return <primitive object={character_middle.scene}></primitive>;
// };
// useGLTF.preload("/models/character_middle.glb");

// const NpcLeft = () => {
//   const character_left = useGLTF("/models/character_left.glb");

//   return <primitive object={character_left.scene}></primitive>;
// };
// useGLTF.preload("/models/character_left.glb");

// const NpcRight = () => {
//   const character_right = useGLTF("/models/character_right.glb");
//   return <primitive object={character_right.scene}></primitive>;
// };
// useGLTF.preload("/models/character_right.glb");

// const Background = () => {
//   const basement = useGLTF("/models/basement.glb");
//   return <primitive object={basement.scene} scale={0.4}></primitive>;
// };
// useGLTF.preload("/models/basement.glb");

// const Table = () => {
//   const table = useGLTF("/models/table.glb");
//   return <primitive object={table.scene}></primitive>;
// };
// useGLTF.preload("/models/table.glb");

// function Boxy() {
//   const boxRef = useRef();

//   const { Speed, Color } = useControls({
//     Speed: { value: 0.05, min: 0, max: 0.03 },
//     Color: { value: "red" },
//   });

//   useFrame(() => {
//     boxRef.current.rotation.x += Speed;
//     boxRef.current.rotation.y += Speed;
//     boxRef.current.rotation.z += Speed;
//   });
//   return (
//     <>
//       <mesh ref={boxRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
//         {/* <sphereGeometry args={[3,8,8 ]} /> */}
//         <boxGeometry args={[1, 1, 1]} />
//         <meshPhongMaterial color={Color} />
//       </mesh>
//     </>
//   );
// }

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas

        // camera={{
        //   // up: [0, 0, 1]
        //   position: [-1 ,3, -1],
        // }}
        // movementSpeed={0.5}
        // autoForward
        >
          {/* <gridHelper args={[10]} />
          <axesHelper args={[10]} /> */}
          {/* <FirstPersonControls/> */}
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
          {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
            <GizmoViewcube />
          </GizmoHelper> */}
          {/* <Boxy /> */}
          <ambientLight intensity={0.05} color={0xffffff} />
          <LightWithHelper />
          {/* <Environment preset="sunset"></Environment> */}
          <group position={[1, 0, -1]} rotation={[0, 3.2, 0]}>
            {/* <Floor />
            <Table />
            <NpcMiddle />
            <NpcLeft />
            <NpcRight />
            <Arcade /> */}
            <ActualScene />
            <QuizEngine />
            {/* <Card /> */}
            {/* <Option1/> */}
            {/* <Card 
              question=""
              textcolor=""
              imageurl=""
              // card_postion={}
              // card_rotation={}
              textfont=""
            
            /> */}
          </group>
          <Background />
        </Canvas>
      </div>
    </>
  );
}

export default App;

//Canvas //camera
//mesh //position //rotation
//directionallight
//spotlight
//meshphongmaterial
