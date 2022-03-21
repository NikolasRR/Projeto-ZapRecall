import Performance from "./Performance";

function Footer1 ({answeredQuestions}) {
    return (
        <footer className="footer1">
            <p>{answeredQuestions.length}/8 CONCLUÍDOS</p>
            <Performance answeredQuestions={answeredQuestions} />
        </footer>
    );
}

export default Footer1;


