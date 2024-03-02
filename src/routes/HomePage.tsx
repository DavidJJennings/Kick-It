import Header from "../components/Header";
import Nav from "../components/Nav";
import FeaturedGallery from "../components/FeaturedGallery";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";
import ErrorModal from "../components/ErrorModal";

const HomePage = () => {
  const { error } = useContext(BasketContext);
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      {error && <ErrorModal />}

      <Nav></Nav>
      <Header></Header>
      <FeaturedGallery></FeaturedGallery>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
