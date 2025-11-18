import React from "react";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import AppCards from "../Components/AppCards";

const TopApps = () => {
  const { apps } = useApps("apps");
  const featuredApps = apps.slice(0,8);
  return (
    <div className="text-center my-12">
      <div>
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="mt-2 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-10 px-20">
        {featuredApps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>
      <div>
        <Link to='/apps' className="btn rounded-lg w-30 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TopApps;
