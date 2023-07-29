import ShowcaseCard from "./ShowcaseCard";
import { mockBlogData } from "../data/mockData";

const index = () => {
  function sortByDate(field) {
    return function (a, b) {
      const dateA = new Date(a[field]);
      const dateB = new Date(b[field]);
      return dateB - dateA;
    };
  }

  const recentData = mockBlogData.sort(sortByDate("published_at")).slice(0, 3);

  return (
    <div className="mt-5 mb-[80px]">
      <div className="grid grid-cols-1  md:grid-rows-2 md:grid-cols-5 gap-2 md:max-h-[500px]">
        <div className="bg-gray-300 md:row-span-3 md:col-span-3 max-h-[300px] md:max-h-full">
          <ShowcaseCard
            title={recentData[0].title}
            category={recentData[0].category}
            author={recentData[0].author}
            published_at={recentData[0].published_at}
            image={recentData[0].image}
          />
        </div>
        <div className="bg-gray-300 md:row-span-1 md:col-span-2 max-h-[300px] md:max-h-full">
          <ShowcaseCard
            title={recentData[1].title}
            category={recentData[1].category}
            author={recentData[1].author}
            published_at={recentData[1].published_at}
            image={recentData[1].image}
          />
        </div>
        <div className="bg-gray-300 md:row-span-2 md:col-span-2 max-h-[300px] md:max-h-full">
          <ShowcaseCard
            title={recentData[2].title}
            category={recentData[2].category}
            author={recentData[2].author}
            published_at={recentData[2].published_at}
            image={recentData[2].image}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
