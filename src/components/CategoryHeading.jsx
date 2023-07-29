import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const CategoryHeading = ({ category }) => {
  // let color;

  // if (category == "business") color = "#AC92EB";
  // else if (category == "technology") color = "#ED5564";
  // else if (category == "health") color = "#4Fc1E8";
  // else if (category == "entertainment") color = "#FFCE54";
  // else if (category == "sports") color = "#A0D568";

  return (
    <div>
      <div
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3 capitalize">
          {category}
        </h1>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo tempore
          eum veniam est assumenda similique.
        </p>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link to="/" className="text-gray-100 hover:underline">
            Home
          </Link>
          <Link
            to="/business"
            className="capitalize text-white hover:underline"
          >
            {category}
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default CategoryHeading;
