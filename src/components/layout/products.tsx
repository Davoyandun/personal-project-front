import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { SearchContext } from "@/context/productsContext";
import { useContext } from "react";
import Sidebar from "./sidebar";
import SearchBar from "./searchBar";

export default function Products() {
  const {
    searchedProducts,
    categories,
    setCategoriesFilter,
    setRatingFilter,
    ratingFilter,
    setSortByPrice,
    setSearchValue,
    searchValue,
  } = useContext(SearchContext);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:space-x-4 p-4">
        <Sidebar
          categories={categories}
          setCategoriesFilter={setCategoriesFilter}
          setRatingFilter={setRatingFilter}
          ratingFilter={ratingFilter}
        />

        <main className="w-full md:w-3/4">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setSortByPrice={setSortByPrice}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <ParallaxScroll products={searchedProducts} />;
          </div>
        </main>
      </div>
    </div>
  );
}
