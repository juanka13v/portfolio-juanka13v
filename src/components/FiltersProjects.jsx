const FiltersProjects = ({ filters, filterActive, handleFilterClick }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((item) => (
        <button
          className={`btn btn-outline btn-xs md:btn-sm capitalize ${
            filterActive === item && "btn-active"
          }`}
          key={item}
          onClick={() => handleFilterClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FiltersProjects;
