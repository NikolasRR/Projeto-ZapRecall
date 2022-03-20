function CardQuestion ({question, setTurned}) {
    return (
        <article className="questionsOpened">
            <p>{question}</p>
            <img src="./images/setinha.png" alt="getAnswer" onClick={() => setTurned(true)}/>
        </article>
    )
}

export default CardQuestion;