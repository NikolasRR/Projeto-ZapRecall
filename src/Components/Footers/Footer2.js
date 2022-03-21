import Performance from "./Performance";

function Footer2 ({answeredQuestions}) {
    return (
        <footer className="footerFinal">
            <div>
                <img src="./images/party.png" alt="nice" />
                <h6>PARABÉNS!</h6>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <Performance answeredQuestions={answeredQuestions} />
        </footer>
    );
}

export default Footer2;