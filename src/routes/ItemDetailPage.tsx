import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import stock from "../Data/stock.json";
import AddToBasketBtn from "../components/AddToBasketBtn";
import { useState } from "react";
const ItemDetailPage = () => {
  const { itemId } = useParams();
  const [imageIndex, setImageIndex] = useState(0);

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
      <Nav />
      <section className="grid grid-cols-12 w-4/5 mt-28">
        <div className="col-span-8 row-span-2 aspect-w-33/20 pt-0">
          <div className="relative p-8 ">
            <img
              className="object-cover w-full h-full p-16"
              src={trainer.galleryImages[imageIndex]}
              alt="Product Image"
            />
            <img
              className="absolute w-24 top-1/2 -left-6 cursor-pointer"
              src="/Left-Arrow.svg"
              alt="Left Arrow"
              onClick={(e) => prevImage(e)}
            />
            <img
              className="absolute w-24 top-1/2 -right-2 cursor-pointer"
              src="/Right-Arrow.svg"
              alt="Right Arrow"
              onClick={(e) => nextImage(e)}
            />
          </div>
        </div>
        <div className="col-span-4 row-span-2 p-8 ml-4 flex flex-col gap-y-2 text-left justify-between">
          <h2 className="font-bold text-4xl text-center">{trainer.name}</h2>
          <p className=" font-light text-2xl">{trainer.description}</p>
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
          <div className="flex justify-center font-bold text-3xl">
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
          <AddToBasketBtn {...buttonProps}></AddToBasketBtn>
        </div>
      </section>
    </div>
  );
};
export default ItemDetailPage;
