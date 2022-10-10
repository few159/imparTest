import { useState } from "react";
import { useCard } from "../../hooks/Card";
import { usePagination } from "../../hooks/Pagination";
import { SearchBarElement } from "./styles";

export default function SearchBar() {
    const { goToPage } = usePagination()
    const { searchTerm, setSearchTerm, getCards } = useCard()

    const [showingResults, setShowingResults] = useState<boolean>(false)

    function typeAction(inputValue: string) {
        setSearchTerm(inputValue.toLowerCase())
    }

    async function search() {
        if (!searchTerm) return

        goToPage(1)
        setShowingResults(true)
    }

    async function clearSearch() {
        setSearchTerm(null)
        goToPage(1)
        setShowingResults(false)
    }

    return (
        <SearchBarElement>
            <input type="text" placeholder="Digite aqui sua busca..." onChange={e => typeAction(e.target.value)} value={searchTerm ?? ''} />
            {
                showingResults
                    ? <img src="/assets/Icon-close.svg" alt="Limpar Busca" onClick={clearSearch} />
                    : <img src="/assets/lupa.svg" alt="Lupa de Busca" onClick={search} />
            }

        </SearchBarElement>
    )
}