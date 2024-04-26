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
//Homepage gallery component created in grid layout, displays 3 columns in mobile and 4 above. See custom handler for basket functionality.
const FeaturedGallery = () => {
  const featuredTrainers = stock.filter((trainer) => trainer.featured == true);

  return (
    <section id="featured-section">
      <div className="flex items-end">
        <img
          className="ml-2 mt-4 w-20 xs:w-24 sm:w-28 md:w-1/5 md:mb-6"
          src="/Featured-Header.svg"
          alt="Featured"
        />
      </div>
      //
      <div className="grid grid-cols-3 gap-y-3 xs:gap-y-8 sm:gap-y-14 md:gap-y-20 lg:gap-y-24 lg:grid-cols-4 xl:gap-y-28 2xl:gap-y-32 gap-x-2 pt-5 mt-2 px-3">
        {featuredTrainers.map((trainer: Trainer) => {
          const formattedPrice = trainer.price.toFixed(2);
          const buttonProps = { trainer };
          return (
            <Link
              //Event handler logic implemented to bypass the rerouting in the case the add to basket button was clicked.
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
              <div className="flex flex-col justify-between text-center items-center mb-4 h-28 xs:h-32 sm:h-36 md:h-40 lg:h-52 xl:h-60 2xl:h-72 col-span-1 text-[0.5rem] font-bold xs:text-[0.65rem] sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                <img //removed an unnecessary div wrapper that used 100% width. MAJOR IMPROVEMENT IN CLS.
                  className="w-10 xs:w-14 sm:w-16 md:w-20 lg:w-24 xl:w-32 2xl:w-36" // Provided fixed width breakpoints
                  src={trainer.displayImageURL || "/Stock-Trainers-Image.svg"}
                  alt={trainer.name}
                />
                <div className="w-4/5">
                  <h4>{trainer.name || "N/A"}</h4>
                </div>

                <h4>{trainer.price ? `£${formattedPrice}` : "N/A"}</h4>

                <AddToBasketBtn {...buttonProps}></AddToBasketBtn>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center my-6 sm:my-10 md:my-12 lg:my-14 2xl:my-20">
        <Link to={"seeall"}>
          <button className="">
            <img
              className="group-hover:opacity-65 w-14 xs:w-16 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-44"
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
