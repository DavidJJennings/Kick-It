import FilterItemsContext from "../Contexts/FilterItemsContext";
import stock from "../Data/stock.json";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SortProducts = () => {
  const { pathname } = useLocation();
  const menTrainers = stock.filter((trainer) => trainer.gender === "male");
  const womenTrainers = stock.filter((trainer) => trainer.gender === "female");
  const saleTrainers = stock.filter((trainer) => trainer.sale === true);

  function updateProductsBasedOnPath(pathname: string) {
    switch (pathname) {
      case "/seeall":
        setProducts(stock);
        break;
      case "/sale":
        setProducts(saleTrainers);
        break;
      case "/men":
        setProducts(menTrainers);
        break;
      case "/women":
        setProducts(womenTrainers);
        break;
      default:
        setProducts([]);
    }
  }

  useEffect(() => {
    updateProductsBasedOnPath(pathname); // Call a function to update products
  }, [pathname]);

  const {
    filter,
    setFilter,
    setProducts,
    products,
    isFiltered,
    setIsFiltered,
    setLoading,
  } = useContext(FilterItemsContext);
  const stockAZ = [...products].sort((a, b) => a.name.localeCompare(b.name));
  const stockPriceDesc = [...products].sort((a, b) => b.price - a.price);
  const stockPriceAsc = [...products].sort((a, b) => a.price - b.price);

  const handleClick = () => {
    setFilter(!filter);
  };

  const handleClear = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    setIsFiltered(false);
    setProducts(stock);
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-end items-center gap-x-2 my-4 text-[0.5rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className="flex items-center justify-end gap-x-2">
          <span>Sort By </span>
          <select
            onChange={(e) => {
              const selectedsort = e.target.value;
              if (selectedsort === "A-Z") {
                setProducts(stockAZ);
              } else if (selectedsort === "high-low") {
                setProducts(stockPriceDesc);
              } else if (selectedsort === "low-high") {
                setProducts(stockPriceAsc);
              } else {
                switch (pathname) {
                  case "/seeall":
                    setProducts(stock);
                    break;
                  case "/sale":
                    setProducts(saleTrainers);
                    break;
                  case "/men":
                    setProducts(menTrainers);
                    break;
                  case "/women":
                    setProducts(womenTrainers);
                    break;
                  default:
                    setProducts(stock);
                }
              }
            }}
            className=" border-2 border-black text-center cursor-pointer"
          >
            <option value="none">None</option>
            <option value="A-Z">A-Z</option>
            <option value="high-low">Price: High-Low</option>
            <option value="low-high">Price: Low-High</option>
          </select>
        </div>
        {isFiltered ? (
          <img
            onClick={(e) => handleClear(e)}
            className="w-[12.5%] max-w-[165px] hover:opacity-65 cursor-pointer"
            src="Clear-Filter-Button.svg"
            alt="filter"
          />
        ) : (
          <img
            onClick={handleClick}
            className="w-[12.5%] max-w-[165px] hover:opacity-65 cursor-pointer"
            src="Filter-Button.svg"
            alt="filter"
          />
        )}
      </div>
    </>
  );
};
export default SortProducts;
