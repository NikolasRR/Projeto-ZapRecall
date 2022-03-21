import react from "react";
import Cards from "./Cards/Cards";
import Footer1 from "./Footers/Footer1";
import Footer2 from "./Footers/Footer2";
import Footer3 from "./Footers/Footer3";
import Header1 from "./Headers/Header1";
import Header2 from "./Headers/Header2";

let finished = false;

function Junction () {
    const [started, setStarted] = react.useState(false);
    const [answeredQuestions, setAnsweredQuestions] = react.useState([]);

    finished = answeredQuestions.length === 8;
    let zapPerformance = true;
    answeredQuestions.forEach(question => {
        if (question.color === "red") {
            zapPerformance = false;
        }
    });
    return <>
        {
            !finished && !started && 
            <Header1 setStarted={setStarted} />
        }
        {
            !finished && started &&
            <>
                <Header2 />
                <Cards answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions} />
                <Footer1 answeredQuestions={answeredQuestions} />
            </>
        }
        {
            finished && zapPerformance &&
            <>
                <Header2 />
                <Cards answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions} />
                <Footer2 answeredQuestions={answeredQuestions} />
            </>
        }
        {
            finished && !zapPerformance &&
            <>
                <Header2 />
                <Cards answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions} />
                <Footer3 answeredQuestions={answeredQuestions} />
            </>
        }
    </>
}

export default Junction;