import './App.css'
import {Cards} from "./Cards/Cards.tsx";
import {getData} from "./getData";
import {convertData} from "./convertData.ts";
import {apiConfig} from "./apiConfig.ts";

const pageData = convertData(await getData(apiConfig)(0));

function App() {
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
