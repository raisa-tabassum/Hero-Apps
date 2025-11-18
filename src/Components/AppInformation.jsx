import React from "react";
// import { useLoaderData} from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { Link } from "react-router";

const AppInformation = ({app}) => {
  const { image, title, companyName, downloads, ratingAvg, reviews } = app;

  return (
    <div className="card lg:card-side bg-base-50 max-w-7xl mx-auto my-10">
      <figure>
        <img className="w-[285px] h-[285px]" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="text-[#627382] text-xl">
          Developed by <span className="text-[#632EE3]">{companyName}</span>
        </p>
        <hr className="text-gray-300 my-3" />
        <div>
          <div className="flex gap-20">
            <div className="leading-10">
              <img className="w-8" src={downloadIcon} alt="" />
              <p className="text-[#627382] text-md">Downloads</p>
              <h2 className="font-extrabold text-3xl">{downloads}</h2>
            </div>
            <div className="leading-10">
              <img className="w-8" src={ratingIcon} alt="" />
              <p className="text-[#627382] text-md">Average Ratings</p>
              <h2 className="font-extrabold text-4xl">{ratingAvg}</h2>
            </div>
            <div className="leading-10 mb-5">
              <img className="w-8" src={reviewIcon} alt="" />
              <p className="text-[#627382] text-md">Total Reviews</p>
              <h2 className="font-extrabold text-3xl">{reviews}</h2>
            </div>
          </div>
          <button className="btn border-none text-white w-60 h-12 bg-[#00D390] text-lg">
            Install Now (291 MB)
          </button>
        </div>
      </div>
    </div>
  );
};
export default AppInformation;
// onClick={()=> install()} 