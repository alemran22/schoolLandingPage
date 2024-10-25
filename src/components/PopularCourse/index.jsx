import arrowDown from "../../assets/images/popularCourses/Vector (1).png";
import CardData from "./CardData";
import CourseCard from "./CourseCard";

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
            Sort by
          </a>
        </button>
      </div>
      {/* card container section */}
      <article className="grid grid-cols-2 lg:grid-cols-12 gap-x-2 lg:gap-x-8 gap-y-3 lg:gap-y-4 mb-4 lg:mb-24">
        {/* card 1 */}
        {CardData.map((item) => (
          <CourseCard key={item.id} {...item} />
        ))}
      </article>
    </section>
  );
};

export default PopularCourse;
