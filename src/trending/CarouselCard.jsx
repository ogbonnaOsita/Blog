/* eslint-disable react/prop-types */
import Tags from "../components/Tags";
import moment from "moment";
import {
  CalendarMonthOutlined,
  Person2Outlined,
  SourceOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const CarouselCard = ({
  title,
  slug,
  image,
  description,
  author,
  published_at,
  source,
  category,
}) => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:gap-5">
        <img
          src={image}
          alt="post image"
          className="md:w-2/5 rounded-lg max-h-[300px]"
        />
        <div className=" md:w-3/5 py-5 my-auto">
          <Tags tag={category} />
          <h2 className="font-bold md:text-[1rem] lg:text-[2rem] my-2 hover:text-red-500 transition-all duration-200 cursor-pointer">
            <Link to={`/${category}/${slug}`}>{title}</Link>
          </h2>
          <p className="text-gray-600 line-clamp-3">{description}</p>
          <article className="opacity-50 text-sm my-3">
            {author && <Person2Outlined />} {author} <SourceOutlined /> {source}{" "}
            <CalendarMonthOutlined /> {moment(published_at).format("LLL")}
          </article>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
