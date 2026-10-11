import { useGLTF, Html } from "@react-three/drei";

export const Arcade = () => {
  const arcadeMachine = useGLTF("/models/arcade.glb");
  return (
    <>
      <group>
        <pointLight intensity={0.4} distance={0.5} decay={2} position={[-2,1.2,-0.6]} />
        {/* <pointLight intensity={2} distance={0.8} decay={2} position={[-2,1.7,-0.6]} /> */}

        <primitive object={arcadeMachine.scene} />
      </group>
    </>
  );
};

useGLTF.preload("models/arcade.glb");
