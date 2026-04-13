import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const count = 4000;

    // Generate random 3D points inside a massive sphere
    const [positions, colors, randoms] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const randoms = new Float32Array(count); // For flicker

        const colorInk = new THREE.Color('#1a1513'); // Very dark sepia/ink
        const colorBlood = new THREE.Color('#8a1c1c'); // Dark red blood
        const colorGold = new THREE.Color('#d4af37'); // Subtle gold/parchment

        for (let i = 0; i < count; i++) {
            // Spherical distribution
            const r = 15 + Math.random() * 80; // Distance from center
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            // Assign colors (mostly ink, some blood, rare gold)
            const randColor = Math.random();
            const mixedColor = randColor > 0.9 ? colorGold : (randColor > 0.75 ? colorBlood : colorInk);
            
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;

            randoms[i] = Math.random();
        }
        return [positions, colors, randoms];
    }, [count]);

    const vec = new THREE.Vector3();

    useFrame((state) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();

        // 1. Ambient slow rotation of the entire field
        pointsRef.current.rotation.y = time * 0.05;
        pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.2;

        // 2. Parallax camera tracking (True 3D mouse interaction)
        // state.pointer holds normalized mouse coords (-1 to +1)
        const mouseX = state.pointer.x * 20; 
        const mouseY = state.pointer.y * 20; 
        
        // Smoothly move the camera based on cursor position to create intense depth illusion
        state.camera.position.lerp(vec.set(mouseX, mouseY, 40), 0.03);
        state.camera.lookAt(0, 0, 0);

        // 3. Optional: animate point sizes or opacity via a custom shader if you needed, 
        // but simple pointsMaterial is hyper performant out of the box.
    });

    // Create a circular texture map for the points so they aren't default squares
    const circleTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        if (context) {
            context.beginPath();
            context.arc(16, 16, 16, 0, Math.PI * 2);
            context.fillStyle = 'white';
            context.fill();
        }
        return new THREE.CanvasTexture(canvas);
    }, []);

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.18}
                vertexColors={true}
                map={circleTexture}
                alphaTest={0.01}
                transparent={true}
                opacity={0.6}
                depthWrite={false}
                sizeAttenuation={true}
            />
        </points>
    );
};

export const PoetWebGLBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 mix-blend-multiply opacity-80" style={{ pointerEvents: 'none' }}>
            <Canvas 
                camera={{ position: [0, 0, 40], fov: 60 }}
                // eventSource is necessary so the Canvas captures mouse events globally 
                // even though it sits behind other DOM elements, but since it's pointerEvents: none,
                // we'll actually let useFrame(state.pointer) naturally track the window!
                eventSource={document.getElementById('root') || document.body}
            >
                <ParticleField />
            </Canvas>
        </div>
    );
};
