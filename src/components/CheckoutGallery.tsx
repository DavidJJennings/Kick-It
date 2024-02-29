import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";

const CheckoutGallery = () => {
  const { basket } = useContext(BasketContext);
  return (
    <section className="grid grid-cols-12 w-4/5 mt-28">
      <div className="flex col-span-8 flex-col">
        {basket.map((trainer) => {
          console.log(trainer);
          return (
            <div className="flex">
              <div className="w-64">
                <img src={trainer.displayImageURL} alt="" />
              </div>
              <div>
                <div>{trainer.name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-span-5 p-6"></div>
    </section>
  );
};
export default CheckoutGallery;
