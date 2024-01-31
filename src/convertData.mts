/**
 * Adaptor to convert giphy response data into card data.
 * @param {GiphyResponse} response
 * @return {CardData}
 */
function convertData(response: GiphyResponse): CardData[] {
    return response.data.map((item) => ({
        src: item.images.original.mp4,
        name: item.title,
        link: item.images.original.mp4,
        id: item.id,
    }));
}

export { convertData };
