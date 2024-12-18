import whatOurStudentSay from "../../assets/images/reviews/Group 22 (1).png";
import whatOurStudentSayMobile from "../../assets/images/reviews/Group 22.png";
import arrowCombineMobile from "../../assets/images/reviews/Frame 6525 (1).png";
import mohhJumah from "../../assets/images/reviews/Frame 6526.png";
import jhonMark from "../../assets/images/reviews/Frame 6526 (1).png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Review = () => {
  return (
    <section className="max-w-7xl mx-auto mb-8 lg:mb-24 p-4 lg:p-0">
      {/* heading */}
      <div className="hidden lg:flex justify-center   mb-4 lg:mb-16">
        <h1 className="font-Poppins font-semibold text-base md:text-3xl text-gary_text">
          Reviews
        </h1>
      </div>
      {/* review container */}
      <article className="flex flex-col lg:flex-row ">
        {/* left  section for desktop */}
        <aside className="w-4/12 hidden lg:flex flex-col justify-between  gap-16">
          <figure>
            <img src={whatOurStudentSay} alt="" />
          </figure>
          {/* arrows */}
          <figure className="flex flex-row gap-16 items-center">
            <div className="shadow-green shadow-sm border border-green p-2 rounded-full cursor-pointer text-white hover:text-green bg-green hover:bg-white">
              <IoIosArrowBack size={30} />
            </div>
            <div className="shadow-green shadow-sm border border-green p-2 rounded-full cursor-pointer text-white hover:text-green bg-green hover:bg-white">
              <IoIosArrowForward size={30} />
            </div>
          </figure>
        </aside>

        {/* left  section for mobile */}
        <aside className="w-full lg:hidden flex justify-between flex-row  gap-8 mb-8">
          <figure>
            <img src={whatOurStudentSayMobile} alt="" />
          </figure>
          {/* arrows */}
          <figure className="flex flex-row gap-3 items-center">
            <div className="shadow-green shadow-sm border border-green p-2 rounded-full cursor-pointer text-white hover:text-green bg-green hover:bg-white">
              <IoIosArrowBack size={20} />
            </div>
            <div className="shadow-green shadow-sm border border-green p-2 rounded-full cursor-pointer text-white hover:text-green bg-green hover:bg-white">
              <IoIosArrowForward size={20} />
            </div>
          </figure>
        </aside>
        {/* comment section */}
        <main className="w-full lg:w-8/12 flex gap-2 lg:gap-8">
          {/* card 1 */}
          <div className="w-full md:w-6/12  space-y-6 p-2 md:p-12 shadow-black/10 shadow-2xl">
            {/* profile */}
            <div className="flex items-center gap-2 lg:gap-4">
              <figure>
                <img src={mohhJumah} alt="" />
              </figure>
              {/* name and designation */}
              <aside className="space-y-2">
                <h1 className="font-Open_Sans font-bold text-xs lg:text-xl">
                  Mohh Jumah
                </h1>
                <p className="font-Open_Sans text-green font-semibold text-xs lg:text-xl">
                  Senior Developer
                </p>
              </aside>
            </div>
            {/* comment section */}
            <article>
              <p className="font-Open_Sans text-xs lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ac blandit nam massa massa elementum mollis lectus.
                Sit ultricies nisl amet non, quis enim velit tempus. Interdum
                duis imperdiet venenatis{" "}
              </p>
            </article>
          </div>

          {/* card 2 */}
          <div className="w-full md:w-6/12  space-y-6 p-2 md:p-12 shadow-black/10 shadow-2xl">
            {/* profile */}
            <div className="flex items-center gap-2 lg:gap-4">
              <figure>
                <img src={jhonMark} alt="" />
              </figure>
              {/* name and designation */}
              <aside className="space-y-2">
                <h1 className="font-Open_Sans font-bold text-xs lg:text-xl">
                  John Mark
                </h1>
                <p className="font-Open_Sans text-green font-semibold text-xs lg:text-xl">
                  Data Analyst
                </p>
              </aside>
            </div>
            {/* comment section */}
            <article>
              <p className="font-Open_Sans text-xs lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consectetur ac blandit nam massa massa elementum mollis lectus.
                Sit ultricies nisl amet non, quis enim velit tempus. Interdum
                duis imperdiet venenatis
              </p>
            </article>
          </div>
        </main>
      </article>
    </section>
  );
};

export default Review;
