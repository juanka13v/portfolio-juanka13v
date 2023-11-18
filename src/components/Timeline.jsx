import React from "react";

const Timeline = ({ content }) => {
  return (
    <ol className="relative border-s border-base-content">
      {content.map((item) => (
        <li className="mb-4 ms-4">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-base-content bg-base-content"></div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mb-4 text-sm md:text-base font-normal text-base-content">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
