import Card from "./Card";
import { cardInfo } from "../Dados";

function Cards ({started, setAnsweredQuestions}) {
    return started ? (
        <main>
            <section className="cards">
                {cardInfo.map((item, index) => <Card item={item} key={index} index={index} setAnsweredQuestions={setAnsweredQuestions} />)}
            </section>
        </main>
    ) : (
        null
    );
}

export default Cards;