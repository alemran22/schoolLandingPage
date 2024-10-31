import schoolLogo from "../../assets/images/navbar/Group 177.png";
import search from "../../assets/images/navbar/bx_search.png";
import userMobile from "../../assets/images/navbar/Frame 3.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import navItem from "./navItem";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-4 md:px-0 py-7">
      {/* left section */}
      <section className="flex items-center gap-4 lg:gap-0">
        <button onClick={() => setOpenMenu(true)} className="block md:hidden">
          <IoMenu size={35} />
        </button>
        {openMenu && (
          <div className="">
            <div className="md:hidden inset-y-0 bg-gray-800 fixed w-9/12 left-0 z-30 flex flex-col justify-between">
              {/* top links */}
              <div className=" flex flex-col gap-1">
                {navItem.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={
                      "text-white text-xl px-8 py-5 hover:bg-[#E1B168] border-b border-[#E1B168] last:border-b-0"
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="md:hidden inset-0 bg-gray-300 fixed right-0 z-20"
            ></div>
          </div>
        )}
        <figure>
          <img src={schoolLogo} alt="" />
        </figure>
      </section>

      {/* middle section */}
      <section className="hidden lg:block">
        <div className="flex-row font-Open_Sans font-semibold text-base text-gray_text  flex gap-6">
          {navItem.map((item) => (
            <NavLink key={item.id} to={item.path}>
              {item.title}
            </NavLink>
          ))}
        </div>
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
