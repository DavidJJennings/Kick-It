import { ReactNode, createContext } from "react";
import stock from "../Data/stock.json";
import { useState } from "react";

type Product = (typeof stock)[1];

type Basket = Product[];

type BasketContextType = {
  basket: Product[] | [];
  addToBasket: (product: (typeof stock)[1]) => void;
  removeFromBasket: (productId: number) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

interface MyProviderProps {
  children: ReactNode;
}

const BasketContext = createContext<BasketContextType>({
  basket: [],
  addToBasket: () => {},
  removeFromBasket: () => {},
  error: "",
  setError: () => {},
});

export const BasketContextProvider: React.FC<MyProviderProps> = ({
  children,
}) => {
  const [error, setError] = useState("");
  const [basket, setBasket] = useState<Basket>([]);
  const addToBasket = (product: Product) => {
    if (basket.some((trainer) => trainer.id === product.id)) {
      setError(
        "In order to prevent the bulk buying and reselling of collectors items, users are limitted to purchasing 1 of each item at a time."
      );
      return;
    }
    setBasket([...basket, product]);
  };

  const removeFromBasket = (productId: number) => {
    setBasket(basket.filter((item) => item.id !== productId));
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, error, setError }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContextProvider as BasketProvider, BasketContext };
