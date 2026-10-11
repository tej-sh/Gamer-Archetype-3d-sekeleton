import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function CardCoordinates() {
  const { scene } = useGLTF("/models/maincard.glb");

  useEffect(() => {
    scene.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    console.log("===== CARD COORDINATES =====");
    console.log("Center:", center.toArray());
    console.log("Min:", box.min.toArray());
    console.log("Max:", box.max.toArray());
    console.log("Dimensions:", size.toArray());
  }, [scene]);

  return null;
}
