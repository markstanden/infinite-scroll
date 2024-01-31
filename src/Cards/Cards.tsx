import cards from './Cards.module.css';
import { Card } from '../Card/Card.tsx';

interface cardsProps {
    data: CardData[];
}

function Cards({ data }: cardsProps) {
    return (
        <section
            id="cards-grid"
            className={cards.grid}
            data-testid={'grid'}>
            {data.map((card, index) => {
                return (
                    <Card
                        key={index}
                        cardData={card}
                    />
                );
            })}
        </section>
    );
}

export { Cards };
