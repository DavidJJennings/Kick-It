type props = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

type FilterOptions = "none" | "A-Z" | "Price: High-Low" | "Price: Low-High";

const FilterProducts = (props: props) => {
  const { setFilter } = props;
  return (
    <>
      <div className="mt-36 flex justify-end p-8 items-center gap-x-10">
        <div className="flex items-center gap-x-3">
          <span>Sort By </span>
          <select
            onChange={(e) => {
              const selectedFilter = e.target.value;
              setFilter(selectedFilter);
            }}
            className=" border-2 border-black text-center cursor-pointer"
          >
            <option value="none">None</option>
            <option value="A-Z">A-Z</option>
            <option value="high-low">Price: High-Low</option>
            <option value="low-high">Price: Low-High</option>
          </select>
        </div>
        <img
          className="w-[150px] hover:opacity-65 cursor-pointer"
          src="Filter-Button.svg"
          alt="Filter"
        />
      </div>
    </>
  );
};
export default FilterProducts;
