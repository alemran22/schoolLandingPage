import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import arrowDown from "../../assets/images/newSkill/Vector (1).png";

import SkillData from "./SkillCard/SkillData";
import SkillCard from "./SkillCard";
import LeftArrow from "../CommonComponents/Arrows/LeftArrow";
import RightArrow from "../CommonComponents/Arrows/RightArrow";
import PopularCourse from "../PopularCourse";
import CourseCard from "../PopularCourse/CourseCard";
import CardData from "../PopularCourse/CardData";

const LearnSkill = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="max-w-7xl mx-auto p-2 lg:p-0 mt-20">
      <section>
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
        <article className="relative hidden md:block">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {SkillData.map((item) => (
              <SkillCard key={item.id} {...item} />
            ))}
          </Slider>

          {/* arrow left */}
          <figure onClick={previous} className=" absolute top-[25%] ">
            <LeftArrow />
          </figure>
          {/* right arrow */}
          <figure onClick={next} className="right-3 absolute top-[25%]">
            <RightArrow />
          </figure>
        </article>
        {/* mobile view */}

        <article className="md:hidden grid grid-cols-2 lg:grid-cols-12 gap-x-2 lg:gap-x-8 gap-y-3 lg:gap-y-14 mb-4 lg:mb-24">
          {/* card  */}
          {CardData.map((item) => (
            <CourseCard key={item.id} {...item} />
          ))}
        </article>
      </section>
    </section>
  );
};

export default LearnSkill;
