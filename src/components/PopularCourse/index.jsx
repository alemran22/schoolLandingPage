import arrowDown from "../assets/arrow-down.svg";
import PopularCourse1 from "../assets/popularCourse-1.svg";
import PopularCourse2 from "../assets/popularCourse-2.svg";
import PopularCourse3 from "../assets/popularCourse-3.svg";
import PopularCourse4 from "../assets/popularCourse-4.svg";
import PopularCourse5 from "../assets/popularCourse-5.svg";
import PopularCourse6 from "../assets/popularCourse-6.svg";
import star from "../assets/star.svg";
import groupLogo from "../assets/group-logo.svg";

const PopularCourse = () => {
  return (
    <section className="max-w-7xl mx-auto p-2 lg:p-0">
      {/* heading */}
      <div className="flex justify-between items-center lg:items-start gap-3 lg:gap-6 mb-4 lg:mb-16">
        <h1 className="font-Poppins font-semibold text-base md:text-3xl text-gary_text">
          Most Popular courses
        </h1>
        <button className="flex flex-row items-center gap-2 bg-green rounded-full font-Poppins text-white font-normal px-2 py-1 md:py-3 md:px-4">
          <figure className="">
            <img src={arrowDown} alt="" />
          </figure>
          <a href="#" className="text-sm lg:text-base">
            Short by
          </a>
        </button>
      </div>
      {/* card container section */}
      <article className="grid grid-cols-2 lg:grid-cols-12 gap-x-2 lg:gap-x-8 gap-y-3 lg:gap-y-4 mb-4 lg:mb-24">
        {/* card 1 */}
        <div className=" lg:col-span-4 flex flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg">
          <figure>
            <img
              src={PopularCourse1}
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
              src={PopularCourse2}
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
              src={PopularCourse3}
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
        <div className=" lg:col-span-4 flex flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg">
          <figure>
            <img
              src={PopularCourse4}
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

        {/* card 5 */}
        <div className=" lg:col-span-4 flex flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg">
          <figure>
            <img
              src={PopularCourse5}
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

        {/* card 6 */}
        <div className=" lg:col-span-4 flex flex-col gap-1 lg:gap-4 rounded-md shadow-black/10 shadow-lg">
          <figure>
            <img
              src={PopularCourse6}
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
      </article>
    </section>
  );
};

export default PopularCourse;
