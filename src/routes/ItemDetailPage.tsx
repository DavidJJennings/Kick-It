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
      <section className="flex flex-col mb-12 lg:mb-6 justify-center items-center lg:flex-row lg:items-start w-4/5 mt-20 sm:mt-24 md:mt-32 text-[0.9rem] lg:w-full  lg:px-12 xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:mt-40">
        <div className="aspect-w-33/20  lg:w-3/5 ">
          <div className="relative flex  justify-center items-center p-8  lg:p-14 pt-0 lg:pt-4">
            <img
              className="object-cover flex justify-center items-center w-full h-full sm:w-4/5 lg:w-full"
              src={trainer.galleryImages[imageIndex]}
              alt="Product Image"
            />
            <img
              className="absolute w-14 top-1/2 -translate-y-1/2 -left-6 cursor-pointer sm:w-20  lg:-left-8"
              src="/Left-Arrow.svg"
              alt="Left Arrow"
              onClick={(e) => prevImage(e)}
            />
            <img
              className="absolute w-14 top-1/2 -translate-y-1/2 -right-6 cursor-pointer sm:w-20 lg:-right-4"
              src="/Right-Arrow.svg"
              alt="Right Arrow"
              onClick={(e) => nextImage(e)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-4 justify-between text-left lg:w-2/5 lg:p-4 lg:pl-16">
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
                <li key={`${trainer.id}.${index}`} className="font-light p-2 ">
                  {material}
                </li>
              );
            })}
          </ul>{" "}
          <div className=" flex justify-center sm:mt-4 lg:mt-2">
            <div className="sm:w-4/5 md:w-3/5 lg:w-5/6">
              <AddToBasketBtn {...buttonProps}></AddToBasketBtn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ItemDetailPage;
