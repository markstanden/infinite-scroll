const apiConfig: ApiSettings = {
    baseURL: import.meta.env.VITE_GIPHY_BASE_URL,
    params: {
        api_key: import.meta.env.VITE_GIPHY_API_KEY,
        bundle: "clips_grid_picker",
        lang: "en",
        limit: 25,
        offset: 0,
        q: import.meta.env.VITE_GIPHY_SEARCH_TERM,
        rating: "g",
    }
};

export {apiConfig}