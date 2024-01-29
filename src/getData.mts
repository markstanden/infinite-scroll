import { addOptions } from './urlString/addOptions.ts';

function getMoreGiphy(url: string) {
    return async function (pageNumber: number): Promise<GiphyResponse> {
        const res = await fetch(`${url}/${pageNumber}`);
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
     * @param {number} page - The page offset to return
     * @return {Promise<GiphyResponse>}
     */
    return async function getJSONResponse(
        page: number = 0
    ): Promise<GiphyResponse> {
        const response = await fetcher(createRequestString(apiSettings, page));
        return response.json();
    };
}

/**
 * Creates the request string from the api setting object.
 * @param {ApiSettings} apiSettings The API config object
 * @param {number} page - The page number of the paginated results to request
 * @return {string} the full request string with params.
 * @pure
 */
function createRequestString(apiSettings: ApiSettings, page: number): string {
    const settings = createUpdatedConfig(apiSettings, page);
    return [apiSettings.baseURL, addOptions(settings.params)].join('?');
}

/**
 * Returns a new Api Settings object with a new page number
 * @param {ApiSettings} settingsObject
 * @param {number} newPage
 * @returns {ApiSettings} A cloned API Settings object with an updated page number.
 * @pure
 */
function createUpdatedConfig(
    settingsObject: ApiSettings,
    newPage: number
): ApiSettings {
    const clonedSettings = { ...settingsObject };
    clonedSettings.params.offset = newPage;
    return clonedSettings;
}

export { getData, getMoreGiphy };
