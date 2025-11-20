import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCards from "../Components/AppCards";
import { FaSearch } from "react-icons/fa";
import NoAppsFound from "../Components/NoAppsFound";

const Apps = () => {
  const { apps } = useApps("apps");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;
  console.log(apps);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <div className="text-center my-12">
      <div>
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="mt-2 text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold mt-12 text-[#001931]">
            <span>({searchedApps.length}) </span>
            Apps Found
          </h2>
          <label className="input bg-gray-100">
            <FaSearch className="text-gray-400 text-xl" />
            <input
              value={search}
              type="search"
              onChange={handleSearch}
              placeholder="Search Products"
            />
          </label>
        </div>
      </div>
      <div>
        {loading ? (
          <div>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-xl"></span>
          </div>
        ) : searchedApps.length === 0 ? (
          <NoAppsFound />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-10 px-20">
            {searchedApps.map((app) => (
              <AppCards key={app.id} app={app}></AppCards>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
