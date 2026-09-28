import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FEATHER_SIZE = 120;
const FEATHER_TIP_OFFSET_X = 8;
const FEATHER_TIP_OFFSET_Y = 86;
const FEATHER_URL = '/assets/peacock-feather.svg';

export const InkCursor = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isIdle, setIsIdle] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);
    const [imageReady, setImageReady] = useState(false);
    const [imageError, setImageError] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const rotation = useMotionValue(0);
    const swayX = useMotionValue(0);
    const swayY = useMotionValue(0);
    const scale = useMotionValue(1);
    const glowOpacity = useMotionValue(0);

    const idleTimeoutRef = useRef<number | null>(null);
    const lastMouseRef = useRef({ x: 0, y: 0 });
    const swayFrameRef = useRef<number | null>(null);

    const cursorXSpring = useSpring(cursorX, { damping: 22, stiffness: 180, mass: 0.8 });
    const cursorYSpring = useSpring(cursorY, { damping: 22, stiffness: 180, mass: 0.8 });
    const rotationSpring = useSpring(rotation, { damping: 26, stiffness: 120 });
    const swayXSpring = useSpring(swayX, { damping: 18, stiffness: 80 });
    const swayYSpring = useSpring(swayY, { damping: 18, stiffness: 80 });
    const scaleSpring = useSpring(scale, { damping: 18, stiffness: 240 });
    const glowOpacitySpring = useSpring(glowOpacity, { damping: 18, stiffness: 170 });

    useEffect(() => {
        const updateTouchState = () => {
            const touch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            setIsTouchDevice(touch);
            setIsVisible(!touch);
        };

        updateTouchState();

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mediaQuery.matches);

        const onMediaChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
        mediaQuery.addEventListener('change', onMediaChange);

        return () => mediaQuery.removeEventListener('change', onMediaChange);
    }, []);

    useEffect(() => {
        const feather = new Image();
        feather.onload = () => setImageReady(true);
        feather.onerror = () => {
            setImageError(true);
            document.body.style.cursor = 'auto';
        };
        feather.src = FEATHER_URL;
    }, []);

    useEffect(() => {
        if (isTouchDevice || imageError) {
            document.body.style.cursor = 'auto';
            return;
        }

        const handleMouseMove = (event: MouseEvent) => {
            const dx = event.clientX - lastMouseRef.current.x;
            const dy = event.clientY - lastMouseRef.current.y;
            const velocity = Math.hypot(dx, dy);

            lastMouseRef.current = { x: event.clientX, y: event.clientY };
            cursorX.set(event.clientX - FEATHER_TIP_OFFSET_X);
            cursorY.set(event.clientY - FEATHER_TIP_OFFSET_Y);
            setIsVisible(true);
            setIsIdle(false);

            if (idleTimeoutRef.current) {
                window.clearTimeout(idleTimeoutRef.current);
            }

            idleTimeoutRef.current = window.setTimeout(() => setIsIdle(true), 1800);

            if (!reducedMotion) {
                const targetRotation = Math.min(Math.max(dx * 0.18, -18), 18);
                rotation.set(targetRotation);

                if (velocity > 0.8) {
                    const sway = Math.min(Math.max(dx * 0.12, -10), 10);
                    swayX.set(sway);
                    swayY.set(dy * 0.08);
                }
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handlePointerOver = (event: Event) => {
            const target = event.target as HTMLElement | null;
            const interactive = !!target?.closest('a, button, input, textarea, select, [role="button"], [data-hoverable]');
            setIsHovering(interactive);
            if (interactive) {
                scale.set(1.08);
                glowOpacity.set(0.7);
            }
        };

        const handlePointerOut = (event: Event) => {
            const target = event.target as HTMLElement | null;
            const interactive = !!target?.closest('a, button, input, textarea, select, [role="button"], [data-hoverable]');
            if (interactive) {
                setIsHovering(false);
                scale.set(1);
                glowOpacity.set(0);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handlePointerOver);
        document.addEventListener('mouseout', handlePointerOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handlePointerOver);
            document.removeEventListener('mouseout', handlePointerOut);
            if (idleTimeoutRef.current) window.clearTimeout(idleTimeoutRef.current);
        };
    }, [cursorX, cursorY, glowOpacity, imageError, isTouchDevice, reducedMotion, rotation, scale, swayX, swayY]);

    useEffect(() => {
        if (isTouchDevice || reducedMotion || !isVisible || imageError) {
            if (swayFrameRef.current) {
                cancelAnimationFrame(swayFrameRef.current);
                swayFrameRef.current = null;
            }
            swayX.set(0);
            swayY.set(0);
            return;
        }

        if (!isIdle) {
            swayX.set(0);
            swayY.set(0);
            return;
        }

        let start = 0;
        const animateSway = (timestamp: number) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const wave = Math.sin(elapsed / 500) * 6;
            const drift = Math.cos(elapsed / 700) * 3;
            swayX.set(wave);
            swayY.set(drift);
            swayFrameRef.current = requestAnimationFrame(animateSway);
        };

        swayFrameRef.current = requestAnimationFrame(animateSway);

        return () => {
            if (swayFrameRef.current) {
                cancelAnimationFrame(swayFrameRef.current);
                swayFrameRef.current = null;
            }
        };
    }, [isIdle, isTouchDevice, isVisible, reducedMotion, imageError, swayX, swayY]);

    useEffect(() => {
        if (isHovering) {
            scale.set(1.08);
            glowOpacity.set(0.7);
        } else if (!isIdle) {
            scale.set(1);
            glowOpacity.set(0);
        }
    }, [glowOpacity, isHovering, isIdle, scale]);

    useEffect(() => {
        if (imageError || isTouchDevice) {
            document.body.style.cursor = 'auto';
            return;
        }

        document.body.style.cursor = 'none';
        return () => {
            document.body.style.cursor = 'auto';
        };
    }, [imageError, isTouchDevice]);

    if (isTouchDevice || !isVisible || imageError) {
        return null;
    }

    if (!imageReady) {
        return (
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <div className="h-4 w-4 rounded-full bg-[#b89a4c]/80 shadow-[0_0_18px_rgba(184,154,76,0.8)]" />
            </motion.div>
        );
    }

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999]"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                rotate: rotationSpring,
            }}
        >
            <motion.div
                animate={{ scale: isIdle ? 0.96 : 1 }}
                transition={{ type: 'spring', damping: 22, stiffness: 180 }}
                style={{
                    width: FEATHER_SIZE,
                    height: FEATHER_SIZE,
                    x: swayXSpring,
                    y: swayYSpring,
                    rotateX: isHovering ? 10 : 0,
                    rotateY: isHovering ? -10 : 0,
                    scale: scaleSpring,
                    transformPerspective: 400,
                }}
            >
                <motion.div
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                    style={{
                        width: FEATHER_SIZE * 1.8,
                        height: FEATHER_SIZE * 1.8,
                        background: 'radial-gradient(circle, rgba(218,165,32,0.38) 0%, rgba(218,165,32,0.12) 28%, transparent 70%)',
                        opacity: glowOpacitySpring,
                    }}
                />

                <img
                    src={FEATHER_URL}
                    alt=""
                    draggable={false}
                    onLoad={() => setImageReady(true)}
                    onError={() => setImageError(true)}
                    className="block origin-bottom select-none"
                    style={{
                        width: FEATHER_SIZE,
                        height: FEATHER_SIZE,
                        objectFit: 'contain',
                        pointerEvents: 'none',
                        filter: isHovering ? 'drop-shadow(0 0 18px rgba(218,165,32,0.45))' : 'drop-shadow(0 0 10px rgba(11, 38, 18, 0.18))',
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default InkCursor;
