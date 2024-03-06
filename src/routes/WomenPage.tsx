import Footer from "../components/Footer";
import GenderPage from "../components/GenderPage";
import Nav from "../components/Nav";
import ErrorModal from "../components/ErrorModal";
import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";
import FilterModal from "../components/FilterModal";
import FilterItemsContext from "../Contexts/FilterItemsContext";
import LoadingModal from "../components/LoadingModal";

const MenPage = () => {
  const { error } = useContext(BasketContext);
  const { filter, loading } = useContext(FilterItemsContext);

  return (
    <>
      {error && <ErrorModal />}
      {filter && <FilterModal />}
      {loading && <LoadingModal />}

      <Nav></Nav>
      <GenderPage></GenderPage>
      <Footer></Footer>
    </>
  );
};
export default MenPage;
