import SearchBar from "../SearchBar/SearchBar";
import { SearchSectionElement } from "./styles";

export default function SearchSection() {
    return (
        <SearchSectionElement>
            <div>
                <img src="src/assets/imgs/fundo-busca.png" alt="Fundo da barra de pesquisa" />
            </div>

            <SearchBar />
        </SearchSectionElement>
    )
}