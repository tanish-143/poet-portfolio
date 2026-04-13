import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useMemo } from 'react';

interface WatercolorSpotProps {
    className?: string;
    color?: string; // Hex or tailwind class
    delay?: number;
    width?: string;
    height?: string;
}

export const WatercolorSpot: React.FC<WatercolorSpotProps> = ({
    className,
    color = "bg-rose",
    delay = 0,
    width = "w-64",
    height = "h-64"
}) => {
    // Generate random rotation range for more organic feel
    const randomRotation = useMemo(() => Math.random() * 20 - 10, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "url(#liquid-filter) blur(20px)", rotate: 0 }}
            animate={{
                opacity: [0.2, 0.4, 0.25], // Continuous breathing
                scale: [0.9, 1.1, 0.95],
                filter: ["url(#liquid-filter) blur(40px)", "url(#liquid-filter) blur(60px)", "url(#liquid-filter) blur(50px)"],
                rotate: [0, randomRotation, 0]
            }}
            transition={{
                duration: 10 + Math.random() * 5, // Random duration between 10-15s
                repeat: Infinity,
                repeatType: "mirror",
                delay: delay,
                ease: "easeInOut"
            }}
            className={cn(
                "absolute rounded-[40%] -z-10 mix-blend-multiply pointer-events-none", // Changed from rounded-full for more organic shape
                color,
                width,
                height,
                className
            )}
            style={{
                filter: 'url(#liquid-filter) blur(20px)'
            }}
        />
    );
};
