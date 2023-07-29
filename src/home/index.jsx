import ScrollToTop from "../components/ScrollToTop";
import SectionHeader from "../components/SectionHeader";
// import Newsletter from "../newsletter";
import PopularPosts from "../popularPosts";
import Showcase from "../showcase";
import Trending from "../trending";

const Home = () => {
  return (
    <div>
      <div className="max-w-[85%] mx-auto ">
        <Showcase />
      </div>
      <div className="bg-white">
        <div className="max-w-[85%] mx-auto py-[20px]">
          <div className="my-10">
            <SectionHeader txt="Trending" />
          </div>
          <div className="trending-posts mb-20">
            <Trending />
          </div>
          <div className="my-10">
            <SectionHeader txt="Popular Posts" />
          </div>
          <div className="popular-posts mt-15">
            <PopularPosts />
          </div>
        </div>
      </div>
      {/* <div className="newsletter  mx-auto py-[20px] bg-gray-100">
        <Newsletter />
      </div> */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
