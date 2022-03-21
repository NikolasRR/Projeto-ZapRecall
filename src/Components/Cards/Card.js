import react from "react";
import {CardAnswer} from "./CardAnswer";
import CardAnswered from "./CardAnswered";
import CardClosed from "./CardClosed";
import CardQuestion from "./CardQuestion";

function Card (props) {
    const {question, answer} = props.item;
    const {index, setAnsweredQuestions, answeredQuestions} = props;

    const [closed, setClosed] = react.useState(true);
    const [turned, setTurned] = react.useState(false);
    const [answered, setAnswered] = react.useState(false);
    const [performance, setPerformance] = react.useState({color: "none", icon: "none"});

    return <>
        {
            closed &&
            <CardClosed questionNumber={index + 1} setClosed={setClosed} />
        }
        {
            !closed && !turned &&
            <CardQuestion question={question} setTurned={setTurned} />
        }
        {
            !closed && turned && !answered &&
            <CardAnswer answer={answer} setAnswered={setAnswered} setPerformance={setPerformance} setAnsweredQuestions={setAnsweredQuestions} answeredQuestions={answeredQuestions} />
        }
        {
            !closed && turned && answered &&
            <CardAnswered questionNumber={index + 1} performance={performance} />
        }
    </>
}

export default Card;