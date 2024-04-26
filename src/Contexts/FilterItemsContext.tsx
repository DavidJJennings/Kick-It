import { ReactNode, createContext, useState } from "react";
import stock from "../Data/stock.json";

type FilterContextType = {
  //Assigned types to values to be given as context.
  filter: boolean;
  products: typeof stock;
  filteredProducts: typeof stock;
  loading: boolean;
  isFiltered: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<typeof stock>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredProducts: React.Dispatch<React.SetStateAction<typeof stock>>;
};

interface MyProviderProps {
  // Typed children that will be given context
  children: ReactNode;
}

const FilterItemsContext = createContext<FilterContextType>({
  // Created instance of context with initial values
  filter: false,
  products: stock,
  filteredProducts: stock,
  loading: false,
  isFiltered: false,
  setFilter: () => {},
  setProducts: () => {},
  setLoading: () => {},
  setIsFiltered: () => {},
  setFilteredProducts: () => {},
});

export const FilterItemsContextProvider: React.FC<MyProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState(false);
  const [products, setProducts] = useState(stock);
  const [loading, setLoading] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(stock);
  const values = {
    filter,
    setFilter,
    products,
    setProducts,
    loading,
    setLoading,
    isFiltered,
    setIsFiltered,
    filteredProducts,
    setFilteredProducts,
  };
  return (
    <FilterItemsContext.Provider value={values}>
      {children}
    </FilterItemsContext.Provider>
  );
};
export default FilterItemsContext;
