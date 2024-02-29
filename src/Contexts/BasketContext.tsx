import { ReactNode, createContext } from "react";
import stock from "../Data/stock.json";
import { useState } from "react";

type Product = (typeof stock)[1];

type Basket = Product[];

type BasketContextType = {
  basket: Product[] | [];
  addToBasket: (product: (typeof stock)[1]) => void;
  removeFromBasket: (productId: number) => void;
};

interface MyProviderProps {
  children: ReactNode;
}

const BasketContext = createContext<BasketContextType>({
  basket: [],
  addToBasket: () => {},
  removeFromBasket: () => {},
});

export const BasketContextProvider: React.FC<MyProviderProps> = ({
  children,
}) => {
  const [basket, setBasket] = useState<Basket>([]);
  const addToBasket = (product: Product) => {
    setBasket([...basket, product]);
  };

  const removeFromBasket = (productId: number) => {
    setBasket(basket.filter((item) => item.id !== productId));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContextProvider as BasketProvider, BasketContext };
