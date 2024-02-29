import stock from "../Data/stock.json";
import { Link } from "react-router-dom";
import AddToBasketBtn from "./AddToBasketBtn";

type props = {
  products: typeof stock;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const AllProductsGallery = (props: props) => {
  const { products } = props;

  return (
    <div className="grid grid-cols-4 gap-y-20 gap-x-6 px-6">
      {products.map((trainer) => {
        const formattedPrice = trainer.price.toFixed(2);
        const origPrice = trainer.price * 1.2;
        const formattedOrigPrice = origPrice.toFixed(2);

        return (
          <Link key={trainer.id} to={`/item/${trainer.id}`}>
            <div className="flex flex-col justify-between text-center items-center gap-y-4 mx-auto mb-4 h-96 w-64">
              <img
                className="w-full"
                src={trainer.displayImageURL || "/Stock-Trainers-Image.svg"}
                alt=""
              />

              <div className="w-[250px] min-h-16">
                <h4>{trainer.name || "N/A"}</h4>
              </div>

              {trainer.price ? (
                trainer.sale ? (
                  <div className="flex gap-x-2 justify-center items-center">
                    <h4 className="font-bold line-through">
                      £{formattedOrigPrice}
                    </h4>
                    <h4 className="font-bold text-[#FF0800]">
                      £{formattedPrice}
                    </h4>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-bold">£{formattedPrice}</h4>
                  </div>
                )
              ) : (
                <div>
                  <h4 className="font-bold">N/A</h4>
                </div>
              )}

              <AddToBasketBtn></AddToBasketBtn>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default AllProductsGallery;
