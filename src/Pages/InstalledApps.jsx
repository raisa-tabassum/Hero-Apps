import React, { useState } from "react";
import { loadInstallation, uninstall } from "../Utils/localStorage";
import downloadIcon from "../../public/assets/icon-downloads.png";
import ratingIcon from "../../public/assets/icon-ratings.png";

const InstalledApps = () => {
  const [installed, setInstalled] = useState(() => loadInstallation());
  const [sortOrder, setSortOrder] = useState("none");

  if (!installed.length) return <p className="text-4xl text-gray-500 text-center mt-10">No Data Available</p>;

  const parseDownloads = (str) => {
    str = str.toUpperCase().trim();
    const lastChar = str[str.length - 1];

    let multiplier = 1;
    let number = parseFloat(str);

    if (lastChar === "K") multiplier = 1000;
    else if (lastChar === "M") multiplier = 1000000;
    else if (lastChar === "B") multiplier = 1000000000;

    if (multiplier > 1) {
      number = parseFloat(str.slice(0, -1));
    }

    return number * multiplier;
  };

  const sortedItem = () => {
    if (sortOrder === "downloads-asc") {
      return [...installed].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sortOrder === "downloads-dsc") {
      return [...installed].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return installed;
    }
  };

  const handleUninstall = (id) => {
    uninstall(id);
    setInstalled((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Your Installed Apps</h1>
        <p className="mb-6 font-normal text-2xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col md:flex-row space-y-5 justify-between items-center py-5">
        <h1 className="text-3xl font-semibold">
          <span>{installed.length} Products Found</span>
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered bg-transparent"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="downloads-asc">Low &gt; High</option>
            <option value="downloads-dsc">High &gt; Low</option>
          </select>
        </label>
      </div>

      {/* Wishlist items */}
      <div className="space-y-3">
        {sortedItem().map((a) => (
          <div key={a.id} className="card card-side shadow bg-base-200">
            <div className="p-4">
              <figure className="rounded-2xl">
                <img
                  className="w-30 h-30 overflow-hidden object-cover"
                  src={a.image}
                  alt={a.companyName}
                />
              </figure>
            </div>
            <div className="card-body px-4">
              <h2 className="card-title text-xl">{a.companyName}</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <img className="w-4 h-4" src={downloadIcon} alt="" />
                  <p className="text-[#00D390] text-lg">{a.downloads}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[#627382] text-lg">{a.ratingAvg}</p>
                </div>
                <div>
                  <p className="text-[#627382] textarea-lg">{a.size}</p>
                </div>
              </div>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <button
                onClick={() => handleUninstall(a.id)}
                className="btn bg-[#00D390] text-white text-xl py-6 rounded-lg"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
