import cards from "./Cards.module.css"
import {Card} from "../Card/Card.tsx";
function Cards(props: {data: CardData[]}) {
    return (
        <section id="cards-grid" className={cards.grid}>
            {props.data.map(
                (card, index) => {
                    return <Card key={index} cardData={card} />
                }
            )}
        </section>
    )
}

export {Cards}
