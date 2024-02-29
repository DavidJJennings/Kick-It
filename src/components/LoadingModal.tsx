import { DotLoader } from "react-spinners";

const LoadingModal = () => {
  return (
    <section className="absolute top-0 left-0 right-0 bottom-0 z-40 bg-petrol-light">
      <span className="fixed left-1/2 top-1/2">
        <DotLoader color="#000000" speedMultiplier={1} />
      </span>
    </section>
  );
};
export default LoadingModal;
