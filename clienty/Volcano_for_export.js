/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/volcano_for_export.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Tree02.geometry} material={nodes.Tree02.material} position={[-1.39, 0.65, -1.33]} scale={[3.21, 3.93, 3.21]} />
      <mesh geometry={nodes.Tree.geometry} material={nodes.Tree.material} position={[-0.95, 0.66, 3.27]} scale={[3.21, 3.93, 3.21]} />
      <group position={[-0.59, -0.55, 0.44]} scale={[3.21, 3.9, 3.21]}>
        <mesh geometry={nodes.Volcano_1.geometry} material={materials.Volcano} />
        <mesh geometry={nodes.Volcano_2.geometry} material={materials.Lava} />
        <mesh geometry={nodes.Volcano_3.geometry} material={materials.VolcanoSecond} />
      </group>
    </group>
  )
}

useGLTF.preload('/volcano_for_export.glb')
