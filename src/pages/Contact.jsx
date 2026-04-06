import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

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
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter 10 digit phone number";
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
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setShowPopup(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="contact-container">
      <div className="container">

        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-subtitle">
          Have a question or want to connect with us? Fill out the form below
          and our team will get back to you.
        </p>

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
                />
                {errors.email && (
                  <span className="form-error">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
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
              ></textarea>
              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
            </div>

            <button type="submit" className="primary-btn">
              Submit
            </button>

          </form>
        </section>

        {/* Locations */}
        <section className="locations-section">
          <h2>Our Offices</h2>

          {/* New York */}
          <div className="location-card">
            <div className="location-details">
              <h3>New York Headquarters</h3>
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
              <h3>Noida Office</h3>
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
              <h3>Jabalpur Office</h3>
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