import { ReactNode, createContext } from "react";
import stock from "../Data/stock.json";
import { useState } from "react";

type Product = (typeof stock)[1]; //Specify product type to be an item in the stock data file.

type Basket = Product[]; // Basket will be an array of the products.

type BasketContextType = {
  //Specifying the types for all the states that are going to be given with this context.
  basket: Product[] | [];
  addToBasket: (product: (typeof stock)[1]) => void;
  removeFromBasket: (productId: number) => void;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

type MyProviderProps = {
  //Type the nodes that we will be wrapping with our context.
  children: ReactNode;
};

const BasketContext = createContext<BasketContextType>({
  //Creation of the initial basket context.
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
      // Sets error if user attempts to add the same trainer to the basket twice.
      setError(
        "In order to prevent the bulk buying and reselling of collectors items, users are limitted to purchasing 1 of each item at a time."
      );
      return;
    }
    setBasket([...basket, product]); // Otherwise it adds the product to the basket.
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
