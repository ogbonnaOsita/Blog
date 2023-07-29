import CategoryCard from "../../components/CategoryCard";
import SecondCategoryCard from "../../components/SecondCategoryCard";
import CategoryHeading from "../../components/CategoryHeading";
import SectionHeader from "../../components/SectionHeader";
import { mockBlogData } from "../../data/mockData";
import { getObjectsOfSameCategory, sortByDate } from "../../utils/functions";
import { Pagination } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import ScrollToTop from "../../components/ScrollToTop";

const Business = () => {
  const categoryData = getObjectsOfSameCategory(mockBlogData, "business");
  const sortedData = categoryData.sort(sortByDate("published_at"));
  const editorsPick = categoryData.slice(0, 5);

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentOrderList = sortedData.slice(firstPostIndex, lastPostIndex);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentOrderList]);

  //////////////// Start Pagination ///////////////////////
  const noOfPages = Math.ceil(sortedData.length / postPerPage);

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };
  //////////////// End Pagination /////////////////////////

  return (
    <div>
      <div
        className={`category-heading bg-[#AC92EB] text-white py-20 px-10 md:px-16`}
      >
        <CategoryHeading category="business" />
      </div>
      <div className="lg:max-w-[85%] max-w-[90%] mx-auto my-10">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="lg:w-4/6 md:3/5 flex flex-col gap-3 bg-white px-5 py-5">
            <SectionHeader txt="Recent Posts" />
            {currentOrderList.map((article, i) => (
              <div key={i}>
                <CategoryCard
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  image={article.image}
                  source={article.source}
                  author={article.author}
                  published_at={article.published_at}
                  slug={article.slug}
                />
              </div>
            ))}
            <Pagination
              count={noOfPages}
              page={currentPage}
              onChange={handlePagination}
              variant="outlined"
              shape="rounded"
              color="blogRed"
            />
          </div>
          <div className="lg:w-2/6 md:3/5 flex flex-col bg-white px-5 py-5">
            <SectionHeader txt="Pick of The Week" />
            {editorsPick.map((article, i) => (
              <div key={i}>
                <SecondCategoryCard
                  title={article.title}
                  category={article.category}
                  image={article.image}
                  source={article.source}
                  author={article.author}
                  published_at={article.published_at}
                  slug={article.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Business;
