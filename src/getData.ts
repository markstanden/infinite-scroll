/**
 * Returns a function that makes the fetch request to the API
 * with the API settings held in closure and parses the response as JSON
 * @param {ApiSettings} apiSettings The API Config Object
 * @return {CardGetter}
 */
function getData(apiSettings: ApiSettings): CardGetter {
    /**
     * Function that returns a promise of the API search results
     * @param {number} page - The page offset to return
     * @return {Promise<GiphyResponse>}
     */
    async function getJSONResponse(page: number = 0): Promise<GiphyResponse> {
        const response = await fetch(
            createRequestString(apiSettings, page)
        );
        return response.json();
    }

    return getJSONResponse;
}

/**
 * Creates the request string from the api setting object.
 * @param {ApiSettings} apiSettings The API config object
 * @param {number} page - The page number of the paginated results to request
 * @return {string} the full request string with params.
 * @pure
 */
function createRequestString(apiSettings: ApiSettings, page: number){
        const settings = createUpdatedConfig(apiSettings, page)
        return [apiSettings.baseURL, addOptions(settings.params)].join('?');
}


/**
 * Returns a new Api Settings object with a new page number
 * @param {ApiSettings} settingsObject
 * @param {number} newPage
 * @returns {ApiSettings} A cloned API Settings object with an updated page number.
 * @pure
 */
function createUpdatedConfig(settingsObject: ApiSettings, newPage: number): ApiSettings {
    const clonedSettings = {...settingsObject};
    clonedSettings.params.offset = newPage * clonedSettings.params.limit;
    return clonedSettings;
}

/**
 * Returns a url query string. - Creates a single request query string from
 * all key/value pair within the passed apiOptions
 * @param {ApiPageParams} apiOptions
 * @return {string} param
 */
function addOptions(apiOptions: ApiPageParams): string {
    return Object.entries(apiOptions)
        .map(addOption)
        .join("&");
}


/**
 * Function to produce a single key value pair for the request param
 * @param {TupleKeyValuePair} tuple
 * @returns {string} Single key/value pair expressed as a param query
 */
function addOption([key, value=""]:[string, string | number]): string {
    return `${key}=${value}`;
}


export {getData};
