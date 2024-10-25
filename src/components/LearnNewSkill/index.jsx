import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import arrowDown from "../../assets/images/newSkill/Vector (1).png";
import arrowLeft from "../../assets/images/newSkill/Component 40.png";
import arrowRight from "../../assets/images/newSkill/Component 39.png";
import star from "../../assets/images/newSkill/ant-design_star-outlined.png";
import groupLogo from "../../assets/images/newSkill/ci_group.png";
import SkillData from "./SkillCard/SkillData";
import SkillCard from "./SkillCard";

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
      <article className="relative">
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
        <figure
          onClick={previous}
          className="hidden lg:block absolute left-[3%] top-[25%] cursor-pointer"
        >
          <img src={arrowLeft} alt="" />
        </figure>
        {/* right arrow */}
        <figure
          onClick={next}
          className="hidden lg:block absolute right-[3%] top-[25%] cursor-pointer"
        >
          <img src={arrowRight} alt="" />
        </figure>
      </article>
    </section>
  );
};

export default LearnSkill;
