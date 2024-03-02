import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SaleProductsGallery from "../components/SaleProductsGallery";
import ErrorModal from "../components/ErrorModal";
import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";

const SalePage = () => {
  const { error } = useContext(BasketContext);
  return (
    <>
      {error && <ErrorModal />}
      <Nav></Nav>
      <SaleProductsGallery></SaleProductsGallery>
      <Footer></Footer>
    </>
  );
};
export default SalePage;
