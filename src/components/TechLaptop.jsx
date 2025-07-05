import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import '../css/Technologies.css'
function LaptopModel(props) {
  const group = useRef()
  
  // Animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 4) / 8 + 0.25, 0.1)
  })

  return (
    <group ref={group} {...props}>
      {/* Laptop Base */}
      <mesh position={[0, -0.5, 0]} castShadow>
        <boxGeometry args={[3, 0.1, 2]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Screen */}
      <group position={[0, 0.4, -0.3]} rotation={[0.5, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.9, 1.8, 0.1]} />
          <meshStandardMaterial color="#ddd" />
        </mesh>
        {/* Screen Display */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2.8, 1.7]} />
          <meshStandardMaterial color="#300a24" /> {/* Ubuntu purple */}
        </mesh>
        {/* Ubuntu Logo on Screen */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[0.5, 0.5]} />
          <meshStandardMaterial color="#e95420" /> {/* Ubuntu orange */}
        </mesh>
      </group>
      
      {/* Keyboard */}
      <mesh position={[0, -0.45, 0.1]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[2.9, 0.05, 1.8]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  )
}

export default function TechLaptop() {
  return (
    <div className="laptop-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <LaptopModel />
        <Environment preset="city" />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  )
}