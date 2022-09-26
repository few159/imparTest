import Card from "../Card/Card";
import { CardListElement } from "./styles";

export default function CardList() {
    const pokemonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const cardLimit = 8;

    return (
        <CardListElement>
            {
                pokemonArr.map((pokemon, index) => {
                    if (index < cardLimit) {
                        return (
                            <Card key={index} />
                        )
                    }
                })
            }

            {
                pokemonArr.length > cardLimit
                    ? <div>Espaço reservado para paginação (CurrPag: )</div>
                    : null
            }
        </CardListElement>
    )
}