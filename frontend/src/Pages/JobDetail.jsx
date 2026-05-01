import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="w-[90%] mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-500 mb-2">{job.type} • {job.location}</p>
      <p className="text-gray-700">{job.desc}</p>
    </div>
  );
}

export default JobDetail;