import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";

const CheckoutGallery = () => {
  const { basket, removeFromBasket } = useContext(BasketContext);

  return (
    <section className="grid grid-cols-12 w-3/4 mt-28">
      <div className="flex col-span-8 flex-col">
        {basket.map((trainer) => {
          console.log(trainer);
          return (
            <div className="flex p-6">
              <div className="w-64">
                <img src={trainer.displayImageURL} alt="" />
              </div>

              <div className="flex flex-col justify-center items-center w-full">
                <h2 className="font-bold">{trainer.name}</h2>
                <h4>Size :{trainer.size}</h4>
                <button
                  className="hover:opacity-65 w-40"
                  onClick={() => removeFromBasket(trainer.id)}
                >
                  <img src="/Remove-Button.svg" alt="Remove" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-span-5 box-border"></div>
    </section>
  );
};
export default CheckoutGallery;
