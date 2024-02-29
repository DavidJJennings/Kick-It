type props = {
  sort: string;
  setsort: React.Dispatch<React.SetStateAction<string>>;
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const SortProducts = (props: props) => {
  const { setsort, filter, setFilter } = props;
  const handleClick = () => {
    setFilter(!filter);
  };

  return (
    <>
      <div className="mt-36 flex justify-end p-8 items-center gap-x-10">
        <div className="flex items-center gap-x-3">
          <span>Sort By </span>
          <select
            onChange={(e) => {
              const selectedsort = e.target.value;
              setsort(selectedsort);
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
          onClick={handleClick}
          className="w-[150px] hover:opacity-65 cursor-pointer"
          src="Filter-Button.svg"
          alt="filter"
        />
      </div>
    </>
  );
};
export default SortProducts;
