import { SearchBarElement } from "./styles";

export default function SearchBar() {
    return (
        <SearchBarElement>
            <input type="text" placeholder="Digite aqui sua busca..." />
            <img src="src/assets/lupa.svg" alt="Lupa de Busca" />
        </SearchBarElement>
    )
}