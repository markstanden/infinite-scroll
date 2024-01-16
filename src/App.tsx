import './App.css'
import {Cards} from "./Cards/Cards.tsx";
import {getData} from "./getData";
import {convertData} from "./convertData.ts";
import {apiConfig} from "./apiConfig.ts";
import {useEffect, useState} from "react";
import {getScrollPosition} from "./getScrollPosition.ts";
import {getGridHeight} from "./getGridHeight.ts";

function App() {

    const getPage = getData(apiConfig);
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
