import { useContext } from "react";
import Footer from "../components/Footer";
import GenderPage from "../components/GenderPage";
import Nav from "../components/Nav";
import { BasketContext } from "../Contexts/BasketContext";
import ErrorModal from "../components/ErrorModal";

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
