function getApiConfig(
    baseURL: string | undefined,
    apiKey: string | undefined,
    searchTerm: string | undefined
): ApiSettings {
    return {
        baseURL: baseURL ?? 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: apiKey ?? '',
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
