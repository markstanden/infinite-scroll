import type { Config, Context } from '@netlify/functions';
import { getData } from '../../../src/getData.mjs';
import { getApiConfig } from '../../../src/apiConfig.mjs';
import fetch from 'node-fetch';

export default async (
    _incomingRequestObject: Request,
    netlifyContextObject: Context
) => {
    const { page } = netlifyContextObject.params;

    const baseURL = Netlify.env.get('VITE_GIPHY_BASE_URL');
    const apiKey = Netlify.env.get('VITE_GIPHY_API_KEY');
    const query = Netlify.env.get('VITE_GIPHY_SEARCH_TERM');

    if (baseURL && apiKey && query) {
        const getPage = getData(fetch, getApiConfig(baseURL, apiKey, query));
        const data = await getPage(page);
        return new Response(JSON.stringify(data));
    }
};

export const config: Config = {
    path: '/get-more/:page',
};
