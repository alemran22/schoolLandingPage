import { IoIosArrowForward } from "react-icons/io";
const RightArrow = () => {
  return (
    <div className="absolute right-10 top-[40%] cursor-pointer hidden md:block bg-white p-2 rounded-full">
      <IoIosArrowForward color="green" size={30} />
    </div>
  );
};

export default RightArrow;
