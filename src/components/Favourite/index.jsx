import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useRef } from "react";
import LeftArrow from "../CommonComponents/Arrows/LeftArrow";
import RightArrow from "../CommonComponents/Arrows/RightArrow";
import SliderCard from "./SliderCard";
import CardData from "./SliderCard/CardData";
// import marketing from "../../assets/images/favourite/image 8 (2).png";
// import design from "../../assets/images/favourite/Component 22.png";
// import programming from "../../assets/images/favourite/Component 25.png";
// import technology from "../../assets/images/favourite/Component 22.png";

const Favourite = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="max-w-7xl m-4 lg:mx-auto mb-8 lg:mb-24 p-4 md:p-0">
      {/* heading */}
      <div className="flex justify-between items-start gap-6 mb-4 lg:mb-16">
        <h1 className="font-Poppins font-medium md:font-semibold text-base md:text-3xl text-gary_text">
          Choose Favourite course from top categories
        </h1>
        <a
          className="text-nowrap font-Poppins font-normal text-sm md:text-2xl text-gary_text"
          href="#"
        >
          See all
        </a>
      </div>
      {/* course and image desktop section */}
      <div className="relative ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {CardData.map((item) => (
            <div key={item.id} className="pl-3">
              <SliderCard {...item} />
            </div>
          ))}
        </Slider>
        {/* arrow left */}
        <figure onClick={previous}>
          <LeftArrow />
        </figure>
        {/* right left */}
        <figure onClick={next}>
          <RightArrow />
        </figure>
      </div>
    </section>
  );
};

export default Favourite;
