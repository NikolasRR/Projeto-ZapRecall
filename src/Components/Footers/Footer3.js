import Performance from "./Performance";

function Footer3({ answeredQuestions }) {
    return (
        <footer className="footerFinal">
            <div>
                <img src="./images/sad.png" alt="notThatNice" />
                <h6>PUTZ!</h6>
            </div>
            <p>Ainda faltaram alguns...Mas não desanime!</p>
            <Performance answeredQuestions={answeredQuestions} />
        </footer>
    );
}

export default Footer3;