function CardClosed ({questionNumber, setClosed}) {
    return (
        <article className="question">
            <p>Pergunta {questionNumber}</p>
            <ion-icon name="play-outline" onClick={() => setClosed(false)} ></ion-icon>
        </article>
    )
}

export default CardClosed;