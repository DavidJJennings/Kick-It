import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="grid grid-cols-3 grid-rows-1 bg-black p-8 w-full font-bold fixed top-0 left-0 z-10">
      <div className="flex col-span-1 gap-4">
        <Link to={"/"}>
          <h2 className="font-Saira text-white hover:cursor-pointer text-3xl">
            KICK IT
          </h2>
        </Link>

        <input className="rounded-2xl" type="text" />
      </div>

      <ul className="col-span-1 flex text-white justify-center gap-05 text-3xl">
        <li className="hover:cursor-pointer px-5">New & Featured</li>
        <li className="hover:cursor-pointer px-5">Men</li>
        <li className="hover:cursor-pointer px-5">Women</li>
        <li className="text-[#FF3131] hover:cursor-pointer px-5">Sale</li>
      </ul>

      <div className="flex col-span-1 justify-end items-end hover:cursor-pointer gap-x-10">
        <img className="h-[35px]" src="/Shopping-Basket-Icon.svg" alt="" />
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
