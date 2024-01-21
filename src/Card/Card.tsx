import card from './Card.module.css';

function Card(props: { cardData: CardData }) {
    return (
        <article
            className={card.base}
            title={props.cardData.name}>
            <a href={props.cardData.link}>
                <video
                    className={card.image}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    playsInline={true}>
                    <source
                        src={props.cardData.src}
                        type="video/mp4"
                    />
                </video>
            </a>
        </article>
    );
}

export { Card };
