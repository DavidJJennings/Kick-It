import stock from "../Data/stock.json";

type props = {
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  products: typeof stock;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  setProducts: React.Dispatch<
    React.SetStateAction<
      {
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
      }[]
    >
  >;
  isFiltered: boolean;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
};

const SortProducts = (props: props) => {
  const {
    filter,
    setFilter,
    setProducts,
    products,
    isFiltered,
    setIsFiltered,
    setLoading,
  } = props;
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
      <div className="mt-36 flex justify-end p-8 items-center gap-x-10">
        <div className="flex items-center gap-x-3">
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
                setProducts(products);
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
            className="w-[150px] hover:opacity-65 cursor-pointer"
            src="Clear-Filter-Button.svg"
            alt="filter"
          />
        ) : (
          <img
            onClick={handleClick}
            className="w-[150px] hover:opacity-65 cursor-pointer"
            src="Filter-Button.svg"
            alt="filter"
          />
        )}
      </div>
    </>
  );
};
export default SortProducts;
