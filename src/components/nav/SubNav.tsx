import Link from "next/link";
import React from "react";
import "./SubNav.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSchool,
  FaMapMarkerAlt,
} from "react-icons/fa";

const SubNav = () => {
  return (
    <div className="w-full hidden md:block bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-4/5 py-3 px-4 flex items-center justify-between">
            {/* Left: School Info */}
            <div className="flex items-center justify-between space-x-4">
              <div className="flex items-center space-x-2">
                <FaSchool className="text-gray-600 dark:text-gray-300" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Kutubpur High School
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-gray-600 dark:text-gray-300" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Kutubpur, Bogura, Bangladesh
                </span>
              </div>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center space-x-4">
              <Link
                aria-label="Facebook"
                href="https://facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaFacebook className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" />
              </Link>
              <Link
                aria-label="Twitter"
                href="https://twitter.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaTwitter className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300" />
              </Link>
              <Link
                aria-label="Instagram"
                href="https://instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Notice Section with Professional Marquee */}
        <div className="relative overflow-hidden bg-gradient-to-r rounded-t-md ">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative">
            <div className="flex items-center py-2 px-4">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20  backdrop-blur-sm">
                  📢 NOTICES
                </span>
              </div>
              <div className="flex-1 overflow-hidden">
                <div className="marquee-container">
                  <div className="marquee-content">
                    <span className="marquee-item">
                      🎓 Admission form distribution starts from 5th August 2025
                      - Visit office between 9 AM to 4 PM
                    </span>
                    <span className="marquee-item">
                      📊 HSC Exam results will be published on 10th August 2025
                      at 2:00 PM
                    </span>
                    <span className="marquee-item">
                      🎭 Annual cultural program will be held on 25th August
                      2025
                    </span>
                    <span className="marquee-item">
                      📚 New academic session 2025-26 starts from 1st September
                      2025
                    </span>
                    <span className="marquee-item">
                      🏆 Our students won 1st prize in District Science Fair
                      2025
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 ml-4 mb-1 ">
                <Link
                  href="/notices"
                  className="text-xs transition-colors px-2 py-1 bg-blue-300 rounded-4xl"
                >
                  View All →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
