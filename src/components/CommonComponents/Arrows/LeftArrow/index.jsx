import { IoIosArrowBack } from "react-icons/io";

const LeftArrow = () => {
  return (
    <div className="absolute left-7 top-[40%] cursor-pointer hidden md:block bg-white p-2 rounded-full">
      <IoIosArrowBack color="green" size={30} />
    </div>
  );
};

export default LeftArrow;
