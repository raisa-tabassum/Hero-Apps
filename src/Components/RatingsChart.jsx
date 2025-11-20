import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RatingsChart = ({ ratings }) => {
  //   console.log(ratings);
  return (
    <div className="max-w-7xl mx-auto sm:px-10 md:px-0">
      <div>
        <p className="font-bold text-xl mt-8 mb-3">Ratings</p>
      </div>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ratings} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8800" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingsChart;
