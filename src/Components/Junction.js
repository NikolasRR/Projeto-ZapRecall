import react from "react";
import Cards from "./Cards/Cards";
import Footer from "./Footers/Footer";
import Header1 from "./Headers/Header1";
import Header2 from "./Headers/Header2";



function Junction () {
    const [started, setStarted] = react.useState(false);
    const [answeredQuestions, setAnsweredQuestions] = react.useState([]);
    return <>
        {
            !started && 
            <Header1 setStarted={setStarted} />
        }
        {
            started &&
            <>
                <Header2 />
                <Cards answeredQuestions={answeredQuestions} setAnsweredQuestions={setAnsweredQuestions} />
                <Footer answeredQuestions={answeredQuestions} />
            </>
        }
    </>
}

export default Junction;