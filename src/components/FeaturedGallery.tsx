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
};

const FeaturedGallery = () => {
  const featuredTrainers = stock.filter((trainer) => trainer.featured == true);
  return (
    <>
      <div className="flex items-end">
        <img
          className=" ml-10  mt-10 w-[280px]"
          src="/Featured-Header.svg"
          alt="Featured"
        />
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-y-16 pt-5 mt-8">
        {featuredTrainers.map((trainer: Trainer) => {
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
      <div className="flex items-start justify-center w-screen mt-8">
        <Link to={"seeall"}>
          <button className="group">
            <img
              className="w-[150px] group-hover:opacity-65"
              src="/See-All-Button.svg"
              alt="See All"
            />
          </button>
        </Link>
      </div>
    </>
  );
};
export default FeaturedGallery;
