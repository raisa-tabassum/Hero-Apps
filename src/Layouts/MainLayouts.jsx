import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      {/* Loading Animation */}
      {navigation.state === "loading" && (
        <div className="text-center">
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
          <span className="loading loading-bars loading-xl"></span>
        </div>
      )}
      <div className="flex-1 bg-gray-100 mx-auto w-full">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
