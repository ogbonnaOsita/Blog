/* eslint-disable react/prop-types */
import moment from "moment";
import { Link } from "react-router-dom";

const SecondCategoryCard = ({
  title,
  slug,
  image,
  published_at,
  category,
}) => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col sm:gap-5 border-t py-5">
        <img
          src={image}
          alt="post image"
          className="sm:w-2/6 rounded-lg max-h-[100px]"
        />
        <div className=" sm:w-4/6 my-auto">
          <h2 className="font-bold sm:text-[1rem] lg:text-[1rem] my-2 hover:text-red-500 transition-all duration-200 cursor-pointer">
            <Link to={`/${category}/${slug}`}>{title}</Link>
          </h2>
          <article className="opacity-50 text-xs my-3">
            {moment(published_at).format("LLL")}
          </article>
        </div>
      </div>
    </div>
  );
};

export default SecondCategoryCard;
