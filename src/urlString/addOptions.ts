/**
 * Returns url query string. - Creates a single request query string from
 * all key/value pair within the passed object
 * @param {ApiPageParams} apiOptions
 * @return {string} param
 */
function addOptions(apiOptions: Record<string, string | number>): string {
    return Object.entries(apiOptions).map(addOption).join('&');
}

/**
 * Function to produce a single key value pair for the request param
 * @param {TupleKeyValuePair} tuple
 * @returns {string} Single key/value pair expressed as a param query
 */
function addOption([key, value = '']: [string, string | number]): string {
    return `${key}=${value}`;
}

export { addOptions };
