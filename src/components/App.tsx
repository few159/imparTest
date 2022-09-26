import Header from "./Header/Header";
import CardDelete from "./SearchResult/CardActions/CardDelete/CardDelete";
import SearchResult from "./SearchResult/SearchResult";
import SearchSection from "./SearchSection/SearchSection";

export default function App() {
  return (
    <>
      <Header />
      <SearchSection />
      <SearchResult />
      <CardDelete />
    </>
  )
}