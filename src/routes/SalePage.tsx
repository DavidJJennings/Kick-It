import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SaleProductsGallery from "../components/SaleProductsGallery";
import ErrorModal from "../components/ErrorModal";
import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";
import FilterModal from "../components/FilterModal";
import FilterItemsContext from "../Contexts/FilterItemsContext";
import LoadingModal from "../components/LoadingModal";

const SalePage = () => {
  const { error } = useContext(BasketContext);
  const { filter, loading } = useContext(FilterItemsContext);
  return (
    <>
      {error && <ErrorModal />}
      {filter && <FilterModal />}
      {loading && <LoadingModal />}
      <Nav></Nav>
      <SaleProductsGallery></SaleProductsGallery>
      <Footer></Footer>
    </>
  );
};
export default SalePage;
