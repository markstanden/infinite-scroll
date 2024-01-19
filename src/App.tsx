import './App.css'
import {useEffect, useState} from "react";

import {Cards} from "./Cards/Cards.tsx";
import {convertData} from "./convertData.mts";
import {getMoreGiphy} from "./getData.mts";
import {getGridHeight} from "./getGridHeight.mts";
import {getScrollPosition} from "./getScrollPosition.mts";
import {debouncer} from "./debouncer.mjs";

const debouncedPager = debouncer(200);

function App() {
    const INFINITE_SCROLL_OFFSET = import.meta.env.VITE_INFINITE_SCROLL_OFFSET ?? 2000;
    const [pageData, setPageData] = useState<CardData[]>([]);
    const scrollPos = getScrollPosition();
    const gridHeight = getGridHeight();
    const getPage = debouncedPager(updateData)

    async function updateData(offset: number): Promise<void> {
        const newPageData = convertData(await getMoreGiphy('/get-more')(offset));
        setPageData([...pageData, ...newPageData])
    }

    useEffect(() => {
        console.log(gridHeight - scrollPos)
        if (gridHeight - scrollPos < INFINITE_SCROLL_OFFSET) {
            getPage(pageData.length);
        }
    }, [scrollPos]);


    return (<>
        <header>
            <h1>I don't know how to put this</h1>
        </header>
        <main>
            <Cards data={pageData}/>
        </main>
    </>)
}

export default App
