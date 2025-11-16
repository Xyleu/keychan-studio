import { Canvas } from "@react-three/fiber";
import { Grid, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";

export const ViewportCanvas = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-border overflow-hidden">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 5, 10]} />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          
          {/* Grid floor */}
          <Grid
            args={[20, 20]}
            cellSize={1}
            cellThickness={0.5}
            cellColor="#6B7280"
            sectionSize={5}
            sectionThickness={1}
            sectionColor="#40E0D0"
            fadeDistance={30}
            fadeStrength={1}
            followCamera={false}
            infiniteGrid={true}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
