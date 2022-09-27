import { useState } from "react";
import { useCard } from "../../hooks/Card";
import { SearchBarElement } from "./styles";

export default function SearchBar() {
    const { searchPokemon, getCards } = useCard()

    const [searchTerm, setSearchTerm] = useState<string>(null)
    const [showingResults, setShowingResults] = useState<boolean>(false)

    function typeAction(inputValue: string) {
        setSearchTerm(inputValue.toLowerCase())
    }

    async function search() {
        if(!searchTerm) return

        await searchPokemon(searchTerm)
        setShowingResults(true)
    }

    async function clearSearch(){
        await getCards()
        setSearchTerm(null)
        setShowingResults(false)
    }

    return (
        <SearchBarElement>
            <input type="text" placeholder="Digite aqui sua busca..." onChange={e => typeAction(e.target.value)} value={searchTerm ?? ''}/>
            {
                showingResults 
                ? <img src="/assets/Icon-close.svg" alt="Limpar Busca" onClick={clearSearch} />
                : <img src="/assets/lupa.svg" alt="Lupa de Busca" onClick={search} />
            }
            
        </SearchBarElement>
    )
}