type props = {
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterModal = (props: props) => {
  const { filter, setFilter } = props;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFilter(!filter);
  };
  return (
    <section className="absolute top-0 left-0 right-0 bottom-0 bg-slate-500 opacity-50 z-40">
      <div>
        <form></form>
      </div>
      <button
        className=" bg-pink-600 text-white"
        onClick={(e) => handleClick(e)}
      >
        Cancel
      </button>
    </section>
  );
};
export default FilterModal;
