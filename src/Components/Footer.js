import react from "react";

function Footer ({answeredQuestions}) {
    return (
        <footer>
            <p>{answeredQuestions.length}/8 CONCLUÍDOS</p>
            <div className="ionicons">
                {answeredQuestions.map(
                    question => <ion-icon name={answeredQuestions.icon} class={answeredQuestions.color}></ion-icon>
                )}
            </div>
        </footer>
    )
}

export {Footer};