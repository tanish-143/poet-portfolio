import { useRef, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

export const TiltCard = ({ children, className = '' }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse positions (normalized from -1 to 1)
    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });

    // Map mouse position to rotation angles (adjust multipliers for effect strength)
    const rotateX = useTransform(y, [-1, 1], [10, -10]);
    const rotateY = useTransform(x, [-1, 1], [-10, 10]);

    // Map mouse position to glare position
    const glareX = useTransform(x, [-1, 1], [100, -100]);
    const glareY = useTransform(y, [-1, 1], [100, -100]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Normalize to -1 to 1
        x.set((mouseX / rect.width) * 2 - 1);
        y.set((mouseY / rect.height) * 2 - 1);
    };

    const handleMouseEnter = () => setIsHovered(true);
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative rounded-sm transition-shadow duration-300 ${isHovered ? 'shadow-2xl shadow-ink/20' : 'shadow-md shadow-ink/10'} ${className}`}
        >
            {/* The actual content */}
            <div style={{ transform: "translateZ(30px)" }} className="w-full h-full">
                {children}
            </div>

            {/* Subtle Glare Effect for Premium Vibe */}
            <motion.div
                className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-0 rounded-sm"
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)',
                    x: glareX,
                    y: glareY,
                }}
            />
        </motion.div>
    );
};
