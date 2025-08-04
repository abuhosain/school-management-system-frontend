import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  GraduationCap,
  Heart,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Notices", href: "/notices" },
    { name: "Contact", href: "/contact" },
  ];

  const academicLinks = [
    { name: "Science", href: "/academics/science" },
    { name: "Business Studies", href: "/academics/business" },
    { name: "Humanities", href: "/academics/humanities" },
    { name: "Results", href: "/results" },
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* School Information */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Azizul Haque College
                  </h3>
                  <p className="text-sm text-slate-300">Govt. Institution</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Committed to providing quality education since 1965. Our goal is
                to develop every student as skilled and ethical human beings.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Departments
              </h3>
              <ul className="space-y-2">
                {academicLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Info
              </h3>

              <div className="space-y-3">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-300">
                      Kutubpur, Bogura-5800
                    </p>
                    <p className="text-sm text-slate-300">Bangladesh</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-300">+880 1712-345678</p>
                    <p className="text-sm text-slate-300">+880 51-62345</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-300">
                      info@azizulhaquecollege.edu.bd
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-slate-300">
                      Sun - Thu: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  <Link
                    href="https://facebook.com"
                    className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Facebook className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </Link>
                  <Link
                    href="https://youtube.com"
                    className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
                  >
                    <Youtube className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-300">
                © {currentYear} Govt Azizul Haque College. All rights reserved.
              </p>
            </div>

            {/* Powered By */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-slate-400">Powered by</span>
              <a target="_blank" rel="noopener noreferrer" href="https://brantatech.com/">
                <div className="flex items-center space-x-2 bg-slate-700 px-3 py-2 rounded-lg">
                  <Image
                    src="https://res.cloudinary.com/djqyb52xi/image/upload/v1753907098/1z0uiinqum-1753907096790-file-branta.jpg"
                    alt="Branta Tech"
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  <span className="text-sm font-semibold text-white">
                    Branta
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
