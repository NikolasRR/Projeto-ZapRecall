function Footer1 ({answeredQuestions}) {
    return (
        <footer className="footer1">
            <p>{answeredQuestions.length}/8 CONCLUÍDOS</p>
            <div className="ionicons">
                {answeredQuestions.map(
                    question => <ion-icon name={question.icon} class={question.color}></ion-icon>
                )}
            </div>
        </footer>
    )
}

export default Footer1;


