import React from "react";
import Banner from "../components/Banner";
import WhyWorkWithUsCard from "../components/WhyWorkWithUsCard";
import CareerOpportunities from "../components/CareerOpportunities";


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
