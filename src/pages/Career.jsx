import React from "react";
import Banner from "../Components/Banner";
import WhyWorkWithUsCard from "../Components/WhyWorkWithUsCard";
import CareerOpportunities from "../Components/CareerOpportunities";
import ApplicationForm from "../Components/ApplicationForm";

function Career() {
  return (
    <div className="min-h-screen">
      <Banner type={"career"}></Banner>
      <WhyWorkWithUsCard></WhyWorkWithUsCard>
      <CareerOpportunities></CareerOpportunities>
      
    </div>
  );
}

export default Career;
