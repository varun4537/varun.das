'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface VoyagerProps {
    scrollProgress: number;
}

export function Voyager({ scrollProgress }: VoyagerProps) {
    const groupRef = useRef<THREE.Group>(null);
    // Using the highly compressed version (~197KB vs original 1.7MB)
    const { scene } = useGLTF('/models/voyager.compressed2.glb', true);
    const { viewport } = useThree();

    // Target rotation based on mouse
    const targetRotation = useRef({ x: 0, y: 0 });

    useFrame((state) => {
        if (!groupRef.current) return;

        // Mouse tracking rotation - INCREASED SENSITIVITY
        targetRotation.current.y = state.pointer.x * 3.0;  // significantly increased from 1.2
        targetRotation.current.x = -state.pointer.y * 2.0; // significantly increased from 0.8

        // Smooth interpolation (lerp) - FASTER RESPONSE
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            targetRotation.current.y,
            0.2  // increased from 0.12 for snappier response
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            targetRotation.current.x,
            0.2  // increased from 0.12 for snappier response
        );

        // Slow self-rotation
        groupRef.current.rotation.z += 0.001;

        // ERRATIC ZIGZAG PATH using sine waves
        // Multiple frequencies create an unpredictable, organic path
        const zigzagX = Math.sin(scrollProgress * Math.PI * 6) * viewport.width * 0.25
            + Math.sin(scrollProgress * Math.PI * 3) * viewport.width * 0.15;
        const zigzagY = Math.cos(scrollProgress * Math.PI * 4) * viewport.height * 0.1
            + Math.sin(scrollProgress * Math.PI * 2) * viewport.height * 0.05;

        // Base path: starts right, ends at bottom center
        // Adjusted: moved down ~70px and left ~15px to align with header
        // End position: X=0 (center), Y=-0.35 (bottom)
        const baseX = viewport.width * 0.25 - scrollProgress * viewport.width * 0.25;
        const baseY = viewport.height * 0.0 - scrollProgress * viewport.height * 0.35;

        // Combine base path with zigzag
        groupRef.current.position.x = baseX + zigzagX;
        groupRef.current.position.y = baseY + zigzagY;
    });

    return (
        // REDUCED SIZE: 50% of previous (0.6 * 0.5 = 0.3)
        <group ref={groupRef} scale={0.3}>
            <primitive object={scene.clone()} />
        </group>
    );
}

// Preload the model
useGLTF.preload('/models/voyager.compressed2.glb', true);
