import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";

function CareerOpportunities() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5000/api/jobs")
    .then((res) => res.json())
    .then((data) => {
      console.log("API RESPONSE:", data);  // 👈 ADD THIS LINE
      setJobs(data.data);
    })
    .catch((err) => console.error(err));
}, []);

  return (
  <div className="w-[90%] mx-auto py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </div>
);
}

export default CareerOpportunities;