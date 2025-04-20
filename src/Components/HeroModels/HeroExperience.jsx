import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Particals from './Particals'

const HeroExperience = () => {
  const isTablet = useMediaQuery({query: '(max-width: 768px)'});
  const isMobile = useMediaQuery({query: '(max-width: 576px)'});

  return (
    <Canvas camera={{position: [0, 0, 15], fov:45}}>
          <ambientLight intensity={0.2} color="#1a1a40" />
        <OrbitControls enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI/5} 
        maxPolarAngle={Math.PI/2} 
        />
        <HeroLights />
        <Particals count={100} />
        {/* <mesh>
            <boxGeometry args={[5, 5, 5]} />
            <meshStandardMaterial color="teal" />
        </mesh> */}
        <group scale={isMobile? 0.7 : 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI /4 ,0]}
        >
        <Room />
        </group>
    </Canvas>
  )
}

export default HeroExperience