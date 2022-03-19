function CardAnswered ({performance, questionNumber}) {
    const {color, icon} = performance;
    return (
        <article className={`question answered ${color}`}>
            <p>Pergunta {questionNumber}</p>
            <ion-icon name={icon} class={color}></ion-icon>
        </article>
    );
}

export default CardAnswered;