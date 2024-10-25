import mainImg from "../../assets/images/goodEducation/Frame 6550.png";
import Bag from "../../assets/images/goodEducation/Frame 6544.png";
import JobOpurtunities from "../../assets/images/goodEducation/Group 176.png";
import book from "../../assets/images/goodEducation/book.png";
import clock from "../../assets/images/goodEducation/Frame 6542.png";
import group from "../../assets/images/goodEducation/group-reading.png";

const GoodEducation = () => {
  return (
    <section className="max-w-7xl md:m-4 lg:mx-auto mb-6 lg:mb-24 p-4 md:p-0">
      {/* heading */}
      <div className="flex justify-between items-center lg:items-start gap-3 lg:gap-6 mb-4 lg:mb-16">
        <h1 className="font-Poppins font-semibold text-base  md:text-3xl text-gary_text">
          We Bring The Good Education To Life
        </h1>
      </div>
      <main className="flex flex-col md:flex-row  gap-4 md:gap-24 ">
        {/* left section */}
        <aside className="relative flex justify-start z-10 p-4 md:p-0">
          {/* main image */}
          <figure>
            <img src={mainImg} alt="" />
          </figure>
          {/* right absolute position */}
          <div className="w-16 md:w-20 lg:w-32 absolute top-[60%] md:top-[50%]   -right-[3%] md:-right-[15%] px-1   py-3 md:px-3 md:py-5 bg-white rounded-xl flex flex-col items-center gap-0 md:gap-3 shadow-black/10 shadow-lg">
            <figure className="flex ">
              <img src={Bag} alt="" />
            </figure>
            <figure className="flex ">
              <img src={JobOpurtunities} alt="" />
            </figure>
          </div>
        </aside>

        {/* right section */}
        <article className="flex flex-col gap-3 lg:gap-8">
          <h1 className="max-w-xl font-Poppins font-semibold text-2xl lg:text-5xl leading-normal text-gary_text">
            Let Your Education Do <br /> The Walking
          </h1>
          {/* ebook */}
          <div className="flex items-center gap-3">
            <figure>
              <img src={book} alt="" />
            </figure>
            <p className="font-Poppins font-medium text-sm lg:text-xl text-gary_text">
              Free E-book, Videos and kits
            </p>
          </div>
          {/* Learn at your own pace */}
          <div className="flex items-center gap-3">
            <figure>
              <img src={clock} alt="" />
            </figure>
            <p className="font-Poppins font-medium text-sm lg:text-xl text-gary_text">
              Learn at your own pace
            </p>
          </div>

          {/* Collaborate  */}
          <div className="flex items-start md:items-center  gap-3">
            <figure className="w-20 h-20 lg:w-fit lg:h-fit">
              <img src={Bag} alt="" />
            </figure>
            <p className="font-Poppins font-medium text-sm lg:text-xl text-gary_text">
              Collaborate with different learners around the globe
            </p>
          </div>

          {/* Top instructors */}
          <div className="flex items-center gap-3">
            <figure>
              <img src={group} alt="" />
            </figure>
            <p className="font-Poppins font-medium text-sm lg:text-xl text-gary_text">
              Top instructors around the globe
            </p>
          </div>
        </article>
      </main>
    </section>
  );
};

export default GoodEducation;
