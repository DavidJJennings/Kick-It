import { BasketContext } from "../Contexts/BasketContext";
import { useContext } from "react";

type Props = {
  trainer: {
    name: string;
    displayImageURL: string;
    galleryImages: string[];
    price: number;
    description: string;
    materials: string[];
    size: number;
    gender: string;
    id: number;
    featured: boolean;
    brand: string;
    sale: boolean;
  };
};

const AddToBasketBtn = (props: Props) => {
  const { addToBasket, basket, setError } = useContext(BasketContext);
  const { trainer } = props;

  const handleClick = () => {
    //Add item to the basket.
    if (basket.length < 5) {
      addToBasket(trainer);
    } else
      setError(
        //Give error a value, thus making it true causing the error modal to pop and show message
        "Basket full, please remove or purchase current items before adding more."
      );
  };

  return (
    <div className="w-full flex justify-center">
      <button
        aria-label="Add to Basket"
        onClick={handleClick}
        className="hover:opacity-65 w-16 xs:w-20 sm:w-24 lg:w-28 xl:w-36 2xl:w-40"
      >
        <img src="/Add-ToBasket-Btn.svg" alt="" />
      </button>
    </div>
  );
};
export default AddToBasketBtn;
