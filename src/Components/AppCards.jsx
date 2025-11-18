import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import { Link } from "react-router";

const AppCards = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/app/${id}`} className="card w-70 bg-base-100 shadow-sm">
      <figure className="p-4">
        <img className="w-[285px] h-[245px] rounded-xl" src={image} />
      </figure>
      <div className="px-3">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions my-4 flex justify-between">
          <div className="badge text-[#00D390]">
            <img className="w-3" src={downloadIcon} /> <span>{downloads}</span>
          </div>
          <div className="badge text-[#FF8811]">
            <img className="w-3" src={ratingIcon} /> <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCards;
