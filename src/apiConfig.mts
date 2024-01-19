function getApiConfig(
    baseURL: string,
    apiKey: string,
    searchTerm: string
): ApiSettings {
    return {
        baseURL: baseURL,
        params: {
            api_key: apiKey,
            bundle: 'clips_grid_picker',
            lang: 'en',
            limit: 25,
            offset: 0,
            q: searchTerm,
            rating: 'g',
        },
    };
}

export { getApiConfig };
