/* eslint-disable react/prop-types */
import Tags from "./Tags";
import moment from "moment";
import { CalendarMonthOutlined, Person2Outlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ArticleCard = ({
  title,
  slug,
  image,
  description,
  author,
  published_at,
  category,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-2 overflow-hidden">
        <img
          src={image}
          alt="post image"
          className="rounded-lg max-h-[200px] hover:scale-110 transition-all duration-300"
        />
        <div className="py-5 my-auto">
          <Tags tag={category} />
          <h2 className="font-bold md:text-[1rem] lg:text-[1.5rem] my-2 hover:text-red-500 transition-all duration-200 cursor-pointer">
            <Link to={`/${category}/${slug}`}>{title}</Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">{description}</p>
          <article className="opacity-50 text-sm my-3">
            {author && (
              <span className="mr-5">
                {<Person2Outlined />} {author}{" "}
              </span>
            )}
            <span>
              {" "}
              <CalendarMonthOutlined /> {moment(published_at).format("LLL")}
            </span>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
