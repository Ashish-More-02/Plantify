import React from "react";

const Footer = () => {
  return (
    <div className="bg-[rgb(18,53,36)] sm:h-96 h-auto text-white w-full flex flex-col justify-evenly relative p-4 sm:p-10">
      {/* Main Footer Content */}
      <div className="flex flex-col sm:flex-row justify-between items-start">
        {/* Contact Info */}
        <div className="w-full sm:w-[40%] mb-6 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Info</h1>
          <div className="text-sm sm:text-base">
            <p>Address: 🌎 123 Green Street, Plant City, Earth 🌍</p>
            <p>Email: 📧 support@plantify.com</p>
            <p>Phone: 📞 +1-800-PLANTIFY</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full sm:w-[60%] flex flex-wrap justify-between gap-6">
          {/* Social Media Links */}
          <div>
            <h1 className="font-semibold mb-2 text-lg">Social Media Links</h1>
            <ul className="list-disc ml-4">
              <li>🌐 Instagram</li>
              <li>🌐 Facebook</li>
              <li>🌐 Twitter</li>
              <li>🌐 Pinterest</li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h1 className="font-semibold mb-2 text-lg">Company Info</h1>
            <ul className="list-disc ml-4">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h1 className="font-semibold mb-2 text-lg">Legal Information</h1>
            <ul className="list-disc ml-4">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Catchline */}
      <div className="text-center font-semibold text-lg sm:text-xl mt-6">
        🌿 "Bringing a little more green into your life, one plant at a time."
      </div>

      {/* Copyright */}
      <div className="text-center text-sm sm:text-lg mt-4 absolute bottom-1 mx-auto w-full">
        © 2025 Plantify. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
