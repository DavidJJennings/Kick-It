import { useContext } from "react";
import { BasketContext } from "../Contexts/BasketContext";

const ErrorModal = () => {
  const { error, setError } = useContext(BasketContext);
  return (
    <div
      onClick={() => setError("")}
      className="absolute top-0 left-0 right-0 bottom-0 z-40 bg-petrol-light"
    >
      <div className=" w-[90%] text-[1rem] leading-5 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-xl p-4 flex text-center items-center justify-around flex-col gap-4 xs:w-[80%] sm:text-lg md:w-1/2 md:text-xl lg:leading-loose xl:text-2xl xl:p-8 2xl:text-3xl">
        <p>{error}</p>
        <button className="border-2 bg-black border-white p-2 w-28 flex justify-center items-center hover:opacity-65">
          Close
        </button>
      </div>
    </div>
  );
};
export default ErrorModal;
