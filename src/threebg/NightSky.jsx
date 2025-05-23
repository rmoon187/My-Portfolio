import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Glitch, Noise } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing';
import TwinklingStars from "./TwinklingStars";
import { div } from "three/tsl";

const NightSky = () => {
  return (
   <div className="fixed top-0 left-0 w-screen h-full -z-10 pointer-events-none">
     <Canvas 
      camera={{ position: [0, 0, 25], fov: 60 }}
      style={{ background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)' }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#7afcff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff7eb9" />
      
      {/* Background stars */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      <TwinklingStars count={6500} />
      
      <EffectComposer>
        <Bloom 
          intensity={0.1} 
          luminanceThreshold={0.5}
          luminanceSmoothing={0.5}
          height={300}
          kernelSize={5}
        />
        <Noise
          premultiply
          blendFunction={BlendFunction.ADD}
          opacity={0.02}
        />
      </EffectComposer>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        maxDistance={50}
        minDistance={10}
      />
    </Canvas>
   </div>
  );
};

export default NightSky;