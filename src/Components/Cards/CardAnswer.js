function CardAnswer ({answer, setPerformance, setAnswered, finishedQuestions}) {
    const redOnClick = () => {
        setPerformance({color: "red", icon: "close-circle"}); 
        setAnswered(true);
    };
    const yellowOnClick = () => {
        setPerformance({color: "yellow", icon: "help-circle"}); 
        setAnswered(true);
    };
    const greenOnClick = () => {
        setPerformance({color: "green", icon: "checkmark-circle"}); 
        setAnswered(true);
    };
    return (
        <article className="questionsOpened">
            <p>{answer}</p>
            <section className="answers">
                <div className="red" onClick={() => redOnClick()} >Não lembrei</div>
                <div className="yellow" onClick={() => yellowOnClick()} >Quase não lembrei</div>
                <div className="green" onClick={() => greenOnClick()} >Zap!</div>
            </section>
        </article>
    )
}

export default CardAnswer;