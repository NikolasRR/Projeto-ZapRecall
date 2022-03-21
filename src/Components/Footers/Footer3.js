function Footer3 ({answeredQuestions}) {
    return (
        <footer className="footerFinal">
            <div>
                <img src="./images/sad.png" alt="notThatNice" />
                <h6>PUTZ!</h6>
            </div>
            <p>Ainda faltaram alguns...
                Mas não desanime!</p>
            <div className="ionicons">
                {answeredQuestions.map(
                    question => <ion-icon name={question.icon} class={question.color}></ion-icon>
                )}
            </div>
        </footer>
    )
}

export default Footer3;