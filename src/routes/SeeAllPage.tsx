import AllProductsGallery from "../components/AllProductsGallery";
import SortProducts from "../components/SortProducts";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useState } from "react";
import FilterModal from "../components/FilterModal";
import stock from "../Data/stock.json";

const SeeAllPage = () => {
  const [sort, setsort] = useState("none");

  const [filter, setFilter] = useState(false);
  const [products, setProducts] = useState(stock);
  const props = { sort, setsort, filter, setFilter, products, setProducts };

  return (
    <section>
      {filter && <FilterModal {...props} />}
      <Nav></Nav>
      <SortProducts {...props}></SortProducts>
      <AllProductsGallery {...props}></AllProductsGallery>
      <Footer></Footer>
    </section>
  );
};
export default SeeAllPage;
