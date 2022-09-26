import CardDelete from "./CardActions/CardDelete/CardDelete";
import CardList from "./CardList/CardList";
import ResultHeader from "./ResultHeader/ResultHeader";
import { SearchResultElement } from "./styles";

export default function SearchResult() {
    return (
        <>
            <SearchResultElement>
                <ResultHeader />

                <CardList />
            </SearchResultElement>
        </>
    )
}