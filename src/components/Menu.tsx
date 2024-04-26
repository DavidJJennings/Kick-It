import { Link, useNavigate } from "react-router-dom";

type props = {
  isOpen: boolean;
  handleMenu: () => void;
};

const Menu = ({ isOpen, handleMenu }: props) => {
  const navigate = useNavigate();
  const handleNavClick = (e: React.MouseEvent, targetPath: string) => {
    e.preventDefault();
    if (location.pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      handleMenu();
    } else {
      navigate(targetPath);
    }
  };
  return (
    <section
      className={`fixed top-0 h-screen w-full bg-black z-40 transition-all duration-300 ease-in-out ${
        isOpen ? "left-0" : "left-full"
      }`}
    >
      <div className="flex h-3/4 w-full justify-center items-center px-2 py-3">
        <ul className="flex flex-col text-white text-center gap-6 text-2xl md:text-3xl lg:text-4xl">
          <li className="hover:cursor-pointer hover:underline">
            <Link to="/" onClick={(e) => handleNavClick(e, "/seeall")}>
              All Trainers
            </Link>
          </li>
          <li className="text-[#FF0800] hover:cursor-pointer hover:underline">
            <Link to="/" onClick={(e) => handleNavClick(e, "/sale")}>
              Sale
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link to="/" onClick={(e) => handleNavClick(e, "/about")}>
              About
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:underline">
            <Link to="/" onClick={(e) => handleNavClick(e, "/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Menu;
