import stock from "../Data/stock.json";
import { Link } from "react-router-dom";
import AddToBasketBtn from "./AddToBasketBtn";

type Trainer = {
  name: string;
  displayImageURL: string;
  galleryImages: string[];
  price: string;
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
      <img
        className=" ml-10  mt-10 w-[280px]"
        src="/Featured-Header.svg"
        alt="Featured"
      />

      <div className="grid grid-cols-4 grid-rows-2 gap-y-16 pt-5 mt-8">
        {featuredTrainers.map((trainer: Trainer) => {
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

                <span>{trainer.price ? `£${trainer.price}` : "N/A"}</span>
                <AddToBasketBtn></AddToBasketBtn>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex items-start justify-center w-screen mt-8">
        <button className="group">
          <img
            className="w-[200px] group-hover:opacity-65"
            src="/See-All-Button.svg"
            alt="See All"
          />
        </button>
      </div>
    </>
  );
};
export default FeaturedGallery;
