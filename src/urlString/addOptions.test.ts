import { describe, test, expect } from 'vitest';
import { addOptions } from './addOptions.ts';

describe('AddOptions Tests', () => {
    test('API page params', () => {
        const given: ApiPageParams = {
            api_key: 'apikey',
            bundle: 'messaging_non_clips',
            lang: 'lang',
            limit: 1,
            offset: 1,
            q: '1',
            rating: 'g',
        };
        const expected =
            'api_key=apikey&bundle=messaging_non_clips&lang=lang&limit=1&offset=1&q=1&rating=g';

        const result = addOptions(given);

        expect(result).toEqual(expected);
    });
});
