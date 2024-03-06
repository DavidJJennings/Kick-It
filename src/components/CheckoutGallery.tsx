import { useContext, useState } from "react";
import { BasketContext } from "../Contexts/BasketContext";
import { Link } from "react-router-dom";

const CheckoutGallery = () => {
  const { basket, removeFromBasket } = useContext(BasketContext);
  const [isDeliveryInfoVisible, setIsDeliveryInfoVisible] = useState(false);

  const totalPrice = basket.reduce((accumulator, currentItem) => {
    const total = accumulator + currentItem.price;

    return total;
  }, 0);

  const formattedTotalPrice = totalPrice.toFixed(2);

  const toggleDeliveryInfo = () => {
    setIsDeliveryInfoVisible(!isDeliveryInfoVisible);
  };

  return (
    <section className="grid grid-cols-12 w-full mt-14 sm:mt-20 md:mt-24 xl:mt-32 2xl:mt-36 overflow-hidden p-2 md:p-4 text-[0.5rem] sm:text-sm xs:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      {basket.length > 0 ? (
        <>
          <div className="flex col-span-6  sm:px-8 flex-col justify-start ">
            <div>
              <img
                className="w-1/2 "
                src="/Your-Items-Header.svg"
                alt="Your Items"
              />
            </div>
            {basket.map((trainer) => {
              return (
                <div className="flex flex-col p-2 gap-y-2">
                  <div className="w-full flex justify-center items-center">
                    <img
                      className=" w-3/4"
                      src={trainer.displayImageURL}
                      alt="Trainer"
                    />
                  </div>

                  <div className="flex flex-col justify-around items-center w-full">
                    <h2 className="font-bold">{trainer.name}</h2>
                    <h4>Size :{trainer.size}</h4>
                    <button
                      className="hover:opacity-65 w-1/2"
                      onClick={() => removeFromBasket(trainer.id)}
                    >
                      <img src="/Remove-Button.svg" alt="Remove" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-6 box-border flex flex-col gap-y-8 w-full items-center ">
            <div className="p-2 border-2 w-full border-black text-left flex flex-col gap-y-3 sm:w-3/4 p-2 md:p-6">
              <div
                onClick={toggleDeliveryInfo}
                className="flex justify-between items-center cursor-pointer"
              >
                <h4 className="font-bold">Delivery Info</h4>
                <img
                  className="h-3 hover:cursor-pointer"
                  src="/Drop-Down-Icon.svg"
                  alt="See More"
                />
              </div>
              <div
                className={`flex flex-col gap-y-2 ${
                  isDeliveryInfoVisible ? "block" : "hidden"
                }`}
              >
                <div>
                  <h4 className="font-bold text-l">UK Standard Delivery</h4>
                  <p>
                    Free Delivery on all orders over £70 and £3.99 on orders
                    below. Delivered within 3 - 5 days.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-l">
                    FREE Same Day Click & Collect
                  </h4>
                  <p>
                    Currently available for delivery to select stores within the
                    UK - enter your postcode at checkout to check availability.
                    When ordering before 3pm, get your order delivered to your
                    local store and ready to collect the same day.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-2 border-black p-2 md:p-6 flex flex-col gap-y-4 w-full sm:w-3/4">
              <div className=" border-b-2 border-black">
                <h4 className="font-bold">
                  Total Price: £{formattedTotalPrice}
                </h4>
              </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center justify-center text-center">
                  <h4>We accept the following payment methods</h4>
                </div>
                <div className="flex justify-center items-center">
                  <img src="/Payment-Methods.svg" alt="Payment Methods" />
                </div>
              </div>

              <div className="flex justify-center items-center hover:opacity-65">
                <button>
                  <img src="Checkout-Button.svg" alt="Checkout" />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="col-span-12 flex justify-center items-center relative">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center text-center flex-col">
            <h2 className="font-bold text-4xl p-6">Your Basket Is Empty!</h2>
            <Link to="/seeall">
              <button className=" hover:opacity-65 relative left-2">
                <img
                  className="w-80"
                  src="/Start-Shopping-Button.svg"
                  alt="Start Shopping"
                />
              </button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default CheckoutGallery;
