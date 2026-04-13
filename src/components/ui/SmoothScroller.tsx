import { useEffect } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

export const SmoothScroller = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    // Also scrollTo top on route change!
    useEffect(() => {
        window.scrollTo(0,0);
    }, [location.pathname]);

    return <>{children}</>;
};
