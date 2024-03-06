import { useForm } from "react-hook-form";
import stock from "../Data/stock.json";
import { useContext, useState } from "react";
import FilterItemsContext from "../Contexts/FilterItemsContext";

type data = {
  brand: string;
  size: number;
  sale: boolean;
  priceMin: number;
  priceMax: number;
};

const FilterModal = () => {
  const [priceRangeError, setPriceRangeError] = useState("");
  const { filter, setFilter, setProducts, setLoading, setIsFiltered } =
    useContext(FilterItemsContext);
  const preventForm = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.stopPropagation();
  };
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setFilter(!filter);
  };

  const { register, handleSubmit, watch } = useForm<data>();

  const onSubmit = (formData: data) => {
    const numericData = {
      ...formData,
      size: formData.size ? Number(formData.size) : null, // Or keep as 0 or undefined, depending on your logic
      priceMin: Number(formData.priceMin),
      priceMax: Number(formData.priceMax),
    };

    const { priceMin, priceMax } = formData;
    if (priceMin > priceMax) {
      setPriceRangeError("Minimum price cannot exceed maximum price");
      return;
    } else {
      setPriceRangeError("");

      setFilter(!filter);
      setLoading(true);

      const filteredTrainers = stock.filter((trainer) => {
        const byBrand = numericData.brand
          ? trainer.brand === numericData.brand
          : true;
        const bySize = numericData.size
          ? trainer.size === numericData.size
          : true;
        const bySale = numericData.sale ? trainer.sale : true;
        const byPrice =
          trainer.price >= (numericData.priceMin || 0) &&
          trainer.price <= (numericData.priceMax || Infinity);

        return byBrand && bySize && bySale && byPrice;
      });

      setProducts(filteredTrainers);
      setIsFiltered(true);
      setLoading(false);
    }
  };

  return (
    <section
      onClick={(e) => handleClick(e)}
      className="absolute top-0 left-0 right-0 bottom-0 z-40 bg-petrol-light"
    >
      <form
        onClick={preventForm}
        className="flex gap-y-6 justify-evenly flex-col w-[90%] bg-black p-6 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[1rem] xs:w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <select {...register("brand")}>
          <option value="">Select Brand</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="New Balance">New Balance</option>{" "}
        </select>

        <select {...register("size")}>
          <option value="">Select Size</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option> <option value="11">11</option>{" "}
        </select>

        <label className="text-white">
          <input type="checkbox" {...register("sale")} />
          On Sale
        </label>

        <label className="text-white flex flex-col">
          Min Price: £{watch("priceMin")}
          <input
            className="text-black"
            type="range"
            {...register("priceMin")}
            min="0"
            max="2100"
            defaultValue="0"
          />
        </label>
        <label className="text-white flex flex-col">
          Max Price: £{watch("priceMax")}
          <input
            className="text-black"
            type="range"
            {...register("priceMax")}
            min="0"
            max="2100"
            defaultValue="0"
          />
        </label>
        {priceRangeError && (
          <p className=" text-[#FF0800]">{priceRangeError}</p>
        )}

        <button className="text-white border-white border-2 p-1" type="submit">
          Apply Filters
        </button>

        <button
          className="text-white border-white border-2 p-1 "
          onClick={(e) => handleClick(e)}
        >
          Cancel
        </button>
      </form>
    </section>
  );
};
export default FilterModal;
