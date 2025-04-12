import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

// Component to load and display GLB model with animations
function Model({ file }) {
  const { scene, animations } = useGLTF(file);
  const { actions } = useAnimations(animations, scene);

  // Play the animation when the component mounts
  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]].play(); // Play the first animation
    }
  }, [actions]);

  return <primitive object={scene} scale={1.5} />;
}

// Main 3D viewer component
export default function GLBViewer({ file }) {
  return (
    <Canvas
      camera={{ position: [0, 3, 6], fov: 60 }} // Adjust camera position and FOV
    >
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Suspense for lazy loading of the GLB file */}
      <Suspense fallback={null}>
        <Model file={file} />
      </Suspense>

      {/* OrbitControls with rotation constraints and zoom settings */}
      <OrbitControls
        target={[0, 2.5, 0]} // Focus slightly higher (above the head/face)
        minPolarAngle={Math.PI / 2 - Math.PI / 36} // 80 degrees (10 degrees from vertical axis)
        maxPolarAngle={Math.PI / 2 + Math.PI / 36} // 100 degrees (10 degrees from vertical axis)
        minDistance={3} // Minimum zoom distance (closer zoom limit)
        maxDistance={10} // Maximum zoom distance (farther zoom limit)
        rotateSpeed={0.5} // Speed of rotation
        zoomSpeed={0.5} // Speed of zoom
        panSpeed={0.5} // Speed of panning (optional)
        enableRotate={true}
        onChange={(e) => {
          // Restrict rotation to 10 degrees horizontally
          const maxAngle = Math.PI / 18; // 10 degrees in radians
          const { theta } = e.target.getAzimuthalAngle();
          if (theta > maxAngle) {
            e.target.setAzimuthalAngle(maxAngle);
          } else if (theta < -maxAngle) {
            e.target.setAzimuthalAngle(-maxAngle);
          }
        }}
      />
    </Canvas>
  );
}
