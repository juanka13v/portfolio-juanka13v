import { useState } from "react";
import { DataProjects } from "../constants";
import FiltersProjects from "@components/FiltersProjects";
import CardProject from "@components/CardProject";

function tagFilter(array, tag) {
  return array.filter((obj) => obj.tag.includes(tag));
}

const Projects = () => {
  const { filters, projects } = DataProjects;
  const [isFull, setIsFull] = useState(false);
  const [showProjects, setShowProjects] = useState(projects);

  const [filterActive, setFilterActive] = useState("");

  const handleFilterClick = (newFilter) => {
    if (newFilter === filterActive) {
      setFilterActive("");
      setShowProjects(projects)
      return;
    }
    setFilterActive(newFilter);
    setShowProjects(tagFilter(projects, newFilter))
  };

  const handleFull = () => {
    setIsFull(!isFull);
  };

  return (
    <section className="flex flex-col gap-6 mb-[100px]">
      <h2 className="text-center text-2xl font-bold">Projects</h2>

      <div className="flex flex-col gap-4">
        <FiltersProjects
          filters={filters}
          filterActive={filterActive}
          handleFilterClick={handleFilterClick}
        />

        <div
          className={`${
            isFull ? "max-h-max" : "max-h-[800px] overflow-hidden"
          } relative grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] justify-items-center gap-4`}
        >
          {showProjects.map((item) => (
            <CardProject project={item} key={item.id} />
          ))}

          <div
            className={`${
              isFull
                ? "-bottom-[100px] h-auto"
                : "bg-gradient-to-b from-transparent to-gray-600 h-[200px]  bottom-0"
            } absolute  left-0 right-0 w-full  flex justify-center items-center`}
          >
            <button
              className="btn btn-primary z-20"
              onClick={handleFull}
            >
              {isFull ? "Ver menos" : "Ver Mas"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
