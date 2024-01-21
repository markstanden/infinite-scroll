function getApiConfig(
    baseURL: string,
    apiKey: string,
    searchTerm: string
): ApiSettings {
    return {
        baseURL: baseURL ?? 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: apiKey,
            bundle: 'clips_grid_picker',
            lang: 'en',
            limit: 25,
            offset: 0,
            q: searchTerm ?? 'anchorman',
            rating: 'g',
        },
    };
}

export { getApiConfig };
