import Header from "../components/Header";
import Nav from "../components/Nav";
import FeaturedGallery from "../components/FeaturedGallery";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
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
      <Nav></Nav>
      <Header></Header>
      <FeaturedGallery></FeaturedGallery>
      <Footer></Footer>
    </>
  );
};
export default HomePage;
