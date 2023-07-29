/* eslint-disable react/prop-types */
import { CalendarMonthOutlined, Person2Outlined } from "@mui/icons-material";
import moment from "moment";
import Tags from "../../components/Tags";
import { Link } from "react-router-dom";

const RelatedCard = ({
  title,
  slug,
  image,
  author,
  published_at,
  category,
}) => {
  return (
    <div>
      <article className="max-w-sm mx-auto">
        <Link to={`/${category}/${slug}`}>
          <img
            src={image}
            className="mb-5 rounded-lg w-full h-[200px]"
            alt="Image 1"
          />
        </Link>
        <Tags tag={category} />
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white hover:text-red-500 transition-all duration-200 cursor-pointer">
          <Link to={`/${category}/${slug}`}>{title}</Link>
        </h2>
        <p className="mb-4 font-light text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
          cupiditate...
        </p>
        <small className="text-xs text-gray-400">
          {author && (
            <span className="mr-5">
              {<Person2Outlined />} {author}{" "}
            </span>
          )}
          <span>
            {" "}
            <CalendarMonthOutlined /> {moment(published_at).format("LLL")}
          </span>
        </small>
      </article>
    </div>
  );
};

export default RelatedCard;
