const Footer = () => {
  return (
    <section className="flex bg-black text-white p-8 justify-around items-start text-left mt-28">
      <div className="flex flex-col">
        <h3 className="font-bold pb-1">Shopping with Kick It</h3>
        <ul className="font-light">
          <li className="hover:underline">
            <a href="#">Students</a>
          </li>
          <li className="hover:underline">
            <a href="#">Size Guides</a>
          </li>
          <li className="hover:underline">
            <a href="#">Find a Store</a>
          </li>
          <li className="hover:underline">
            <a href="#">Kick It Status</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="font-bold pb-">Customer Care</h3>
        <ul className="font-light">
          <li className="hover:underline">
            <a href="#">Delivery & Returns</a>
          </li>
          <li className="hover:underline">
            <a href="#">Help & Contact Us</a>
          </li>
          <li className="hover:underline">
            <a href="#">Track My Order</a>
          </li>
          <li className="hover:underline">
            <a href="#">Waste Electrical or Electronic Equipment</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="font-bold pb-">Corporate</h3>
        <ul className="font-light">
          <li className="hover:underline">
            <a href="#">Careers at Kick It</a>
          </li>
          <li className="hover:underline">
            <a href="#">Kick It Sports Fashion Plc</a>
          </li>
          <li className="hover:underline">
            <a href="#">Sustainability</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="font-bold pb-">Legal</h3>
        <ul className="font-light">
          <li className="hover:underline">
            <a href="#">Terms & Conditions</a>
          </li>
          <li className="hover:underline">
            <a href="#">Privacy & Cookies</a>
          </li>
          <li className="hover:underline">
            <a href="#">Accessibility</a>
          </li>
          <li className="hover:underline">
            <a href="#">Cookie Settings</a>
          </li>
          <li className="hover:underline">
            <a href="#">Site Map</a>
          </li>
          <li className="hover:underline">
            <a href="#">Modern Slavery Report</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Footer;
