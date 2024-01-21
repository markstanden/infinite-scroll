import './App.css';
import { useEffect, useState } from 'react';

import { Cards } from './Cards/Cards.tsx';
import { convertData } from './convertData.mts';
import { getMoreGiphy } from './getData.mts';
import { getGridHeight } from './getGridHeight.mts';
import { getScrollPosition } from './getScrollPosition.mts';
import { debouncer } from './debouncer.mjs';

const debouncedPager = debouncer(100);
const INFINITE_SCROLL_OFFSET =
    import.meta.env.VITE_INFINITE_SCROLL_OFFSET ?? 2000;
console.log('Offset set to: ', INFINITE_SCROLL_OFFSET);

function App() {
    const [pageData, setPageData] = useState<CardData[]>([]);
    const scrollPos = getScrollPosition();
    const gridHeight = getGridHeight();
    const getPage = debouncedPager(updateData);

    async function updateData(offset: number): Promise<void> {
        console.log(
            `Currently displaying ${pageData.length} - Requesting more...`
        );
        const newPageData = convertData(
            await getMoreGiphy('/get-more')(offset)
        );
        setPageData([...pageData, ...newPageData]);
    }

    useEffect(() => {
        if (gridHeight - scrollPos < INFINITE_SCROLL_OFFSET) {
            console.log(
                `Threshold passed (${gridHeight - scrollPos}) - Requesting more...`
            );
            getPage(pageData.length);
        }
    }, [scrollPos]);

    return (
        <>
            <header>
                <h1>I don't know how to put this</h1>
            </header>
            <main>
                <Cards data={pageData} />
            </main>
        </>
    );
}

export default App;
