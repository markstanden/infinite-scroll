import './App.css'
import {useEffect, useState} from "react";

import {apiConfig} from "./apiConfig.mts";
import {Cards} from "./Cards/Cards.tsx";
import {convertData} from "./convertData.mts";
import {getData} from "./getData.mts";
import {getGridHeight} from "./getGridHeight.mts";
import {getScrollPosition} from "./getScrollPosition.mts";

function App() {

    const getPage = getData(fetch, apiConfig);
    const INFINITE_SCROLL_OFFSET = import.meta.env.VITE_INFINITE_SCROLL_OFFSET ?? 500;
    
    const [page, setPage] = useState<number>(0);
    const [pageData, setPageData] = useState<CardData[]>([]);
    const scrollPos = getScrollPosition();
    const gridHeight = getGridHeight();

    useEffect(() => {
        if (gridHeight - scrollPos < INFINITE_SCROLL_OFFSET) {setPage(page + 1);}
    }, [scrollPos]);

    useEffect(() => {
        async function updateData(page: number): Promise<void> {
            const newPageData = convertData(await getPage(page));
            setPageData([...pageData, ...newPageData])
        }

        updateData(page);
    }, [page]);

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
