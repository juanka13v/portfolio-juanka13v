import React from "react";

const FlipCard = ({ title, description, className, front, back, path }) => {
  return (
    <a href={path} className={`block flip-card ${className}`}>
      <div className="flip-card-inner">
        <div className={`flip-card-front ${front}`}>
            {title}
        </div>
        <div className={`flip-card-back ${back}`}>
          {description}
        </div>
      </div>
    </a>
  );
};

export default FlipCard;
