function Performance({answeredQuestions}) {
    return (
        <div className="ionicons">
            {answeredQuestions.map(
                (question, index) => <ion-icon name={question.icon} class={question.color} key={index} ></ion-icon>
            )}
        </div>
    );
}

export default Performance;