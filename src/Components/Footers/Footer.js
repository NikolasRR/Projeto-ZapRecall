import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

function Footer ({answeredQuestions}) {
    let finished = answeredQuestions.length === 8;
    let zapPerformance = true;
    answeredQuestions.forEach(question => {
        if (question.color === "red") {
            zapPerformance = false;
        }
    })
    return <>
        {
            !finished && 
            <Footer1 answeredQuestions={answeredQuestions} />
        }
        {
            finished && zapPerformance &&
            <Footer2 answeredQuestions={answeredQuestions} />
        }
        {
            finished && !zapPerformance &&
            <Footer3 answeredQuestions={answeredQuestions} />
        }
    </>
}

export default Footer;