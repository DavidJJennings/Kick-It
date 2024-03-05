import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import stock from "../Data/stock.json";
import AddToBasketBtn from "../components/AddToBasketBtn";
import ErrorModal from "../components/ErrorModal";
import { useContext, useState } from "react";
import { BasketContext } from "../Contexts/BasketContext";
const ItemDetailPage = () => {
  const { itemId } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const { error } = useContext(BasketContext);

  if (itemId === undefined) {
    // Handle the undefined case, e.g., return an error message or a default state
    return <div>Product not found.</div>;
  }

  const numericItemId = parseInt(itemId, 10);
  const trainer = stock.filter((trainer) => trainer.id == numericItemId)[0];
  const buttonProps = { trainer };
  const formattedPrice = trainer.price.toFixed(2);
  const salePrice = trainer.price * 0.9;
  const formattedSalePrice = salePrice.toFixed(2);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setImageIndex((prevIndex) =>
      prevIndex === trainer.galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault;
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? trainer.galleryImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex justify-center">
      {error && <ErrorModal />}

      <Nav />
      <section className="flex flex-col w-4/5 mt-28 text-[0.5rem] xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        <div className="aspect-w-33/20 pt-0">
          <div className="relative flex justify-center">
            <img
              className="object-cover flex justify-center items-center w-full h-full p-16 md:w-4/5 md:h-4/5 lg:w-3/4 lg:h-3/4"
              src={trainer.galleryImages[imageIndex]}
              alt="Product Image"
            />
            <img
              className="absolute w-8 top-1/2 -left-6 cursor-pointer sm:w-14 md:w-16 lg:w-24 xl:w-28"
              src="/Left-Arrow.svg"
              alt="Left Arrow"
              onClick={(e) => prevImage(e)}
            />
            <img
              className="absolute w-8 top-1/2 -right-2 cursor-pointer sm:w-14 md:w-16 lg:w-24 xl:w-28"
              src="/Right-Arrow.svg"
              alt="Right Arrow"
              onClick={(e) => nextImage(e)}
            />
          </div>
        </div>
        <div className=" p-2 ml-4 flex flex-col gap-y-2 justify-between text-left">
          <h2 className="font-bold text-left text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {trainer.name}
          </h2>
          <div className="flex justify-start font-bold">
            {trainer.price ? (
              trainer.sale ? (
                <h2 className=" text-red-600">£{formattedSalePrice}</h2>
              ) : (
                <h2>£{formattedPrice}</h2>
              )
            ) : (
              <h2>N/A</h2>
            )}
          </div>
          <p className=" font-light ">{trainer.description}</p>
          <h3 className="font-bold">Size : {trainer.size}</h3>
          <ul className="list-disc list-inside">
            <h3 className="font-bold ">Materials</h3>
            {trainer.materials.map((material, index) => {
              return (
                <li key={`${trainer.id}.${index}`} className="font-light ">
                  {material}
                </li>
              );
            })}
          </ul>{" "}
          <div className="w-full flex justify-center">
            <div className="w-2/5">
              <AddToBasketBtn {...buttonProps}></AddToBasketBtn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ItemDetailPage;
