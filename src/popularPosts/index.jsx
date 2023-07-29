import { mockBlogData } from "../data/mockData";
import ArticleCard from "../components/ArticleCard";

const PopularPosts = () => {
  const sortByDate = (field) => {
    return function (a, b) {
      const dateA = new Date(a[field]);
      const dateB = new Date(b[field]);
      return dateB - dateA;
    };
  };

  const popularPosts = mockBlogData
    .sort(sortByDate("published_at"))
    .slice(30, 45);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:gap-10">
      {popularPosts.map((article, i) => (
        <ArticleCard
          key={i}
          title={article.title}
          description={article.description}
          category={article.category}
          image={article.image}
          source={article.source}
          author={article.author}
          published_at={article.published_at}
          slug={article.slug}
        />
      ))}
    </div>
  );
};

export default PopularPosts;
