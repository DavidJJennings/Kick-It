import stock from "../Data/stock.json";
import AddToBasketBtn from "./AddToBasketBtn";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GenderPage = () => {
  const location = useLocation();
  const menTrainers = stock.filter((trainer) => trainer.gender === "male");
  const womenTrainers = stock.filter((trainer) => trainer.gender === "female");
  const isMen = location.pathname.includes("/men");
  const trainers = isMen ? menTrainers : womenTrainers;
  const headerImage = isMen ? "Men-Header.svg" : "Women-Header.svg";
  return (
    <section>
      <div className="mt-20 ml-4 mb-2 md:mt-32 xl:mt-40">
        <img className="w-1/5" src={headerImage} alt="Sale" />
      </div>
      <div className="grid grid-cols-4 gap-y-6 gap-x-6 px-6 lg:gap-y-8">
        {trainers.map((trainer) => {
          const formattedPrice = trainer.price.toFixed(2);
          const origPrice = trainer.price * 1.1;
          const formattedOrigPrice = origPrice.toFixed(2);
          const buttonProps = { trainer };
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
    </section>
  );
};
export default GenderPage;
