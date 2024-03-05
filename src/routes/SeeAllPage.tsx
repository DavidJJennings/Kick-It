import AllProductsGallery from "../components/AllProductsGallery";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import FilterModal from "../components/FilterModal";
import LoadingModal from "../components/LoadingModal";
import ErrorModal from "../components/ErrorModal";
import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";
import FilterItemsContext from "../Contexts/FilterItemsContext";

const SeeAllPage = () => {
  const { error } = useContext(BasketContext);
  const { filter, loading } = useContext(FilterItemsContext);

  return (
    <section>
      {filter && <FilterModal />}
      {loading && <LoadingModal />}
      {error && <ErrorModal />}

      <Nav></Nav>
      <AllProductsGallery></AllProductsGallery>
      <Footer></Footer>
    </section>
  );
};
export default SeeAllPage;
