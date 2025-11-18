import React from "react";

const States = () => {
  return (
    <div className="text-center bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white py-10">
        <h1 className="text-4xl font-semibold">Trusted by Millions, Built for You</h1>
      <div className="flex justify-between max-w-2xl mx-auto my-4">
        <div className="">
            <p className="leading-10 text-sm font-extralight">Total Downloads</p>
            <h1 className="font-bold text-5xl">29.6M</h1>
            <p className="leading-10 text-sm font-extralight">21% more than last month</p>
        </div>
        <div className="leading-6">
            <p className="text-sm leading-10 font-extralight">Total Reviews</p>
            <h1 className="font-extrabold text-5xl">906K</h1>
            <p className="text-sm leading-10 font-extralight">46% more than last month</p>
        </div>
        <div className="leading-6">
            <p className="text-sm leading-10 font-extralight">Active Apps</p>
            <h1 className="font-extrabold text-5xl">132+</h1>
            <p className="text-sm leading-10 font-extralight">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default States;
