function CardAnswer ({answer, setPerformance, setAnswered, setAnsweredQuestions, answeredQuestions}) {
    const redOnClick = () => {
        setPerformance({color: "red", icon: "close-circle"}); 
        setAnswered(true);
        setAnsweredQuestions([...answeredQuestions, {color: "red", icon: "close-circle", key: "red"}]);
    };
    const yellowOnClick = () => {
        setPerformance({color: "yellow", icon: "help-circle"}); 
        setAnswered(true);
        setAnsweredQuestions([...answeredQuestions, {color: "yellow", icon: "help-circle", key: "yellow"}]);
    };
    const greenOnClick = () => {
        setPerformance({color: "green", icon: "checkmark-circle"}); 
        setAnswered(true);
        setAnsweredQuestions([...answeredQuestions, {color: "green", icon: "checkmark-circle", key: "green"}])
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



export {CardAnswer};
