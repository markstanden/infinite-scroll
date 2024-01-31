import { describe, test, expect } from 'vitest';
import { addOptions } from './addOptions.ts';

describe('AddOptions Tests', () => {
    test('Valid API page params returns expected string', () => {
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

    test('string keys with number values returns expected string', () => {
        const given: Record<string, number> = {
            keyOne: 1,
            keyTwo: 2,
            keyThree: 3,
            keyFour: 4,
        };
        const expected = 'keyOne=1&keyTwo=2&keyThree=3&keyFour=4';

        const result = addOptions(given);

        expect(result).toEqual(expected);
    });

    test('string keys with string values returns expected string', () => {
        const given: Record<string, string> = {
            keyOne: 'valueOne',
            keyTwo: 'valueTwo',
            keyThree: 'valueThree',
            keyFour: 'valueFour',
        };
        const expected =
            'keyOne=valueOne&keyTwo=valueTwo&keyThree=valueThree&keyFour=valueFour';

        const result = addOptions(given);

        expect(result).toEqual(expected);
    });

    test('string keys with mixed string and number values returns expected string', () => {
        const given: Record<string, string | number> = {
            keyOne: 'valueOne',
            keyTwo: 2,
            keyThree: 'valueThree',
            keyFour: 4,
        };
        const expected =
            'keyOne=valueOne&keyTwo=2&keyThree=valueThree&keyFour=4';

        const result = addOptions(given);

        expect(result).toEqual(expected);
    });
});
