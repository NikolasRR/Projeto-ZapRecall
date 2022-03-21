import Card from "./Card";
import { cardInfo } from "../Dados";

function Cards ({setAnsweredQuestions, answeredQuestions}) {
    return (
        <main>
            <section className="cards">
                {cardInfo.map((item, index) => <Card item={item} key={index} index={index} setAnsweredQuestions={setAnsweredQuestions} answeredQuestions={answeredQuestions} />)}
            </section>
        </main>
    );
}

export default Cards;