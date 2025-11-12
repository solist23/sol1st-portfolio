import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import { useState } from 'react';
import { Laptop, Code, Database, Cloud, Terminal } from 'lucide-react';

export default function App() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      {/* 3D Фон */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Center>
              <Text3D
                font="/sol1st-portfolio/fonts/helvetiker_regular.typeface.json"
                size={1.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
              >
                GO
                <meshNormalMaterial />
              </Text3D>
            </Center>
          </Float>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* 2D Контент */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">

          {/* Hero */}
          <div className="text-center mt-20">
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Alexander Solovyov
            </h1>
            <p className="text-2xl md:text-3xl mt-4 text-cyan-300">
              Senior Go Developer
            </p>
            <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-gray-300">
              Микросервисы • Kubernetes • gRPC • PostgreSQL • Redis • Docker
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
                Мои проекты
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-300 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition">
                Написать мне
              </button>
            </div>
          </div>

          {/* Skills Orbit */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { Icon: Code, label: "Backend", color: "from-green-400 to-emerald-600" },
              { Icon: Database, label: "Databases", color: "from-purple-400 to-pink-600" },
              { Icon: Cloud, label: "Cloud", color: "from-blue-400 to-cyan-600" },
              { Icon: Terminal, label: "DevOps", color: "from-orange-400 to-red-600" },
            ].map(({ Icon, label, color }) => (
              <div
                key={label}
                onMouseEnter={() => setHovered(label)}
                onMouseLeave={() => setHovered(null)}
                className="group cursor-pointer"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${color} transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-xl`}>
                  <Icon className="w-12 h-12 mx-auto text-white" />
                  <p className="text-center mt-4 font-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SVG Ноутбук (вместо GLB) */}
          <div className="mt-32 flex justify-center">
            <div className="relative">
              <Laptop className="w-64 h-64 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs font-mono text-cyan-300 animate-pulse">
                  go run main.go
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-32 text-center text-gray-400">
            <p>© 2025 Alexander Solovyov. All rights reserved.</p>
            <p className="mt-2">sol1st@sol1st.dev • GitHub • LinkedIn</p>
          </footer>
        </div>
      </div>
    </>
  );
}