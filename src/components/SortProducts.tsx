import FilterItemsContext from "../Contexts/FilterItemsContext";
import stock from "../Data/stock.json";
import { useContext, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

const SortProducts = () => {
  const { pathname } = useLocation();
  const {
    filter,
    setFilter,
    setProducts,
    products,
    isFiltered,
    setIsFiltered,
    setLoading,
    filteredProducts,
    setFilteredProducts,
  } = useContext(FilterItemsContext);
  const selectRef = useRef<HTMLSelectElement>(null); // initiated ref, for assigning to the "sort by" selector.

  const updateProductsBasedOnPath = useCallback(
    (path: string) => {
      //Filter all of the possible stock lists that user can filter by.
      const menTrainers = stock.filter((trainer) => trainer.gender === "male");
      const womenTrainers = stock.filter(
        (trainer) => trainer.gender === "female"
      );
      const saleTrainers = stock.filter((trainer) => trainer.sale === true);
      //Set the products to the necessary stock list based on the path/page.
      switch (path) {
        case "/seeall":
          setProducts(stock);
          setFilteredProducts(stock);
          //Reset the filtered products since they were remaining when the user went to another page and came back.
          setIsFiltered(false);
          break;
        case "/sale":
          setProducts(saleTrainers);
          setFilteredProducts(saleTrainers);
          setIsFiltered(false);

          break;
        case "/men":
          setProducts(menTrainers);
          setFilteredProducts(menTrainers);
          setIsFiltered(false);

          break;
        case "/women":
          setProducts(womenTrainers);
          setFilteredProducts(womenTrainers);
          setIsFiltered(false);

          break;
        default:
          //Handle the case where no filter is selected
          setProducts(stock);
      }
    },
    [setProducts, setFilteredProducts, setIsFiltered] // Recreate function if the following were to change value
  );

  useEffect(() => {
    updateProductsBasedOnPath(pathname); // By adding use effect we can then execute the callback if pathname changes.
  }, [pathname, updateProductsBasedOnPath]);

  //Sorts current stock by alphabet and price
  const stockAZ = [...products].sort((a, b) => a.name.localeCompare(b.name));
  const stockPriceDesc = [...products].sort((a, b) => b.price - a.price);
  const stockPriceAsc = [...products].sort((a, b) => a.price - b.price);

  const handleFilter = () => {
    //Opens or closes the filter modal
    setFilter(!filter);
  };

  useEffect(() => {
    //resets sorting value if a filter is applied/removed incase user filters after having sorted.
    if (selectRef.current) {
      selectRef.current.value = "none";
    }
  }, [isFiltered]);

  const handleClear = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.preventDefault();
    const menTrainers = stock.filter((trainer) => trainer.gender === "male");
    const womenTrainers = stock.filter(
      (trainer) => trainer.gender === "female"
    );
    const saleTrainers = stock.filter((trainer) => trainer.sale === true);
    setLoading(true);
    setIsFiltered(false);
    switch (pathname) {
      case "/seeall":
        setProducts(stock);
        setFilteredProducts(stock);
        break;
      case "/sale":
        setProducts(saleTrainers);
        setFilteredProducts(womenTrainers);
        break;
      case "/men":
        setProducts(menTrainers);
        setFilteredProducts(womenTrainers);
        break;
      case "/women":
        setProducts(womenTrainers);
        setFilteredProducts(womenTrainers);
        break;
      default:
        setProducts(stock);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-end items-center gap-x-2 my-4 text-[0.5rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className="flex items-center justify-end gap-x-2">
          <span>Sort By </span>
          <select
            ref={selectRef}
            onChange={(e) => {
              const selectedSort = e.target.value;
              if (selectedSort === "A-Z") {
                setProducts(stockAZ);
              } else if (selectedSort === "high-low") {
                setProducts(stockPriceDesc);
              } else if (selectedSort === "low-high") {
                setProducts(stockPriceAsc);
              } else {
                if (isFiltered) {
                  setProducts(filteredProducts);
                } else if (selectedSort === "none") {
                  switch (pathname) {
                    case "/seeall":
                      setProducts(stock);
                      break;
                    case "/sale":
                      setProducts(
                        stock.filter((trainer) => trainer.sale === true)
                      );
                      break;
                    case "/men":
                      setProducts(
                        stock.filter((trainer) => trainer.gender === "male")
                      );
                      break;
                    case "/women":
                      setProducts(
                        stock.filter((trainer) => trainer.gender === "female")
                      );
                      break;
                    default:
                      setProducts(stock);
                  }
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
            onClick={handleFilter}
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
