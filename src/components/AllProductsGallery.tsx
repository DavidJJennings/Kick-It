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
        const buttonProps = { trainer };
        const formattedPrice = trainer.price.toFixed(2);
        const origPrice = trainer.price * 1.2;
        const formattedOrigPrice = origPrice.toFixed(2);

        return (
          <Link
            onClick={(e) => {
              if (
                (e.target as HTMLElement).tagName.toLowerCase() === "img" &&
                (e.target as HTMLElement).getAttribute("src") ===
                  "/Add-ToBasket-Btn.svg"
              ) {
                e.preventDefault();
              }
            }}
            key={trainer.id}
            to={`/item/${trainer.id}`}
          >
            <div className="flex flex-col min-h-[130px] justify-between text-center items-center mb-4 h-full w-full text-[0.5rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ">
              <div className="w-full h-2/5 flex justify-center items-center">
                <img
                  className="object-contain h-full w-full max-w-[85%]"
                  src={trainer.displayImageURL || "/Stock-Trainers-Image.svg"}
                  alt=""
                />
              </div>

              <div className="w-full leading-snug min-h-[30%] font-bold xs:min-h-[30%]">
                <h4>{trainer.name || "N/A"}</h4>
              </div>

              {trainer.price ? (
                trainer.sale ? (
                  <div className="flex gap-x-2">
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

              <AddToBasketBtn {...buttonProps}></AddToBasketBtn>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default AllProductsGallery;
