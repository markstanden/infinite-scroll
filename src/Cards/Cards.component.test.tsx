import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Cards } from './Cards.tsx';

describe('Test Cards Grid rendering', () => {
    it('Renders Basic Cards Component', () => {
        const cardData: CardData[] = [
            {
                src: '#src',
                name: 'NAME',
                link: '#link',
                id: 'id',
            },
        ];
        render(<Cards data={cardData} />);
        const grid = screen.getByTestId('grid');
        expect(grid).toBeInstanceOf(HTMLElement);
    });

    it('Renders children Cards', () => {
        const cardData: CardData[] = [
            {
                src: '#src1',
                name: 'NAME1',
                link: '#link1',
                id: 'id1',
            },
            {
                src: '#src2',
                name: 'NAME2',
                link: '#link2',
                id: 'id2',
            },
        ];
        render(<Cards data={cardData} />);
        const cards = screen.getAllByTestId('card');
        expect(cards.length).toBe(2);
    });
});
