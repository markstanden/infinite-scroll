import type { Config, Context } from '@netlify/functions';
import { getData } from '../../../src/getData.mjs';
import { getApiConfig } from '../../../src/apiConfig.mjs';

const _config = getApiConfig(
    Netlify.env.get('VITE_GIPHY_BASE_URL'),
    Netlify.env.get('VITE_GIPHY_API_KEY'),
    Netlify.env.get('VITE_GIPHY_SEARCH_TERM')
);

const getMore = async (
    _incomingRequestObject: Request,
    netlifyContextObject: Context,
    config = _config
) => {
    const { offset } = netlifyContextObject.params;

    if (config.params.api_key) {
        const getFromOffset = getData(fetch, config);
        const data = await getFromOffset(offset);
        return new Response(JSON.stringify(data));
    }

    return new Response(
        `Server setup invalid: config: ${JSON.stringify(config)}`
    );
};

export default getMore;

export const config: Config = {
    path: '/get-more/:page',
};
