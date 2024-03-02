import Footer from "../components/Footer";
import GenderPage from "../components/GenderPage";
import Nav from "../components/Nav";
import ErrorModal from "../components/ErrorModal";
import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";

const MenPage = () => {
  const { error } = useContext(BasketContext);
  return (
    <>
      {error && <ErrorModal />}
      <Nav></Nav>
      <GenderPage></GenderPage>
      <Footer></Footer>
    </>
  );
};
export default MenPage;
