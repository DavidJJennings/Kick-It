import stock from "../Data/stock.json";
import { Link } from "react-router-dom";
import AddToBasketBtn from "./AddToBasketBtn";

type props = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const AllProductsGallery = (props: props) => {
  const { filter } = props;

  const stockAZ = [...stock].sort((a, b) => a.name.localeCompare(b.name));
  const stockPriceDesc = [...stock].sort((a, b) => b.price - a.price);
  const stockPriceAsc = [...stock].sort((a, b) => a.price - b.price);

  const stockToMap =
    filter === "none"
      ? stock
      : filter === "A-Z"
      ? stockAZ
      : filter === "high-low"
      ? stockPriceDesc
      : filter === "low-high"
      ? stockPriceAsc
      : stock;

  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-y-20">
      {stockToMap.map((trainer) => {
        const formattedPrice = trainer.price.toFixed(2);
        return (
          <Link key={trainer.id} to={`/item/${trainer.id}`}>
            <div className="flex flex-col justify-between text-center items-center gap-y-4 h-full mb-4">
              <img
                className="h-[150px]"
                src={trainer.displayImageURL || "/Stock-Trainers-Image.svg"}
                alt=""
              />

              <div className="w-[250px] min-h-16">
                <h4>{trainer.name || "N/A"}</h4>
              </div>

              <span>{trainer.price ? `£${formattedPrice}` : "N/A"}</span>
              <AddToBasketBtn></AddToBasketBtn>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default AllProductsGallery;
