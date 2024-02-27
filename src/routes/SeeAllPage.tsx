import AllProductsGallery from "../components/AllProductsGallery";
import FilterProducts from "../components/FilterProducts";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useState } from "react";

const SeeAllPage = () => {
  const [filter, setFilter] = useState("none");
  const filterProps = { filter, setFilter };
  return (
    <>
      <Nav></Nav>
      <FilterProducts {...filterProps}></FilterProducts>
      <AllProductsGallery {...filterProps}></AllProductsGallery>
      <Footer></Footer>
    </>
  );
};
export default SeeAllPage;
