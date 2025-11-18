import React from "react";
import useApps from "../Hooks/useApps";
import AppCards from "../Components/AppCards";

const Apps = () => {
  const { apps } = useApps("apps");
  return (
    <div className="text-center my-12">
      <div>
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="mt-2 text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-10 px-20">
        {apps.map((app) => (
          <AppCards key={app.id} app={app}></AppCards>
        ))}
      </div>
    </div>
  );
};

export default Apps;
