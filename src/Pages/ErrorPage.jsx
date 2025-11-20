import React from "react";
import ErrorImg from "../assets/error-404.png";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center text-center py-20 mx-auto w-full">
        <img src={ErrorImg} alt="Not Found" className="w-100 mb-6 opacity-90" />
        <h2 className="text-5xl font-bold text-[#001931]">
          Oops, page not found!
        </h2>
        <p className="text-gray-500 text-2xl mt-3">
          The page you are looking for is not available.
        </p>
        <Link
          to="/"
          className="mt-6 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-3 rounded-md hover:bg-[#003060] text-2xl"
        >
          Go Back
        </Link>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ErrorPage;
