import { useEffect, useState } from "react";
import { useCard } from "../../../hooks/Card";
import { usePagination } from "../../../hooks/Pagination";
import PaginationBar from "../../PaginationBar/PaginationBar";
import Card from "../Card/Card";
import CardDelete from "../CardActions/CardDelete/CardDelete";
import { CardListElement } from "./styles";

export default function CardList() {
    const { paginationProperties, mountPagination } = usePagination()
    const { pokemons, getCards, pokemonsCount } = useCard()

    const [selectedPokemon, setSelectedPokemon] = useState<number>(null)

    useEffect(() => {
        if(!paginationProperties) {
            getCards().then(() => {
                mountPagination(pokemonsCount)
            })
            return
        }

        getCards(paginationProperties.elementsLimit, ((paginationProperties.currentPage - 1) * paginationProperties.elementsLimit))
    }, [paginationProperties])

    function deletePokemonCard(pokemonId: number) {
        setSelectedPokemon(pokemonId)
    }

    return (
        <>
            <CardListElement>
                {
                    pokemons.length > 0 ?
                        pokemons.map((pokemon, index) => {
                            console.log({ pokemon })
                            if (index < paginationProperties.elementsLimit) {
                                return (
                                    <Card pokemon={pokemon}
                                        deletePoke={deletePokemonCard}
                                        key={index}
                                    />
                                )
                            }
                        })
                        : null
                }

            </CardListElement>

            {
                pokemonsCount > paginationProperties?.elementsLimit
                    ? <PaginationBar />
                    : null
            }

            {selectedPokemon
                ? <CardDelete
                    closeModal={() => {
                        setSelectedPokemon(null)
                    }}
                    pokemonId={selectedPokemon}
                />
                : null
            }
        </>
    )
}