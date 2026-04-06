import React, { useState } from "react";
import { Upload, Send, CheckCircle } from "lucide-react";

function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicantData, setApplicantData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    position: "Head of Technology & AI Product",
    resume: null,
    message: "",
  });

  function handleOnchange(e) {
    const { name, value } = e.target;
    setApplicantData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setApplicantData((prev) => ({ ...prev, resume: file }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting Data:", applicantData);
    // Simulate API call
    setIsSubmitted(true);
    setApplicantData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      position: "Head of Technology & AI Product",
      resume: null,
      message: "",
    })


    setTimeout(() => setIsSubmitted(false), 5000); 
  }

  if (isSubmitted) {
    return (
      <div className="flex w-[90%] md:w-[60%] lg:w-[40%] items-center flex-col mx-auto py-24 bg-white rounded-3xl shadow-xl border border-sky-100 text-center px-10 mt-10">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Received!</h2>
        <p className="text-gray-600 mb-8">Thank you for your interest. Our team will review your profile and get back to you shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-sky-600 font-semibold hover:underline"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-[95%] lg:w-[90%] items-center flex-col mx-auto py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-600 mb-3">
          Join Our Mission
        </h1>
        <p className="text-gray-500">Fill out the form below and start your next chapter with us.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-sky-50 flex flex-col gap-8"
      >
        {/* Row 1: Names */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="text-gray-700 mb-2 text-sm font-semibold ml-1">First Name</label>
            <input
              id="first_name"
              required
              name="first_name"
              value={applicantData.first_name}
              onChange={handleOnchange}
              placeholder="John"
              className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sky-50 focus:border-sky-400 transition-all placeholder:text-gray-300"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last_name" className="text-gray-700 mb-2 text-sm font-semibold ml-1">Last Name</label>
            <input
              id="last_name"
              required
              name="last_name"
              value={applicantData.last_name}
              onChange={handleOnchange}
              placeholder="Doe"
              className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sky-50 focus:border-sky-400 transition-all placeholder:text-gray-300"
              type="text"
            />
          </div>
        </div>

        {/* Row 2: Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 mb-2 text-sm font-semibold ml-1">Email Address</label>
            <input
              required
              name="email"
              id="email"
              value={applicantData.email}
              onChange={handleOnchange}
              placeholder="john@example.com"
              className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sky-50 focus:border-sky-400 transition-all"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700 mb-2 text-sm font-semibold ml-1">Phone Number</label>
            <input
              required
              id="phone"
              name="phone"
              value={applicantData.phone}
              onChange={handleOnchange}
              placeholder="+1 (555) 000-0000"
              className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sky-50 focus:border-sky-400 transition-all"
              type="tel"
            />
          </div>
        </div>

        {/* Row 3: Position Select */}
        <div className="flex flex-col w-full">
          <label htmlFor="position" className="text-gray-700 mb-2 text-sm font-semibold ml-1">Position Applied For</label>
          <select
            id="position"
            name="position"
            value={applicantData.position}
            onChange={handleOnchange}
            className="border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-4 focus:ring-sky-50 focus:border-sky-400 transition-all bg-white appearance-none cursor-pointer"
          >
            <option>Head of Technology & AI Product</option>
            <option>Head of Strategic Acquisitions</option>
            <option>Blockchain / Smart Contract Developer</option>
            <option>Talent Acquisition Specialist – Healthcare</option>
            <option>Talent Acquisition Specialist – IT</option>
            <option>Finance & Accounting Specialist</option>
          </select>
        </div>

        {/* Row 4: File Upload */}
        <div className="flex flex-col w-full">
          <label htmlFor="resume" className="text-gray-700 mb-2 text-sm font-semibold ml-1">Upload Resume (PDF only)</label>
          <div className="relative group">
            <input
              required
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div className="border-2 border-dashed border-gray-200 group-hover:border-sky-400 group-hover:bg-sky-50 rounded-2xl p-8 transition-all flex flex-col items-center justify-center gap-2">
              <Upload className="w-8 h-8 text-gray-400 group-hover:text-sky-500" />
              <p className="text-sm text-gray-500">
                {applicantData.resume ? (
                  <span className="text-sky-600 font-medium">{applicantData.resume.name}</span>
                ) : (
                  "Click to upload or drag and drop"
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Row 5: Message */}
        <div className="flex flex-col w-full">
          <label htmlFor="message" className="text-gray-700 mb-2 text-sm font-semibold ml-1">Cover Letter / Message</label>
          <textarea
            name="message"
            id="message"
            value={applicantData.message}
            onChange={handleOnchange}
            placeholder="Tell us why you're a great fit..."
            className="border border-gray-200 rounded-xl p-3 h-32 resize-none focus:outline-none focus:ring-4 focus:ring-sky-50 focus:border-sky-400 transition-all"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Send Application
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;