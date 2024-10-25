import Banner from "../../components/Banner";
import Favourite from "../../components/Favourite";
import GoodEducation from "../../components/GoodEducation";
import LearnSkill from "../../components/LearnNewSkill";
import Navbar from "../../components/Navbar";
import PopularCourse from "../../components/PopularCourse";
// import PopularCourse from "../../components/PopularCourse";

const Template1 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Favourite />
      <PopularCourse />
      <LearnSkill />
      <GoodEducation />
      {/* <Review /> */}
      {/* <Instructors /> */}
      {/* <FirstStep /> */}
      {/* <Footer />  */}
    </div>
  );
};

export default Template1;
