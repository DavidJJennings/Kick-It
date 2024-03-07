import { Link } from "react-router-dom";
import AddToBasketBtn from "./AddToBasketBtn";
import { useContext } from "react";
import FilterItemsContext from "../Contexts/FilterItemsContext";
import SortProducts from "../components/SortProducts";

const AllProductsGallery = () => {
  const { products } = useContext(FilterItemsContext);

  return (
    <section>
      <div className="mt-20  mb-2 md:mt-32 xl:mt-40 flex justify-between w-full">
        <img
          className="w-1/3 ml-2 mt-8 md:mb-6"
          src="/All-Stock-Header.svg "
          alt="Sale"
        />
      </div>
      <div>
        <SortProducts />
      </div>
      <div className="grid grid-cols-3 gap-y-3 xs:gap-y-8 sm:gap-y-14 md:gap-y-20 lg:gap-y-24 lg:grid-cols-4 xl:gap-y-28 2xl:gap-y-32 gap-x-2 pt-5 mt-2 px-3">
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
              <div className="flex flex-col justify-between text-center items-center mb-4 h-full w-full text-[0.7rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl ">
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
    </section>
  );
};
export default AllProductsGallery;
