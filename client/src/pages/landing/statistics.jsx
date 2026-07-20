import React from "react";
import StatsCard from "../../components/statscard";

const Statistics = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-10">
      <StatsCard end={5000} suffix="+" title="Students Trained" />

      <StatsCard end={1000} suffix="+" title="Job Placement" />

      <StatsCard end={50} suffix="+" title="Corporate Clients" />

      <StatsCard end={10} suffix="+" title="Professional Courses" />
    </div>
  );
};

export default Statistics;
