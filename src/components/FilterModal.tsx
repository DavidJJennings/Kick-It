import { useForm } from "react-hook-form";
import stock from "../Data/stock.json";

type props = {
  filter: boolean;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  products: typeof stock;
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
};

const FilterModal = (props: props) => {
  const { filter, setFilter, products, setProducts } = props;
  const preventForm = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.stopPropagation();
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFilter(!filter);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const filteredTrainers = stock.filter((trainer) => {
      const byBrand = data.brand ? trainer.brand === data.brand : true;

      const bySize = data.size ? trainer.size === data.size : true;

      const bySale = data.sale ? trainer.sale : true;

      const byPrice =
        trainer.price >= (data.priceMin || 0) &&
        trainer.price <= (data.priceMax || Infinity);

      return byBrand && bySize && bySale && byPrice;
    });
  };

  return (
    <section
      onClick={(e) => handleClick(e)}
      className="absolute top-0 left-0 right-0 bottom-0 z-40 bg-petrol-light"
    >
      <form
        onClick={preventForm}
        className="flex gap-y-6 flex-col w-1/4 bg-black p-6 absolute left-1/2 -translate-x-1/2 translate-y-1/4"
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
          Price Range:
          <input
            type="number"
            {...register("priceMin")}
            placeholder="Min Price"
          />{" "}
          to
          <input
            type="number"
            {...register("priceMax")}
            placeholder="Max Price"
          />
        </label>

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
