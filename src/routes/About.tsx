import Nav from "../components/Nav";

const About = () => {
  return (
    <section className="w-full flex justify-center items-center text-[0.75rem] xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
      <Nav />
      <div className="flex flex-col mt-16 md:mt-20 lg:mt-28 gap-y-2 sm:gap-y-4 p-4 sm:p-10 items-start w-4/5 sm:w-3/4 text-left ">
        <div className="w-1/4 relative -left-8 md:-left-16">
          <img className="w-full" src="About-Header.svg" alt="Contact" />
        </div>
        <p className="text-left">
          Welcome to Kick It, the ultimate haven for collectible trainers that
          tell your story. Born from a deep-rooted love for sneaker culture and
          the desire to stand out, we're here to deliver kicks that are more
          than just footwear; they're pieces of art and rebellion you can rock
          every day.
        </p>
        <p>
          At Kick It, we're obsessed with those heart-skipping beats in shoe
          form—those limited editions and classic beauties that define skate
          parks and city streets alike. We started this journey fueled by
          skateboards and the pursuit of freedom, aiming to create a community
          where passion for sneakers is everything.
        </p>
        <p>
          We're here to build a culture, not just sell shoes. Whether you're a
          collector, a skater, or someone who treasures the artistry behind each
          design, you've found your crew. We celebrate the innovation, history,
          and art of sneaker culture, prioritizing quality, authenticity, and
          that perfect pair's spotlight moment.
        </p>
        <p>
          Join us as we take your sneaker game to the next level. Let's kick it
          together.
        </p>
        <p>
          Peace, love, and fresh kicks,
          <br /> The Kick It Crew
        </p>
      </div>
    </section>
  );
};
export default About;
