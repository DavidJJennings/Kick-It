type props = {
  isOpen: boolean;
};
import { Link } from "react-router-dom";

const Menu = ({ isOpen }: props) => {
  return (
    <section
      className={`fixed top-0 h-screen w-full bg-black z-40 transition-all duration-300 ease-in-out ${
        isOpen ? "left-0" : "left-full"
      }`}
    >
      <div className="flex h-3/4 w-full justify-center items-center px-2 py-3">
        <ul className="flex flex-col text-white text-center gap-6 text-2xl md:text-3xl lg:text-4xl">
          <Link to="/seeall">
            <li className="hover:cursor-pointer hover:underline">
              All Trainers
            </li>
          </Link>
          <Link to="/sale">
            <li className="text-[#FF0800] hover:cursor-pointer hover:underline">
              Sale
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:cursor-pointer hover:underline">About</li>
          </Link>
          <Link to="/contact">
            <li className="hover:cursor-pointer hover:underline">Contact</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};
export default Menu;
