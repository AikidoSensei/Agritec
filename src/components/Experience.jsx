import { Environment, Float, Html, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
		<>
			<Float
				rotation-x={-Math.PI / 5}
				floatIntensity={0.5}
				speed={2}
				rotationIntensity={1}
			>
				<Book />
			</Float>
			{/* <OrbitControls /> */}
			<Environment preset='city'></Environment>
			<directionalLight
				position={[2, 5, 2]}
				intensity={.5}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-bias={-0.0001}
			/>
			<mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
				<planeGeometry args={[100, 100]} />
				<shadowMaterial transparent opacity={0.2} />
			</mesh>
      <Html>

			
      </Html>
		</>
	)
};
