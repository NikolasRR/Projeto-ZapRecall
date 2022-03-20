import react from "react";
import {Footer} from "./Footer";
import Header from "./Header";
import Cards from "./Cards/Cards";

function Junction () {
    const [started, setStarted] = react.useState(false);
    const [answeredQuestions, setAnsweredQuestions] = react.useState([]);
    return (
        <>
            <Header started={started} setStarted={setStarted} />
            <Cards started={started} setAnsweredQuestions={setAnsweredQuestions} />
            <Footer answeredQuestions={answeredQuestions} />
        </>
    )
}

export default Junction;