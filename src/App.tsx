import './App.css';
import { useEffect, useState } from 'react';

import { Cards } from './Cards/Cards.tsx';
import { convertData } from './convertData.mts';
import { getMoreGiphy } from './getData.mts';
import { useGridHeight } from './useGridHeight.mts';
import { useScrollPosition } from './useScrollPosition.mts';
import { debouncer } from './debouncer.mjs';

const debouncedPager = debouncer(100);
const INFINITE_SCROLL_OFFSET =
    import.meta.env.VITE_INFINITE_SCROLL_OFFSET ?? 3000;
const TITLE = "I don't know how to put this";

function App() {
    const [pageData, setPageData] = useState<CardData[]>([]);
    const scrollPos = useScrollPosition();
    const gridHeight = useGridHeight('#cards-grid');
    const getPage = debouncedPager(updateData);

    async function updateData(offset: number): Promise<void> {
        const newPageData = convertData(
            await getMoreGiphy('/get-more')(offset)
        );
        setPageData([...pageData, ...newPageData]);
    }

    useEffect(() => {
        if (gridHeight - scrollPos < INFINITE_SCROLL_OFFSET) {
            getPage(pageData.length);
        }
    }, [getPage, gridHeight, pageData, scrollPos]);

    return (
        <>
            <header>
                <h1>{TITLE}</h1>
            </header>
            <main>
                <Cards data={pageData} />
            </main>
        </>
    );
}

export default App;
