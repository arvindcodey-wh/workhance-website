import React, { useEffect, useState } from "react";
import { Upload, Send, CheckCircle } from "lucide-react";
import PhoneInput from "react-phone-input-2";
const PhoneInputComponent = PhoneInput.default || PhoneInput;
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";



function ApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [submitError, setSubmitError] = useState("");

  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
fetch(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data.data))
      .catch(console.error);
  }, [id]);

  const [applicantData, setApplicantData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    position: "Head of Technology & AI Product",
    resume: null,
    message: "",
  });
  const recruitmentProcess = [
    {
      title: "Apply Online",
      description: "Submit your application through our careers portal",
    },
    {
      title: "Initial Screening",
      description: "HR review and initial phone/video screening",
    },
    {
      title: "Interview Process",
      description: "Technical and cultural fit interviews with the team",
    },
    {
      title: "Welcome Aboard",
      description: "Offer, onboarding, and integration into the team",
    },
  ];

  function handleOnchange(e) {
    // validate();
    const { name, value } = e.target;
    if (name === "first_name" || name === "last_name") {
      const sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");


      setApplicantData({
        ...applicantData,
        [name]: sanitizedValue,
      });
    } else setApplicantData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    try {
      const formData = new FormData();

      formData.append(
        "name",
        `${applicantData.first_name} ${applicantData.last_name}`
      );

      formData.append("email", applicantData.email);
      formData.append("phone", applicantData.phone);
formData.append("jobId", Number(id));
      formData.append("resume", file);

      const res = await fetch(
        "http://localhost:5000/api/applications",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.message || " User already applied to this job.");
        return;
      }
      setSubmitError("");
      toast.success("Application submitted successfully");
      setIsSubmitted(true);

      setApplicantData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        message: "",
      });

      setErrors({});
      setFile(null);

      setTimeout(() => setIsSubmitted(false), 5000);


    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  }

  function validate() {
    let newErrors = {};

    // First Name
    if (!applicantData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }

    // Last Name
    if (!applicantData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }

    // Email
    if (!applicantData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone
    // Phone validation
    if (!applicantData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(applicantData.phone)) {
      newErrors.phone = "Enter valid phone number";
    }

    // Resume
    const allowedTypes = [
      "application/pdf",
      "application/msword", // .doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
    ];

    if (!file) {
      newErrors.resume = "Resume is required";
    } else {
      // Check if the file type is in our allowed list
      if (!allowedTypes.includes(file.type)) {
        newErrors.resume = "Only PDF and Word documents allowed";
      }

      // Size check (keeping your 2MB limit)
      if (file.size > 2 * 1024 * 1024) {
        newErrors.resume = "File size must be less than 2MB";
      }
    }

    // Message
    if (!applicantData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (applicantData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  if (isSubmitted) {
    return (
      <div className="flex w-[90%] md:w-[60%] lg:w-[40%] items-center flex-col mx-auto py-24 bg-white rounded-3xl shadow-xl border border-sky-100 text-center px-10 mt-10">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Application Received!
        </h2>
        <p className="text-gray-600 mb-8">
          Thank you for your interest. Our team will review your profile and get
          back to you shortly.
        </p>
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
    <div className="flex w-[90%] lg:w-[70%] items-center flex-col mx-auto py-16">
      <div className="flex flex-col items-center gap-8 w-full  border-b border-gray-400/50">
        <div className=" flex w-full flex-col items-center">
          <p className="text-[36px] font-bold">Application Process</p>
          <p className="text-gray-500"> Simple steps to join our team</p>
        </div>
        <div className="w-full grid md:grid-cols-4 my-10">
          {recruitmentProcess?.map((one, ind) => {
            return (
              <div key={ind} className="flex flex-col items-center gap-2 ">
                <div className="w-14 h-14 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center">
                  {"0" + (ind + 1)}
                </div>
                <p className="font-semibold text-[18px]">{one?.title}</p>
                <p className="text-center text-gray-500">{one?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-[70%] items-center gap-10 justify-center mt-10">
        <div className="text-center ">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-600 mb-3">
            Join Our Mission
          </h1>
          <p className="text-gray-500">
            Fill out the form below and start your next chapter with us.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white p-8 md:p-12 rounded-3xl  shadow-xl flex flex-col gap-8"
        >
          {/* Row 1: Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col">
              <label
                htmlFor="first_name"
                className="text-gray-700 mb-2 text-sm font-semibold ml-1"
              >
                First Name
              </label>
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
              {errors.first_name && (
                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="last_name"
                className="text-gray-700 mb-2 text-sm font-semibold ml-1"
              >
                Last Name
              </label>
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
              {errors.last_name && (
                <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
              )}
            </div>
          </div>

          {/* Row 2: Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 mb-2 text-sm font-semibold ml-1"
              >
                Email Address
              </label>
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
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Phone no</label>
              <PhoneInputComponent
                country={"in"}
                value={applicantData.phone}
                onChange={(phone) => {

                  setApplicantData((prev) => ({

                    ...prev,
                    phone: "+" + phone, // ✅ ADD +
                  }))
                }
                }
                inputClass="!w-full !py-3 !pl-14 !rounded-xl"
                containerClass="w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Row 3: Position Select */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="position"
              className="text-gray-700 mb-2 text-sm font-semibold ml-1"
            >
              Position Applied For
            </label>
            <input
              type="text"
              value={job?.title || ""}
              readOnly
              className="border border-gray-200 rounded-xl p-3"
            />
          </div>

          {/* Row 4: File Upload */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="resume"
              className="text-gray-700 mb-2 text-sm font-semibold ml-1"
            >
              Upload Resume (PDF,DOCX only)
            </label>
            <div className="relative group">
              <input
                accept=".pdf,.docx,.doc"
                required
                type="file"
                id="resume"
                name="resume"
                onChange={(e) => setFile(e.target.files[0])}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              {errors.resume && (
                <p className="text-red-500 text-sm mt-2">{errors.resume}</p>
              )}
              <div className="border-2 border-dashed border-gray-200 group-hover:border-sky-400 group-hover:bg-sky-50 rounded-2xl p-8 transition-all flex flex-col items-center justify-center gap-2">
                <Upload className="w-8 h-8 text-gray-400 group-hover:text-sky-500" />
                <p className="text-sm text-gray-500">
                  {file ? (
                    <span className="text-sky-600 font-medium">
                      {file.name}
                    </span>
                  ) : (
                    "Click to upload or drag and drop"
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Row 5: Message */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="message"
              className="text-gray-700 mb-2 text-sm font-semibold ml-1"
            >
              Cover Letter / Message
            </label>
            <textarea
              name="message"
              id="message"
              value={applicantData.message}
              onChange={handleOnchange}
              placeholder="Tell us why you're a great fit..."
              className="border border-gray-200 rounded-xl p-3 h-32 resize-none focus:outline-none focus:ring-4 focus:ring-sky-50 focus:border-sky-400 transition-all"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {submitError && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-center">
              {submitError}
            </div>
          )}

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
    </div>
  );
}
export default ApplicationForm;
