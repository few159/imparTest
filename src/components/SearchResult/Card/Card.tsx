import { useCard } from "../../../hooks/Card";
import { IPokemon } from "../../../interfaces/pokeApi";
import { CardButtonsGroupElement, CardElement, ImageAndDescriptionElement } from "./styles";

interface ICardProps {
    pokemon: IPokemon,
    deletePoke: (pokemonId: number) => void
}
export default function Card({ pokemon, deletePoke }: ICardProps) {
    const {editCard} = useCard()
    return (
        <CardElement>
            <ImageAndDescriptionElement>
                <div>
                    {/* <img src="/assets/lupa.svg" alt="" /> */}
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
                <span>{pokemon.name.toUpperCase()}</span>
            </ImageAndDescriptionElement>
            <CardButtonsGroupElement>
                <button onClick={() => deletePoke(pokemon.id)}>
                    <span>
                        <img src="/assets/Icon-trash.svg" alt="Icone de Deleção" />
                        Excluir
                    </span>
                </button>
                <button onClick={() => editCard(pokemon.id)}>
                    <span>
                        <img src="/assets/Icon-edit.svg" alt="Icone de Edição" />
                        Editar
                    </span>
                </button>
            </CardButtonsGroupElement>
        </CardElement>
    )
}