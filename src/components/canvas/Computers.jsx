import React from 'react'
import { Suspense,useEffect,useState } from 'react'
import { Canvas ,useThree} from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader';
const Computers = () => {
  const computer=useGLTF('./desktop_pc/scene.gltf');
  const { viewport } = useThree();

  const calculateScale = () => {
    if (viewport.width >= 768) {
      console.log(viewport.width);
      return 0.75;
    } else if (viewport.width <400) {
      console.log(viewport.width);
      return 0.5;
    } else {
      console.log("a");
      return 0.7;
    }
  };
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-20,50,10]} angel={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1824}/>
      <primitive object={computer.scene} scale={0.55} position={[0,-3.25,-1.5]} rotation={[-0.01,-0.2,-0.1]}/>
    </mesh>
  )
}
const ComputersCanvas=()=>{
  return (
   <Canvas frameloop='demand' shadows camera={{position:[20,3,5],fov:25}}
     gl={{preserveDrawingBuffer:true}}
   >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      <Computers/>
    </Suspense>
    <Preload all/>
   </Canvas>
  );
}

export default ComputersCanvas;