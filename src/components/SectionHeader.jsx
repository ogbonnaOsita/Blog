const SectionHeader = ({ txt }) => {
  return (
    <div className="my-2">
      <h1 className="text-2xl md:text-3xl font-bold inline-block">
        <span className="block max-w-[40%] transition-all duration-300 h-2 bg-red-600"></span>
        <span className="pl-2">{txt}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
