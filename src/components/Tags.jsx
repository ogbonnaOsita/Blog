const Tags = ({ tag }) => {
  let color;

  if (tag == "business") color = "#AC92EB";
  if (tag == "technology") color = "#ED5564";
  if (tag == "health") color = "#4Fc1E8";
  if (tag == "entertainment") color = "#FFCE54";
  if (tag == "sports") color = "#A0D568";
  return (
    <h2 className={`bg-[${color}] text-white uppercase px-2 py-1 inline mr-2`}>
      {tag}
    </h2>
  );
};

export default Tags;
