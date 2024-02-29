import AllProductsGallery from "../components/AllProductsGallery";
import SortProducts from "../components/SortProducts";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useState } from "react";
import FilterModal from "../components/FilterModal";

const SeeAllPage = () => {
  const [sort, setsort] = useState("none");

  const [filter, setFilter] = useState(false);
  const props = { sort, setsort, filter, setFilter };

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
