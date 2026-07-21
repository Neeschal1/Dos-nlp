import React from 'react'
import StatsCard from "../../components/statscard";

const Statistics = ({ service }) => {
  return (
    <section className="bg-white py-4 sm:-py-20 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          <StatsCard end={service.statistics.students} suffix="+" title="Students" />
          <StatsCard end={service.statistics.mentors} suffix="+" title="Mentors" />
          <StatsCard end={service.statistics.successRate} suffix="%" title="Success Rate" />
          <StatsCard end={service.statistics.batches} suffix="+" title="Branches" />
        </div>
      </div>
    </section>
  );
}

export default Statistics