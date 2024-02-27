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
  const product = stock.filter((product) => product.id == numericItemId)[0];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setImageIndex((prevIndex) =>
      prevIndex === product.galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault;
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? product.galleryImages.length - 1 : prevIndex - 1
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
              src={product.galleryImages[imageIndex]}
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
          <h2 className="font-bold text-4xl text-center">{product.name}</h2>
          <p className=" font-light text-2xl">{product.description}</p>
          <h3 className="font-bold">Size : {product.size}</h3>
          <ul className="list-disc list-inside">
            <h3 className="font-bold ">Materials</h3>
            {product.materials.map((material) => {
              return <li className="font-light ">{material}</li>;
            })}
          </ul>{" "}
          <AddToBasketBtn></AddToBasketBtn>
        </div>
      </section>
    </div>
  );
};
export default ItemDetailPage;
