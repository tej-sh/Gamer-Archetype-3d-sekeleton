import { useGLTF } from "@react-three/drei";

export const ActualScene = () => {
  const Floor = () => {
    const floor_material = useGLTF("/models/floor_material.glb");
    return <primitive object={floor_material.scene} scale={0.48} />;
  };
  useGLTF.preload("/models/floor_material.glb");
  const NpcMiddle = () => {
    const character_middle = useGLTF("/models/character_middle.glb");
    return <primitive object={character_middle.scene}></primitive>;
  };
  useGLTF.preload("/models/character_middle.glb");

  const NpcLeft = () => {
    const character_left = useGLTF("/models/character_left.glb");

    return <primitive object={character_left.scene}></primitive>;
  };
  useGLTF.preload("/models/character_left.glb");

  const NpcRight = () => {
    const character_right = useGLTF("/models/character_right.glb");
    return <primitive object={character_right.scene}></primitive>;
  };
  useGLTF.preload("/models/character_right.glb");


  const Table = () => {
    const table = useGLTF("/models/table.glb");
    return <primitive object={table.scene}></primitive>;
  };
  useGLTF.preload("/models/table.glb");
  return (
    <>
      {/* <Background/> */}
      <Floor />
      <Table />
      <NpcMiddle />
      <NpcLeft />
      <NpcRight />
    </>
  );
};
