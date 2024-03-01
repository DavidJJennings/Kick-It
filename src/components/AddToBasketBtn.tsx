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
    if (basket.length < 8) {
      addToBasket(trainer);
    } else
      setError(
        "Basket full, please remove or purchase current items before adding more."
      );
  };

  return (
    <button onClick={handleClick} className="hover:opacity-65 w-60 mx-auto">
      <img src="/Add-ToBasket-Btn.svg" alt="" />
    </button>
  );
};
export default AddToBasketBtn;
