import React from "react";
import { Link } from "react-router";
import NotFoundedApps from "../../public/assets/App-Error.png"

const NoAppsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">  
      <img
        src={NotFoundedApps}
        alt="Not Found"
        className="w-60 mb-6 opacity-90"
      />
      <h2 className="text-5xl font-bold text-[#001931]">
        OPPS!! APP NOT FOUND
      </h2>
      <p className="text-gray-500 text-2xl mt-3">
        The App you are requesting is not found on our system.  please try another apps
      </p>
      <Link
        to="/"
        className="mt-6 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-3 rounded-md hover:bg-[#003060] text-2xl"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NoAppsFound;
