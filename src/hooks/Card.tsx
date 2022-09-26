import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { IPokemon, IPokemonList } from '../interfaces/pokeApi';
import { httpRequest } from '../providers/customAxios';

interface CardProps {
    children: ReactNode;
}

interface CardContextData {
    pokemons: Array<IPokemon>
    pokemonsCount: number
    createCard: (cardBody: any) => Promise<void>
    deleteCard: (cardId: number) => Promise<void>
    editCard: (cardId: number) => Promise<void>
    getCards: (limit?: number, offset?: number) => Promise<void>
    searchPokemon: (pokemonName: string) => Promise<void>
    isLoading: boolean
}

const CardContextData = createContext<CardContextData>({} as CardContextData);

export function CardProvider({ children }: CardProps) {
    const pokeBaseUrl = 'https://pokeapi.co/api/v2/'

    const [pokemons, setPokemons] = useState<Array<IPokemon>>([])
    const [pokemonsCount, setPokemonsCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(false)

    async function searchPokemon(pokemonName: string) {
        try {
            setIsLoading(true)
            const { data: pokemon } = await httpRequest.get<IPokemon>(`${pokeBaseUrl}pokemon/${pokemonName}`)

            setPokemons([pokemon])
            setPokemonsCount(1)

            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)
            console.error('Get error: ', err)

            toast.error('Erro ao encontrar pokemon.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    async function getCards(limit: number = 12, offset: number = 0) {
        try {
            setIsLoading(true)
            const { data: rawListResponse } = await httpRequest.get<IPokemonList>(`${pokeBaseUrl}pokemon?limit=${limit}&offset=${offset}`)

            setPokemonsCount(rawListResponse.count)

            const pokemonListDataMap = rawListResponse.results.map(async result => {
                const { data: pokemonData } = await httpRequest.get<IPokemon>(result.url)
                return pokemonData
            })

            const pokemonListData = await Promise.all(pokemonListDataMap)
            console.log({ pokemonListData })
            setPokemons(pokemonListData)

            setIsLoading(false)
        } catch (err) {
            setIsLoading(false)

            console.error('Get error: ', err)

            toast.error('Erro ao coletar dados.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    async function createCard(cardBody: any) {
        toast.error('Funcionalidade não implementada.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    async function deleteCard(cardId: number) {
        toast.error('Funcionalidade não implementada.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    async function editCard(cardId: number) {
        toast.error('Funcionalidade não implementada.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <CardContextData.Provider value={{
            pokemons,
            pokemonsCount,
            createCard,
            deleteCard,
            editCard,
            getCards,
            searchPokemon,
            isLoading,
        }}>
            {children}
        </CardContextData.Provider>
    )
}

export function useCard() {
    const context = useContext(CardContextData);

    return context;
}