import { useEffect, useState } from 'react';

export function getGridHeight() {
    const [gridHeight, setGridHeight] = useState<number>(0);

    useEffect(() => {
        function updateCurrentState() {
            const cardsGrid = document.querySelector('#cards-grid');
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
