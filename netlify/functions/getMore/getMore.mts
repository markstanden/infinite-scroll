import type { Config, Context } from '@netlify/functions';
import { getData } from '../../../src/getData.mjs';
import { getApiConfig } from '../../../src/apiConfig.mjs';
import fetch from 'node-fetch';

export default async (
    _incomingRequestObject: Request,
    netlifyContextObject: Context
) => {
    const { page } = netlifyContextObject.params;

    const config = getApiConfig(
        Netlify.env.get('VITE_GIPHY_BASE_URL'),
        Netlify.env.get('VITE_GIPHY_API_KEY'),
        Netlify.env.get('VITE_GIPHY_SEARCH_TERM')
    );

    if (config.params.api_key) {
        const getPage = getData(fetch, config);
        const data = await getPage(page);
        return new Response(JSON.stringify(data));
    }

    return new Response(
        `Server setup invalid: config: ${JSON.stringify(config)}`
    );
};

export const config: Config = {
    path: '/get-more/:page',
};
