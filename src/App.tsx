import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Box args={[1, 1, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="hotpink" />
        </Box>
        <OrbitControls />
      </Canvas>
      <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'white' }}>
        <h1>Alexander Solovyov</h1>
        <p>Senior Go Developer</p>
      </div>
    </div>
  );
}

export default App;