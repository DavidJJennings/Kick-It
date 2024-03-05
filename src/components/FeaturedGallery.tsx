import stock from "../Data/stock.json";
import { Link } from "react-router-dom";
import AddToBasketBtn from "./AddToBasketBtn";

type Trainer = {
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
};

const FeaturedGallery = () => {
  const featuredTrainers = stock.filter((trainer) => trainer.featured == true);

  return (
    <section id="featured-section">
      <div className="flex items-end">
        <img
          className=" ml-2 mt-8 w-1/4 "
          src="/Featured-Header.svg"
          alt="Featured"
        />
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-y-6 gap-x-2 pt-5 mt-2 px-3">
        {featuredTrainers.map((trainer: Trainer) => {
          const formattedPrice = trainer.price.toFixed(2);
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
              <div className="flex flex-col justify-between text-center items-center mb-4 h-full w-full">
                <div className="w-full h-2/5 flex justify-center items-center">
                  <img
                    className="object-contain h-full w-full max-w-[85%]"
                    src={trainer.displayImageURL || "/Stock-Trainers-Image.svg"}
                    alt=""
                  />
                </div>

                <div className="w-full leading-snug min-h-[30%] font-bold xs:min-h-[22.5%] text-[0.5rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  <h4>{trainer.name || "N/A"}</h4>
                </div>

                <h4 className="text-[0.5rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  {trainer.price ? `£${formattedPrice}` : "N/A"}
                </h4>

                <AddToBasketBtn {...buttonProps}></AddToBasketBtn>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-start justify-center w-screen mt-8">
        <Link className="w-[12.5%]" to={"seeall"}>
          <button className="group w-full">
            <img
              className="w-full group-hover:opacity-65"
              src="/See-All-Button.svg"
              alt="See All"
            />
          </button>
        </Link>
      </div>
    </section>
  );
};
export default FeaturedGallery;
