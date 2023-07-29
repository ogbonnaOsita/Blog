/* eslint-disable react/prop-types */
import moment from "moment";
import Tags from "../components/Tags";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SourceOutlinedIcon from "@mui/icons-material/SourceOutlined";
import { Link } from "react-router-dom";

const ShowcaseCard = ({
  image = "/blogs/blog1.jpg",
  category = "business",
  title = "This is the title for the blog and it is good",
  author = "John Smith",
  published_at = "2023-04-25T15:56:16+00:00",
  slug = "/",
  src = "New york times",
}) => {
  return (
    <div className="relative bg-gradient-to-t from-gray-800 overflow-hidden w-full h-full">
      <img
        src={image}
        alt=""
        className="mix-blend-overlay w-full h-full object-cover hover:scale-110 transition-all duration-300"
      />
      <div className="absolute bottom-0 text-white px-4 py-5">
        <div>
          <Tags tag={category} />
          <Link to={`${category}/${slug}`}>
            <h2 className="mt-1 text:xl lg:text-[1.3rem] hover:text-red-500 transition-all duration-200 cursor-pointer font-semibold">
              {title}
            </h2>
          </Link>
          <article className="opacity-50 text-sm">
            {author && <Person2OutlinedIcon />} {author} <SourceOutlinedIcon />{" "}
            {src} <CalendarMonthOutlinedIcon />{" "}
            {moment(published_at).format("LLL")}
          </article>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
