import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { BasketContext } from "../Contexts/BasketContext";
import { useContext, useState } from "react";
import Menu from "./Menu";

const Nav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, targetPath: string) => {
    e.preventDefault();
    if (location.pathname === targetPath) {
      // Already on the target page, just scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to the target path as the user is not on that page
      navigate(targetPath);
    }
  };

  const { basket } = useContext(BasketContext);

  return (
    <nav className="grid p-2 grid-cols-8 grid-rows-1 text-[0.65rem] sm:p-4 lg:px-8 xl:px-10 2xl:px-12 xs:text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl bg-black w-full font-bold fixed top-0 left-0 z-10">
      <Menu isOpen={isOpen} handleMenu={handleMenu} />
      <div className="flex col-span-2 justify-start gap-x-2 md:gap-x-4 items-center text-center">
        <Link to="/" onClick={(e) => handleNavClick(e, "/")}>
          <h2 className="leading-4 font-Saira text-white hover:cursor-pointer whitespace-nowrap text-2xl md:text-3xl lg:text-4xl  xl:text-5xl">
            KICK IT
          </h2>
        </Link>
      </div>

      <ul className="col-span-4 row-span-1 p-1 flex text-white justify-between xs:justify-center xs:gap-x-4 md:gap-x-6 md:py-4 xl:gap-x-8 2xl:gap-x-12 items-center text-center">
        <li className="hover:cursor-pointer max-w-[40px] xs:max-w-none xl:whitespace-nowrap">
          <Link to="/#featured-section">New & Featured</Link>
        </li>
        <li className="hover:cursor-pointer ">
          <Link to="/" onClick={(e) => handleNavClick(e, "/men")}>
            Men
          </Link>
        </li>
        <li className="hover:cursor-pointer ">
          <Link to="/" onClick={(e) => handleNavClick(e, "/women")}>
            Women
          </Link>
        </li>
        <li className="text-[#FF0800] hover:cursor-pointer">
          <Link to="/" onClick={(e) => handleNavClick(e, "/sale")}>
            Sale
          </Link>
        </li>
      </ul>

      <div className="flex col-span-2 justify-end gap-x-4 sm:gap-x-6 lg:gap-x-8 items-center hover:cursor-pointer ">
        <Link to="/checkout">
          <div className="relative h-4 sm:h-5 md:h-6 lg:h-7 xl:h-9">
            <img
              className=" h-full"
              src="/Shopping-Basket-Icon.svg"
              alt="Basket"
            />
            {basket.length > 0 && (
              <div className="absolute -right-2 -top-1 sm:h-4 md:h-5 lg:h-6 lg:-top-2 lg:-right-3 xl:h-7 2xl:-top-3 2xl:-right-4 2xl:h-8 text-white bg-[#21D585] rounded-full aspect-square h-3 box-border flex items-center justify-center">
                {basket.length}
              </div>
            )}
          </div>
        </Link>

        <button /* Hamburger menu, brings top and bottom lines together rotates in opposing directions and makes middle line invisible when menu is open.*/
          onClick={handleMenu}
          aria-label="Menu"
          className="flex flex-col justify-center h-4 sm:h-5 md:h-6 lg:h-7 xl:h-9 aspect-square z-50"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out
                     w-full rounded-sm h-0.5 md:h-1 xl:h-1.5 ${
                       isOpen
                         ? "rotate-45 translate-y-1 md:translate-y-2 xl:translate-y-3"
                         : "-translate-y-0.5"
                     }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-full rounded-sm my-0.5 md:h-1 xl:h-1.5  ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-full rounded-sm md:h-1 xl:h-1.5 ${
                      isOpen
                        ? "-rotate-45 -translate-y-1 -md:translate-y-2 -xl:translate-y-3"
                        : "translate-y-0.5"
                    }`}
          ></span>
        </button>
      </div>
    </nav>
  );
};
export default Nav;
