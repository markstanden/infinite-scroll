import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card.tsx';

describe('Test Card rendering', () => {
    it('Renders Basic Card Element', () => {
        const cardData: CardData = {
            src: '#src',
            name: 'NAME',
            link: '#link',
            id: 'id',
        };
        render(<Card cardData={cardData} />);
    });

    it('Can find Card element in dom', () => {
        const cardData: CardData = {
            src: '#src',
            name: 'NAME',
            link: '#link',
            id: 'id',
        };
        render(<Card cardData={cardData} />);
        const cardFromDom = screen.getByTestId('card');
        expect(cardFromDom).toBeInstanceOf(HTMLElement);
    });

    it('Card has video element', async () => {
        const cardData: CardData = {
            src: '#src',
            name: 'NAME',
            link: '#link',
            id: 'id',
        };
        render(<Card cardData={cardData} />);

        const cardFromDom = screen.getByTestId('card');
        const video = cardFromDom.querySelector('video');

        expect(video).toBeInstanceOf(HTMLVideoElement);
    });

    it('Video element has autoplay attribute', async () => {
        const cardData: CardData = {
            src: '#src',
            name: 'NAME',
            link: '#link',
            id: 'id',
        };
        render(<Card cardData={cardData} />);

        const cardFromDom = screen.getByTestId('card');
        const video = cardFromDom.querySelector('video');

        expect(video).toHaveAttribute('autoplay');
        expect(video).not.toHaveAttribute('autoplay', false);
    });

    it('Video element has source element, with src set by props', async () => {
        const cardData: CardData = {
            src: '#src',
            name: 'NAME',
            link: '#link',
            id: 'id',
        };
        render(<Card cardData={cardData} />);

        const cardFromDom = screen.getByTestId('card');
        const source = cardFromDom.querySelector('video > source');

        expect(source).toHaveAttribute('src', '#src');
    });
});
