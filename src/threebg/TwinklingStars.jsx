import { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TwinklingStars = ({ count = 1000 }) => {
  const groupRef = useRef();
  const [hovered, setHover] = useState(false);

  // Color palette for stars
  const starColors = [
    '#ff7eb9', // pink
    '#7afcff', // cyan
    '#feff9c', // yellow
    '#fff740', // bright yellow
    '#ff65a3', // hot pink
    '#7e8ce0', // lavender
    '#52de97', // mint
    '#ff8e6e', // salmon
  ];

  const stars = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color(
        starColors[Math.floor(Math.random() * starColors.length)]
      );
      
      temp.push({
        position: new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(200),
          THREE.MathUtils.randFloatSpread(200),
          THREE.MathUtils.randFloatSpread(200)
        ),
        speed: Math.random() * 0.01 + 0.0005,
        scale: Math.random() * 0.2 + 0.1,
        drift: Math.random() * 0.01,
        emissiveIntensity: Math.random() * 2 + 0.5,
        color,
        originalColor: color.clone(),
        pulseSpeed: Math.random() * 0.005 + 0.001,
        rotationSpeed: Math.random() * 0.01 - 0.005,
      });
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const time = clock.getElapsedTime();
    
    groupRef.current.children.forEach((star, i) => {
      const data = stars[i];
      
      // Movement
      star.position.y += data.speed * (hovered ? 1.5 : 1);
      star.position.x += Math.sin(time * 0.3 + i) * data.drift;
      star.position.z += Math.cos(time * 0.2 + i) * data.drift * 0.5;
      
      // Rotation
      star.rotation.x += data.rotationSpeed;
      star.rotation.y += data.rotationSpeed;
      
      // Pulsing effect
      const pulseFactor = Math.sin(time * data.pulseSpeed) * 0.5 + 0.5;
      star.scale.setScalar(data.scale * (0.8 + pulseFactor * 0.4));
      
      // Color variation
      if (Math.random() > 0.98) {
        star.material.color.lerp(
          new THREE.Color(
            starColors[Math.floor(Math.random() * starColors.length)]
          ),
          0.1
        );
      } else if (Math.random() > 0.95) {
        star.material.color.lerp(data.originalColor, 0.05);
      }
      
      // Loop star back if it goes too far
      if (star.position.y > 100) {
        star.position.y = -100;
        star.position.x = THREE.MathUtils.randFloatSpread(200);
        star.position.z = THREE.MathUtils.randFloatSpread(200);
      }
    });
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {stars.map((s, i) => (
        <mesh key={i} position={s.position}>
          <icosahedronGeometry args={[s.scale, 1]} /> {/* More interesting shape */}
          <meshStandardMaterial
            color={s.color}
            emissive={s.color}
            emissiveIntensity={s.emissiveIntensity}
            toneMapped={false}
            roughness={0.1}
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};
export default TwinklingStars;