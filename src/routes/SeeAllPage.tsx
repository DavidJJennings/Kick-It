import AllProductsGallery from "../components/AllProductsGallery";
import SortProducts from "../components/SortProducts";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useState } from "react";
import FilterModal from "../components/FilterModal";
import stock from "../Data/stock.json";
import LoadingModal from "../components/LoadingModal";
import ErrorModal from "../components/ErrorModal";
import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";

const SeeAllPage = () => {
  const [filter, setFilter] = useState(false);
  const [products, setProducts] = useState(stock);
  const [loading, setLoading] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const { error } = useContext(BasketContext);

  const props = {
    filter,
    setFilter,
    products,
    setProducts,
    setLoading,
    isFiltered,
    setIsFiltered,
  };

  return (
    <section>
      {filter && <FilterModal {...props} />}
      {loading && <LoadingModal />}
      {error && <ErrorModal />}

      <Nav></Nav>
      <SortProducts {...props}></SortProducts>
      <AllProductsGallery {...props}></AllProductsGallery>
      <Footer></Footer>
    </section>
  );
};
export default SeeAllPage;
