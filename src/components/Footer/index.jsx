import facebook from "../../assets/images/footer/Vector (1).png";
import twitter from "../../assets/images/footer/Vector (1).png";
import instagram from "../../assets/images/footer/Vector (1).png";
import linkin from "../../assets/images/footer/Vector (1).png";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* footer top container for desktop */}
      <section className="max-w-7xl mx-auto hidden lg:flex flex-col ">
        {/* social content and link container */}
        <main className=" flex justify-between gap-10 py-28">
          {/* social section */}
          <section className="w-[25%] flex flex-col gap-y-8 text-white">
            <h1 className="font-Source_Code_Pro font-semibold text-3xl">
              WiSchool
            </h1>
            <p className="font-Poppins">
              We are not here to sell you products, we sell value through our
              expertise.
            </p>
            {/* social Icon */}
            <div className="flex gap-4">
              <figure>
                <img src={facebook} alt="" />
              </figure>
              <figure>
                <img src={twitter} alt="" />
              </figure>
              <figure>
                <img src={instagram} alt="" />
              </figure>
              <figure>
                <img src={linkin} alt="" />
              </figure>
            </div>
          </section>
          {/* link 1 */}
          <section className="w-[15%] flex flex-col gap-y-2 text-white font-Open_Sans text-sm">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Training</a>
            <a href="#">Resources</a>
            <a href="#">About Us</a>
          </section>
          {/* link 2  */}
          <section className="w-[15%] flex flex-col gap-y-2 text-white font-Open_Sans text-sm">
            <a href="#">SME</a>
            <a href="#">Solution</a>
            <a href="#">Review</a>
            <a href="#">Blogs</a>
          </section>
          {/* link 3  */}
          <section className="w-[15%] flex flex-col gap-y-2 text-white font-Open_Sans text-sm">
            <a href="#">Contact Us</a>
            <a href="#">Place a Call</a>
            <a href="#">Email</a>
            <a href="#">Wischool@gmail.com</a>
          </section>

          {/* link 4  */}
          <section className="w-[15%] flex flex-col gap-y-2 text-white font-Open_Sans text-sm">
            <a href="#">Job Opening</a>
            <a href="#">News</a>
            <a href="#">Research</a>
          </section>

          {/* link 5  */}
          <section className="w-[15%] flex flex-col gap-y-2 text-white font-Open_Sans text-sm">
            <a href="#">Uk Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </section>
        </main>
        {/* subscribe section */}
        <article className="py-12 flex flex-col justify-center items-center gap-4">
          <h1 className="text-white font-Poppins font-semibold text-2xl">
            Subscribe to get latest updates
          </h1>
          <div className="w-full max-w-xl flex gap-0">
            <input
              className="w-full outline-none placeholder:text-green placeholder:font-Poppins placeholder:font-medium placeholder:text-sm p-4 "
              type="text"
              placeholder="Your Email Address"
            />
            <button className="bg-green px-7 py-4">Subscribe</button>
          </div>
        </article>
      </section>
      {/* footer top container for mobile */}
      <section className="max-w-7xl mx-auto flex lg:hidden flex-col p-4 ">
        {/* subscribe section */}
        <article className="py-8 flex flex-col  items-start gap-4">
          <h1 className="text-white font-Poppins font-semibold text-sm">
            Subscribe to get latest updates
          </h1>
          <div className=" flex gap-0">
            <input
              className=" outline-none placeholder:text-green placeholder:font-Poppins placeholder:font-medium placeholder:text-[10px] p-2 "
              type="text"
              placeholder="Your Email Address"
            />
            <button className="bg-green text-[10px]  px-3 py-2">
              Subscribe
            </button>
          </div>
        </article>

        {/* social content and link container */}
        <main className=" flex gap-1 py-8 px-4">
          {/* link 1 */}
          <section className="w-4/12 flex flex-col gap-y-2 text-white font-Open_Sans text-sm">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Training</a>
            <a href="#">Resources</a>
            <a href="#">About Us</a>
          </section>
          {/* link 2  */}
          <section className="w-4/12 flex flex-col gap-y-2 text-white font-Open_Sans text-sm">
            <a href="#">SME</a>
            <a href="#">Solution</a>
            <a href="#">Review</a>
            <a href="#">Blogs</a>
          </section>
          {/* link 3  */}
          <section className="w-4/12 flex flex-col gap-y-2 text-white font-Open_Sans text-sm">
            <a href="#">Contact Us</a>
            <a href="#">Place a Call</a>
            <a href="#">Email</a>
            <a href="#">Wischool@gmail.com</a>
          </section>
        </main>
        {/* social section */}
        <section className=" flex flex-col gap-y-8 text-white px-4">
          <h1 className="font-Source_Code_Pro font-semibold text-3xl">
            WiSchool
          </h1>
          {/* social Icon */}
          <div className="flex gap-4">
            <figure>
              <img src={facebook} alt="" />
            </figure>
            <figure>
              <img src={twitter} alt="" />
            </figure>
            <figure>
              <img src={instagram} alt="" />
            </figure>
            <figure>
              <img src={linkin} alt="" />
            </figure>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
