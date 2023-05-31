import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { EffectComposer, SSAO, Bloom } from "@react-three/postprocessing";

export default function Ballpit({ colorMode }) {
  const backGroundColor = colorMode === "Light" ? "#f4a261" : "#264653";

  return (
    // <Canvas
    //   shadows
    //   gl={{ stencil: false, antialias: false }}
    //   camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}
    // >
    <group>
      <ambientLight intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <directionalLight
        castShadow
        intensity={4}
        position={[50, 50, 25]}
        shadow-mapSize={[256, 256]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Physics
        gravity={[0, -50, 0]}
        defaultContactMaterial={{ restitution: 0.5 }}
      >
        <group position={[0, 0, -10]}>
          <Mouse />
          <Borders />
          <InstancedSpheres />
        </group>
      </Physics>
      <EffectComposer>
        {/* <Bloom></Bloom> */}
        <SSAO
          radius={0.1}
          intensity={40}
          luminanceInfluence={0.5}
          color={backGroundColor}
        />
      </EffectComposer>
    </group>
    //</Canvas>
  );
}

function InstancedSpheres({ count = 250 }) {
  const { viewport } = useThree();
  const [ref] = useSphere((index) => ({
    mass: 200,
    position: [4 - Math.random() * 8, viewport.height, 0, 0],
    args: [1.2],
  }));
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, count]}
    >
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshLambertMaterial color="#ff7b00" />
    </instancedMesh>
  );
}

function Borders() {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
}

function Plane({ color, ...props }) {
  usePlane(() => ({ ...props }));
  return null;
}

function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [6] }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
}
