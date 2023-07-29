/* eslint-disable no-unused-vars */
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import CarouselCard from "./CarouselCard";
import { pickOneFromEachCategory } from "../utils/functions";

import { mockBlogData } from "../data/mockData";

export default function Trending() {
  const trendingArticles = pickOneFromEachCategory(mockBlogData);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-white md:px-5 rounded-xl">
      <Slider {...settings}>
        {trendingArticles.map((article, i) => (
          <div key={i}>
            <CarouselCard
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
      </Slider>
    </div>
  );
}
