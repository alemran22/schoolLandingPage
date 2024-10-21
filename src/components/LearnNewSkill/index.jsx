import arrowDown from "../assets/arrow-down.svg";
import skill1 from "../assets/skill-1.svg";
import skill2 from "../assets/skill-2.svg";
import skill3 from "../assets/skill-3.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import star from "../assets/star.svg";
import groupLogo from "../assets/group-logo.svg";

const LearnSkill = () => {
  return (
    <section className="max-w-7xl mx-auto p-2 lg:p-0">
      {/* heading */}
      <div className="flex justify-between items-center lg:items-start gap-1 lg:gap-6 mb-4 lg:mb-16">
        {/* for desktop */}
        <h1 className="hidden md:block font-Poppins font-semibold text-3xl text-gary_text">
          Learn a new skill in two hours
        </h1>
        {/* for mobile */}
        <h1 className="block md:hidden font-Poppins font-semibold text-sm  text-gary_text">
          Learn a new skill in 2 hours
        </h1>
        <button className="flex lg:hidden flex-row items-center gap-1 lg:gap-2 bg-green rounded-full font-Poppins text-white font-normal px-1 py-1 md:py-3 md:px-4">
          <figure className="">
            <img src={arrowDown} alt="" />
          </figure>
          <a href="#" className="text-sm lg:text-base">
            Short by
          </a>
        </button>
      </div>
      {/* card container section */}
      <article className="grid grid-cols-2 lg:grid-cols-12 gap-x-2 lg:gap-x-8 gap-y-3 lg:gap-y-4 mb-5 lg:mb-24 relative">
        {/* card 1 */}
        <div className=" lg:col-span-4 flex flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg">
          <figure>
            <img
              src={skill1}
              alt=""
              className="w-full rounded-tr-md rounded-tl-md "
            />
          </figure>
          {/* content section */}
          <section className="flex flex-col gap-1 lg:gap-10 px-1 py-3 lg:py-6 lg:px-4">
            {/* top content */}
            <article className="flex justify-between items-start">
              <h1 className="font-Poppins font-medium text-xs lg:text-2xl">
                Learn Marketing from Top Instructors.
              </h1>
              <aside className="flex justify-start items-center gap-1">
                <figure>
                  <img src={star} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
                </figure>
                <p className="font-Poppins text-[8px] lg:text-base">4.5</p>
              </aside>
            </article>
            {/* bottom content */}
            <article className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 items-start lg:items-center">
              <aside className="flex items-start gap-3">
                <p className="font-Poppins font-medium text-[10px] lg:text-base">
                  6 weeks
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <figure>
                    <img
                      src={groupLogo}
                      alt=""
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </figure>
                  <p className="font-Poppins font-medium text-[10px] lg:text-base">
                    1.5k Students
                  </p>
                </div>
              </aside>
              <h1 className="text-center font-Poppins font-medium lg:font-semibold text-sm md:text-2xl text-green">
                30.5$
              </h1>
            </article>
          </section>
        </div>
        {/* card 2 */}
        <div className=" lg:col-span-4 flex flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg">
          <figure>
            <img
              src={skill2}
              alt=""
              className="w-full rounded-tr-md rounded-tl-md "
            />
          </figure>
          {/* content section */}
          <section className="flex flex-col gap-1 lg:gap-10 px-1 py-3 lg:py-6 lg:px-4">
            {/* top content */}
            <article className="flex justify-between items-start">
              <h1 className="font-Poppins font-medium text-xs lg:text-2xl">
                Learn Marketing from Top Instructors.
              </h1>
              <aside className="flex justify-start items-center gap-1">
                <figure>
                  <img src={star} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
                </figure>
                <p className="font-Poppins text-[8px] lg:text-base">4.5</p>
              </aside>
            </article>
            {/* bottom content */}
            <article className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 items-start lg:items-center">
              <aside className="flex items-start gap-3">
                <p className="font-Poppins font-medium text-[10px] lg:text-base">
                  6 weeks
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <figure>
                    <img
                      src={groupLogo}
                      alt=""
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </figure>
                  <p className="font-Poppins font-medium text-[10px] lg:text-base">
                    1.5k Students
                  </p>
                </div>
              </aside>
              <h1 className="text-center font-Poppins font-medium lg:font-semibold text-sm md:text-2xl text-green">
                30.5$
              </h1>
            </article>
          </section>
        </div>
        {/* card 3 */}
        <div className=" lg:col-span-4 flex flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg">
          <figure>
            <img
              src={skill3}
              alt=""
              className="w-full rounded-tr-md rounded-tl-md "
            />
          </figure>
          {/* content section */}
          <section className="flex flex-col gap-1 lg:gap-10 px-1 py-3 lg:py-6 lg:px-4">
            {/* top content */}
            <article className="flex justify-between items-start">
              <h1 className="font-Poppins font-medium text-xs lg:text-2xl">
                Learn Marketing from Top Instructors.
              </h1>
              <aside className="flex justify-start items-center gap-1">
                <figure>
                  <img src={star} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
                </figure>
                <p className="font-Poppins text-[8px] lg:text-base">4.5</p>
              </aside>
            </article>
            {/* bottom content */}
            <article className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 items-start lg:items-center">
              <aside className="flex items-start gap-3">
                <p className="font-Poppins font-medium text-[10px] lg:text-base">
                  6 weeks
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <figure>
                    <img
                      src={groupLogo}
                      alt=""
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </figure>
                  <p className="font-Poppins font-medium text-[10px] lg:text-base">
                    1.5k Students
                  </p>
                </div>
              </aside>
              <h1 className="text-center font-Poppins font-medium lg:font-semibold text-sm md:text-2xl text-green">
                30.5$
              </h1>
            </article>
          </section>
        </div>

        {/* card 4 */}
        <div className=" lg:col-span-4 flex lg:hidden flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg">
          <figure>
            <img
              src={skill1}
              alt=""
              className="w-full rounded-tr-md rounded-tl-md "
            />
          </figure>
          {/* content section */}
          <section className="flex flex-col gap-1 lg:gap-10 px-1 py-3 lg:py-6 lg:px-4">
            {/* top content */}
            <article className="flex justify-between items-start">
              <h1 className="font-Poppins font-medium text-xs lg:text-2xl">
                Learn Marketing from Top Instructors.
              </h1>
              <aside className="flex justify-start items-center gap-1">
                <figure>
                  <img src={star} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
                </figure>
                <p className="font-Poppins text-[8px] lg:text-base">4.5</p>
              </aside>
            </article>
            {/* bottom content */}
            <article className="flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-0 items-start lg:items-center">
              <aside className="flex items-start gap-3">
                <p className="font-Poppins font-medium text-[10px] lg:text-base">
                  6 weeks
                </p>
                <div className="flex items-center gap-1 lg:gap-2">
                  <figure>
                    <img
                      src={groupLogo}
                      alt=""
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </figure>
                  <p className="font-Poppins font-medium text-[10px] lg:text-base">
                    1.5k Students
                  </p>
                </div>
              </aside>
              <h1 className="text-center font-Poppins font-medium lg:font-semibold text-sm md:text-2xl text-green">
                30.5$
              </h1>
            </article>
          </section>
        </div>

        {/* arrow left */}
        <figure className="hidden lg:block absolute left-[3%] top-[25%] cursor-pointer">
          <img src={arrowLeft} alt="" />
        </figure>
        {/* right left */}
        <figure className="hidden lg:block absolute right-[3%] top-[25%] cursor-pointer">
          <img src={arrowRight} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default LearnSkill;
