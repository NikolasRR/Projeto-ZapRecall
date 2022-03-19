import Card from "./Card";
import { cardInfo } from "../Dados";


function Cards() {
    return (
        <section className="cards">
            {cardInfo.map((item, index) => <Card item={item} key={index} index={index} />)}
        </section>
    )
}

export default Cards;