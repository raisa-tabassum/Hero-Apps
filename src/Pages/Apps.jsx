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
  // console.log(apps);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Our All Applications</h1>
        <p className="mb-6 font-normal text-2xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-12 space-y-5">
        <h2 className="text-3xl font-semibold">
          <span>({searchedApps.length}) </span>
          Apps Found
        </h2>
        <label className="input bg-gray-100 sm:mt-5">
          <FaSearch className="text-gray-400 text-xl" />
          <input
            value={search}
            type="search"
            onChange={handleSearch}
            placeholder="Search Products"
          />
        </label>
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-10 px-20 justify-items-center">
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
