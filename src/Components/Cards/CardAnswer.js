import react from "react";


function CardAnswer ({answer, setPerformance, setAnswered, setAnsweredQuestions}) {
    const redOnClick = () => {
        setPerformance({color: "red", icon: "close-circle"}); 
        setAnswered(true);
        setAnsweredQuestions([...{color: "red", icon: "close-circle"}]);
    };
    const yellowOnClick = () => {
        setPerformance({color: "yellow", icon: "help-circle"}); 
        setAnswered(true);
        setAnsweredQuestions([...{color: "yellow", icon: "help-circle"}]);
    };
    const greenOnClick = () => {
        setPerformance({color: "green", icon: "checkmark-circle"}); 
        setAnswered(true);
        setAnsweredQuestions([...{color: "green", icon: "checkmark-circle"}]);
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
