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
          <Link to="/" onClick={(e) => handleNavClick(e, "/seeall")}>
            <li className="hover:cursor-pointer hover:underline">
              All Trainers
            </li>
          </Link>
          <Link to="/" onClick={(e) => handleNavClick(e, "/sale")}>
            <li className="text-[#FF0800] hover:cursor-pointer hover:underline">
              Sale
            </li>
          </Link>
          <Link to="/" onClick={(e) => handleNavClick(e, "/about")}>
            <li className="hover:cursor-pointer hover:underline">About</li>
          </Link>
          <Link to="/" onClick={(e) => handleNavClick(e, "/contact")}>
            <li className="hover:cursor-pointer hover:underline">Contact</li>
          </Link>
        </ul>
      </div>
    </section>
  );
};
export default Menu;
