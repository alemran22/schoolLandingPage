import schoolLogo from "../../assets/images/navbar/Group 177.png";
import search from "../../assets/images/navbar/bx_search.png";
import hamburger from "../../assets/images/navbar/charm_menu-hamburger.png";
import userMobile from "../../assets/images/navbar/Frame 3.png";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-4 md:px-0 py-7">
      {/* left section */}
      <section
        className="flex items-center
       gap-4 lg:gap-0"
      >
        <figure className="block md:hidden">
          <img src={hamburger} alt="" />
        </figure>
        <figure>
          <img src={schoolLogo} alt="" />
        </figure>
      </section>

      {/* middle section */}
      <section className="hidden lg:block">
        <ul className="font-Open_Sans font-semibold text-base text-gray_text  flex gap-6">
          <li className="hover:text-black">
            <a href="#" target="_blank">
              Home
            </a>
          </li>
          <li className="hover:text-black">
            <a href="#" target="_blank">
              Courses
            </a>
          </li>
          <li className="hover:text-black">
            <a href="#" target="_blank">
              Instructor
            </a>
          </li>
          <li className="hover:text-black">
            <a href="#" target="_blank">
              Schedule
            </a>
          </li>
          <li className="hover:text-black">
            <a href="#" target="_blank">
              Contact Us
            </a>
          </li>
        </ul>
      </section>
      {/* right section */}
      <section className="hidden lg:flex flex-row items-center gap-6">
        <figure className="cursor-pointer">
          <img src={search} alt="" />
        </figure>
        <a href="#" className=" text-green font-semibold">
          Login
        </a>
        <button className="bg-green hover:bg-white rounded-md border duration-300 border-green  text-white hover:text-green font-semibold py-3 px-6">
          <a href="#">Register</a>
        </button>
      </section>
      {/* for mobile */}
      <figure className="block lg:hidden">
        <img src={userMobile} alt="" />
      </figure>
    </div>
  );
};

export default Navbar;
