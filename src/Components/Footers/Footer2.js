function Footer2 ({answeredQuestions}) {
    return (
        <footer className="footerFinal">
            <div>
                <img src="./images/party.png" alt="nice" />
                <h6>PARABÉNS!</h6>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <div className="ionicons">
                {answeredQuestions.map(
                    question => <ion-icon name={question.icon} class={question.color}></ion-icon>
                )}
            </div>
        </footer>
    )
}

export default Footer2;