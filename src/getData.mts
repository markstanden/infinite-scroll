import { addOptions } from './urlString/addOptions.ts';

function getMoreGiphy(url: string) {
    return async function (offset: number): Promise<GiphyResponse> {
        const res = await fetch(`${url}/${offset}`);
        return res.json();
    };
}

/**
 * Returns a function that makes the fetch request to the API
 * with the API settings held in closure and parses the response as JSON
 * @param {Fetcher} fetcher the function to retrieve the posts
 * @param {ApiSettings} apiSettings The API Config Object
 * @return {CardGetter}
 */
function getData(fetcher: Fetcher, apiSettings: ApiSettings): CardGetter {
    /**
     * Function that returns a promise of the API search results
     * @param {number} offset - The page offset to return
     * @return {Promise<GiphyResponse>}
     */
    return async function getJSONResponse(
        offset: number = 0
    ): Promise<GiphyResponse> {
        const config = updateConfig(apiSettings)(offset);
        const paramString = addOptions(config.params);
        const requestString = formRequestString(config.baseURL)(paramString);

        const response = await fetcher(requestString);
        return response.json();
    };
}

/**
 * Returns a function that creates the request string from the curried base url and the provided query string
 * @param {string} baseUrl The base URL for the request
 * @return {(query: string) => string}
 * @pure
 */
function formRequestString(baseUrl: string): (query: string) => string {
    return function (query: string) {
        return [baseUrl, query].join('?');
    };
}

/**
 * Returns a function that returns new Api Settings object with a new starting offset number
 * @param {ApiSettings} settingsObject
 * @returns {(offest:number)=>ApiSettings} A function that returns a cloned API Settings object with updated offset.
 * @pure
 */
function updateConfig(
    settingsObject: ApiSettings
): (offset: number) => ApiSettings {
    return function updateOffset(offset: number): ApiSettings {
        const clonedSettings = { ...settingsObject };
        clonedSettings.params.offset = offset;
        return clonedSettings;
    };
}

export { getData, getMoreGiphy };
