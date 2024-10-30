/* eslint-disable react/prop-types */
const SliderCard = ({ title, image, description }) => {
  return (
    <div className="group relative ">
      <img src={image} alt="hello" />
      {/* shadow */}
      <div className="bg-black/50 absolute inset-0 mr-4"></div>
      {/* texts */}
      <div className=" absolute left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 translate-y-1/2 md:translate-y-0 bottom-1/2 md:-bottom-[68px] group-hover:bottom-2  px-3 text-white duration-500">
        <h1 className="text-3xl font-semibold mb-3">{title}</h1>
        <p className="hidden md:block text-base text-wrap">{description}</p>
      </div>
    </div>
  );
};
export default SliderCard;
