import { useEffect, useState } from 'react';

export function useGridHeight(selector: string) {
    const [gridHeight, setGridHeight] = useState<number>(0);

    useEffect(() => {
        function updateCurrentState() {
            const cardsGrid = document.querySelector(selector);
            if (cardsGrid) {
                setGridHeight(cardsGrid.clientHeight);
            }
        }

        document.addEventListener('scroll', updateCurrentState);
        return () =>
            document.removeEventListener('scrollend', updateCurrentState);
    }, []);
    return gridHeight;
}
