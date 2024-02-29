import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";
import { useContext } from "react";

const Nav = () => {
  const location = useLocation();
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    if (location.pathname === "/") {
      // Already on the homepage, just scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else null;
  };
  const { basket } = useContext(BasketContext);

  return (
    <nav className="grid grid-cols-3 grid-rows-1 bg-black p-8 w-full font-bold fixed top-0 left-0 z-10">
      <div
        onClick={(e) => {
          handleLogoClick(e);
        }}
        className="flex col-span-1 gap-4"
      >
        <Link to={"/"}>
          <h2 className="font-Saira text-white hover:cursor-pointer text-3xl">
            KICK IT
          </h2>
        </Link>

        <input className="rounded-2xl" type="text" />
      </div>

      <ul className="col-span-1 flex text-white justify-center gap-05 text-3xl text-center gap-x-10">
        <Link to="/#featured-section">
          <li className="hover:cursor-pointer">New & Featured</li>
        </Link>

        <Link to={"/men"}>
          <li className="hover:cursor-pointer ">Men</li>
        </Link>
        <Link to={"/women"}>
          <li className="hover:cursor-pointer ">Women</li>
        </Link>
        <Link to="/sale">
          <li className="text-[#FF0800] hover:cursor-pointer">Sale</li>
        </Link>
        <Link to="/seeall">
          <li className="hover:cursor-pointer ">All</li>
        </Link>
      </ul>

      <div className="flex col-span-1 justify-end items-end hover:cursor-pointer gap-x-10">
        <Link to="/checkout">
          <div className="relative">
            <img
              className="h-[35px]"
              src="/Shopping-Basket-Icon.svg"
              alt="Basket"
            />
            {basket.length > 0 && (
              <div className="absolute -right-4 -top-3 text-white bg-[#21D585] rounded-full  h-8 w-8 box-border text-2xl flex items-center justify-center">
                {basket.length}
              </div>
            )}
          </div>
        </Link>

        <img
          className="h-[30px]"
          src="/Header-Menu-Btn.svg"
          alt="menu button"
        />
      </div>
    </nav>
  );
};
export default Nav;
