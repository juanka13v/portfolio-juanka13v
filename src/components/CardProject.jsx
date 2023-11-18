const CardProject = ({ project }) => {
  return (
    <div className="bg-base-300 flex flex-col p-4 rounded-lg max-w-[280px] ">
      <figure className="">
        <img src={project.image} alt={project.title} className="w-full h-auto object-cover aspect-video rounded-lg" />
      </figure>

      <div className="flex gap-3 mt-4">
          {
            project.tag.map((item) => (
              <span key={item} className="rounded-md text-xs py-1 px-2 bg-neutral text-neutral-content">{item}</span>
            ))
          }
        </div>

      <div className="fiex flex-col mt-3">
        <div className="flex flex-col">
          <h2 className="text-base font-bold font-mono capitalize">{project.title}</h2>
          <p className="text-sm font-light mt-2 line-clamp-2">{project.description}</p>
        </div>
        
        

        <div className="flex gap-4 mt-4 justify-end">
          <a href={project.url} className="btn btn-sm btn-ghost btn-outline capitalize">Demo</a>
          <a href={project.github_url} className="btn btn-sm btn-neutral capitalize">Github</a>
        </div>
      </div>


    </div>
  );
};

export default CardProject;
