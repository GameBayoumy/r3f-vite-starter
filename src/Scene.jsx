import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useRef } from 'react'

extend({ OrbitControls: OrbitControls })

export default function Scene() {
    const { camera, gl } = useThree()

    const cubeRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.x += delta
        cubeRef.current.rotation.y += delta
    })

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />
            <directionalLight intensity={1} position={[1, 2, 3]} />
            <ambientLight intensity={0.2} />


            <mesh ref={cubeRef} >
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </>
    )
}
