'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Voyager } from './Voyager';

export function Scene() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Track scroll progress
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
            setScrollProgress(Math.min(1, Math.max(0, progress)));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Hide on mobile for now (can be adjusted)
    if (isMobile) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 1,
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                style={{ pointerEvents: 'auto' }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.3} />
                <Environment preset="city" />
                <Voyager scrollProgress={scrollProgress} />
            </Canvas>
        </div>
    );
}
