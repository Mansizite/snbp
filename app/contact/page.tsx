import React from "react";
import "/styles/globals.css";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 animate-pageFadeIn transition-opacity duration-1000">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-primary mb-8 animate-fadeIn delay-100 transition-opacity duration-1000">
        Contact Us
      </h1>

      {/* Card Layout */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fadeIn delay-200 transition-opacity duration-1000">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Address, Email, Contact Numbers */}
          <div className="animate-fadeIn delay-300 transition-opacity duration-1000">
            <div className="space-y-6">
              {/* Address Section */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Address:</h3>
                <p className="text-lg text-gray-800">
                  SNBP International School, Manjri
                  <br />
                  126/2A Manjri-Keshavnagar,
                  <br />
                  Near Shivkrushshn, Mangal Karyalay,
                  <br />
                  Manjri, Pune - 36
                </p>
              </div>

              {/* Email Section */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Email:</h3>
                <p className="text-lg text-gray-800">
                  <a
                    href="mailto:snbpskeshavnagar@gmail.com"
                    className="text-primary hover:text-secondary transition-all"
                  >
                    snbpskeshavnagar@gmail.com
                  </a>
                </p>
              </div>

              {/* Contact Numbers Section */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Contact Numbers:</h3>
                <ul className="text-lg text-gray-800 space-y-2">
                  <li>
                    <strong>Office Contact:</strong> 8446534553
                  </li>
                  <li>
                    <strong>Director Contact:</strong> 8888398035 / 8888308035
                  </li>
                  <li>
                    <strong>Administrative Contact:</strong> 9767432665
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section: School Timings */}
          <div className="animate-fadeIn delay-400 transition-opacity duration-1000">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">School & Office Timings:</h3>

              {/* School Timing */}
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">School Timing:</h4>
                <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                  <li>
                    <strong>Pre Primary, Play Group:</strong> 9:30 am - 12:00 pm
                  </li>
                  <li>
                    <strong>Nursery:</strong> 9:00 am - 12:30 pm
                  </li>
                  <li>
                    <strong>LKG/UKG:</strong> 9:00 am - 1:00 pm
                  </li>
                  <li>
                    <strong>Primary (I-X):</strong> 9:00 am - 3:10 pm
                  </li>
                </ul>
              </div>

              {/* Office Timings */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Office Timing:</h4>
                <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                  <li>10:00 am - 12:00 pm</li>
                  <li>2:00 pm - 3:30 pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 animate-fadeIn delay-500 transition-opacity duration-1000">
          <h2 className="text-3xl font-semibold text-center text-primary mb-6">
            Find Us On The Map
          </h2>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8593531136758!2d73.9534340749631!3d18.527045982567717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2377a1ac41f%3A0x7ebc7c78cab6014!2sSNBP%20School!5e1!3m2!1sen!2sin!4v1743591862391!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
