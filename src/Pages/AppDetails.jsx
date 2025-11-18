import React from "react";
import AppInformation from "../Components/AppInformation";
import { useLoaderData } from "react-router";
import AppDescription from "../Components/AppDescription";
import RatingsChart from "../Components/RatingsChart";

const AppDetails = () => {
  const app = useLoaderData();
  return(
    <div>
    <AppInformation app={app}></AppInformation>
    <hr className='max-w-7xl mx-auto text-gray-300'/>
    <RatingsChart  ratings={app.ratings}></RatingsChart>
    <hr className='max-w-7xl mx-auto text-gray-300 my-3'/>
    <AppDescription app={app}></AppDescription>
  </div>
  )
};
export default AppDetails;