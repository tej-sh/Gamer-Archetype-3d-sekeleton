import { useGLTF, Text, Image, Text3D } from "@react-three/drei";
import { useMemo, useState } from "react";
import { SkeletonUtils } from "three-stdlib";

export const Card = ({
  question = "if you are seeing this the game is fked",
  textcolor = "#c8c213",
  imageurl = "./assets/wizard.png",
  card_position = [0.8, 1, 0.9],
  card_rotation = [0, 1.4, 0],
  textfont = "/fonts/Ravenscroft.ttf",
  card_scale = 0.02
}) => {
  const card = useGLTF("/models/valleycard.glb");
  // const [hovered, setHovered] = useState(false);
  const scene = useMemo(() => SkeletonUtils.clone(card.scene),[card.scene])
  return (
    <group
      scale={card_scale}
      position={card_position}
      rotation={card_rotation}
    >
      <pointLight
        intensity={0.2}
        distance={0.3}
        decay={1}
        position={[0, -1, 10]}
      />
      <primitive object={scene} />

      <group position={[-0.2, 3.5, 0.78]}>
        <Image url={imageurl} scale={[8, 6]} />
      </group>

      <group position={[-0.3, -3.5, 1]}>

        <Text
          fontSize={1.2}
          maxWidth={6}
          color={textcolor}
          outlineWidth={0.1}
          outlineColor="#533626"
          outlineBlur={0.3}
          textAlign="center"
          font="/fonts/Ravenscroft.ttf"
        >
          {question}
        </Text>
      </group>
    </group>
  );
};

useGLTF.preload("/models/valleycard.glb");

