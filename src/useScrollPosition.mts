import { useEffect, useState } from 'react';

export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    useEffect(() => {
        function updateCurrentState() {
            setScrollPosition(window.scrollY);
        }

        document.addEventListener('scroll', updateCurrentState);
        return () => document.removeEventListener('scroll', updateCurrentState);
    }, []);
    return scrollPosition;
}
