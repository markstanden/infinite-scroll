import './App.css'
import {Cards} from "./Cards/Cards.tsx";
import {getData} from "./getData";
import {convertData} from "./convertData.ts";
import {apiConfig} from "./apiConfig.ts";
import {useEffect, useState} from "react";

const getPage = getData(apiConfig);

function App() {
    const [page, setPage] = useState<number>(0);
    const [pageData, setPageData] = useState<CardData[]>([]);

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
        <button onClick={() => {setPage(page+1)}}>
            GIVE ME MORE
        </button>
    </>)
}

export default App
