const Footer = () => {
  return (
    <section className="flex bg-black text-white p-4 justify-around items-start text-left mt-14 text-[0.5rem] sm:text-xs md:text-sm md:p-8 lg:text-base xl:text-lg 2xl:text-xl">
      <div className="flex flex-col">
        <h3 className="font-bold pb-1">Shopping with Kick It</h3>
        <ul className="font-light">
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">Students</span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">Size Guides</span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">Find a Store</span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Kick It Status
            </span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="font-bold pb-">Customer Care</h3>
        <ul className="font-light">
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Delivery & Returns
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Help & Contact Us
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Track My Order
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Waste Electrical or Electronic Equipment
            </span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="font-bold pb-">Corporate</h3>
        <ul className="font-light">
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Careers at Kick It
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Kick It Sports Fashion Plc
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Sustainability
            </span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="font-bold pb-">Legal</h3>
        <ul className="font-light">
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Terms & Conditions
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Privacy & Cookies
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Accessibility
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Cookie Settings
            </span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">Site Map</span>
          </li>
          <li className="hover:underline">
            <span className="hover:underline cursor-pointer">
              Modern Slavery Report
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Footer;
