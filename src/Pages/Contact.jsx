import { useState } from "react";
import contactBannerImg from "../assets/contact-banner.png";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);

    let error = "";

    if (name === "fullName") {
      if (!value.trim()) {
        error = "Full name is required";
      } else if (value.trim().split(" ").length < 2) {
        error = "Enter full name (first & last)";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(value)
      ) {
        error = "Enter valid email ending with .com";
      }
    }

    if (name === "phone") {
      if (!value.trim()) {
        error = "Phone number is required";
      } else if (!/^\d+$/.test(value)) {
        error = "Only numbers are allowed";
      } else if (value.length !== 10) {
        error = "Enter 10 digit phone number";
      } else if (/^(\d)\1{9}$/.test(value)) {
        error = "Enter a valid phone number";
      }
    }

    if (name === "company") {
      if (!value.trim()) {
        error = "Company name is required";
      }
    }

    if (name === "service") {
      if (!value) {
        error = "Please select a service";
      }
    }

    if (name === "message") {
      if (!value.trim()) {
        error = "Message is required";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "Enter full name (first & last)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/.test(formData.email)
    ) {
      newErrors.email = "Enter valid email ending with .com";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Only numbers are allowed";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Enter 10 digit phone number";
    } else if (/^(\d)\1{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.countryCode + formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
    };

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await fetch(
          "http://localhost:5000/api/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await res.json();

        if (data.success) {
          setShowPopup(true);

          setFormData({
            fullName: "",
            email: "",
            countryCode: "+91",
            phone: "",
            company: "",
            service: "",
            message: "",
          });

          setErrors({});
        } else {
          alert("Submission failed");
        }
      } catch (err) {
        console.error(err);
        alert("Server error");
      }
    }

  };

  return (
    <div className="contact-container">

      <section className="contact-banner"
        style={{ backgroundImage: `url(${contactBannerImg})` }}
      >
        <div className="contact-banner-overlay">
          <h1>Contact Us</h1>
          <p>
            Have a question or want to connect with us? Fill out the form below
            and our team will get back to you.
          </p>
        </div>
      </section>

      <div className="container">

        <section className="contact-quick">
          <a href="tel:+13322871906" className="quick-card quick-card-link">
            <span>📞 Speak to our team</span>
            <p>+1 332 287 1906</p>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@workhance.in"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-card quick-card-link"
          >
            <span>✉️ Drop us an email</span>
            <p>info@workhance.in</p>
          </a>

          <div className="quick-card">
            <span>⏱️ Response Time</span>
            <p>Within 24 Hours</p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
                {errors.fullName && (
                  <span className="form-error">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <span className="form-error">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <div className="phone-input-group">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="country-code-select"
                  >
                    <option value="+91">India (+91)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+971">UAE (+971)</option>
                    <option value="+81">Japan (+81)</option>
                    <option value="+49">Germany (+49)</option>
                    <option value="+33">France (+33)</option>
                    <option value="+39">Italy (+39)</option>
                    <option value="+34">Spain (+34)</option>
                    <option value="+65">Singapore (+65)</option>
                    <option value="+60">Malaysia (+60)</option>
                    <option value="+966">Saudi Arabia (+966)</option>
                    <option value="+880">Bangladesh (+880)</option>
                    <option value="+94">Sri Lanka (+94)</option>
                    <option value="+977">Nepal (+977)</option>
                    <option value="+7">Russia (+7)</option>
                    <option value="+27">South Africa (+27)</option>
                  </select>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                {errors.phone && (
                  <span className="form-error">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  required
                />
                {errors.company && (
                  <span className="form-error">{errors.company}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Service Interest</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="it">IT Services</option>
                <option value="rpo">RPO & Staffing</option>
                <option value="finance">US Finance & Accounting</option>
                <option value="marketing">Digital Marketing</option>
              </select>

              {errors.service && (
                <span className="form-error">{errors.service}</span>
              )}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements"
                required
              ></textarea>
              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
            </div>

            <div className="form-submit">
              <button type="submit" className="primary-btn">
                Submit
              </button>
            </div>
          </form>
        </section>

        {/* Locations */}
        <section className="locations-section">
          <h2>Our Offices</h2>

          {/* New York */}
          <div className="location-card">
            <div className="location-details">
              <h3>📍 New York Headquarters</h3>
              <p>
                <strong>Address:</strong> 575 5th Avenue, New York, New York 10017
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+13322871906" className="contact-link">
                  +1 332 287 1906
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@workhance.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  info@workhance.in
                </a>
              </p>
            </div>

            <div className="location-map">
              <iframe
                title="NY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2600429818244!2d-73.98065082524364!3d40.7563049349042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe65ffe2b1%3A0x29af08ed9a21ff64!2s575%205th%20Ave%2C%20New%20York%2C%20NY%2010017%2C%20USA!5e0!3m2!1sen!2sin!4v1775419290135!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Noida */}
          <div className="location-card">
            <div className="location-details">
              <h3>📍 Noida Office</h3>
              <p>
                <strong>Address:</strong> I-Thum Tower, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201309
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+13322871906" className="contact-link">
                  +1 332 287 1906
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@workhance.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  info@workhance.in
                </a>
              </p>
            </div>

            <div className="location-map">
              <iframe
                title="Noida"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.10641159052!2d77.36980057409403!3d28.626572684353853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550adec536d%3A0xfc9a748d99d8bd07!2sITHUM%20TOWER%2C%20GALAXY%20BUSINESS%20PARK%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1775419996410!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Jabalpur */}
          <div className="location-card">
            <div className="location-details">
              <h3>📍 Jabalpur Office</h3>
              <p>
                <strong>Address:</strong> 1055, Behind Petrol Pump, Bilhari, Jabalpur, Madhya Pradesh 482020
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+13322871906" className="contact-link">
                  +1 332 287 1906
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@workhance.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  info@workhance.in
                </a>
              </p>
            </div>

            <div className="location-map">
              <iframe
                title="Jabalpur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.4701111168!2d79.94722355541995!3d23.129378999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ac4b232112f1%3A0xd5c1c844f10f863d!2sIndianOil!5e0!3m2!1sen!2sin!4v1775420458297!5m2!1sen!2sin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </section>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="success-popup-overlay">
          <div className="success-popup">
            <h3>Form Submitted</h3>
            <p>Your message has been submitted successfully.</p>
            <button
              className="primary-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;