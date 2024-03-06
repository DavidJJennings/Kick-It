import Nav from "../components/Nav";

const Contact = () => {
  return (
    <section className="w-full flex justify-center items-center text-[0.75rem] xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
      <Nav />
      <div className="flex flex-col mt-16 md:mt-20 lg:mt-28 gap-y-2 sm:gap-y-4 p-4 sm:p-10 items-start w-4/5 sm:w-3/4 md:w-1/2 text-left ">
        <div className="w-2/5 relative -left-8 md:-left-16">
          <img className="w-full" src="Contact-Header.svg" alt="Contact" />
        </div>
        <h4 className="text-left mb-6">
          To contact our team for support related to one of your orders, please
          call us on 07787 2453110, or fill out the form below and we will aim
          to get back to you within 3 working days.
        </h4>

        <form className="w-full flex flex-col justify-evenly items-center gap-y-4">
          <input
            className="border-black border w-full py-1 px-3"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="border-black border w-full py-1 px-3"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            placeholder="Your Message..."
            maxLength={300}
            required
            className=" border-black w-full h-32 md:h-48 border p-3"
          ></textarea>
          <button className="w-1/3">
            <img src="/Submit-Button.svg" alt="Submit" />
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
