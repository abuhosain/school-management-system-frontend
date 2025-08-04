import Link from "next/link";
import {
  School,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Bell,
} from "lucide-react";
import Image from "next/image";
import "./SubNav.css";
import logo from "@/assets/logo/azizul.jpg";

const SubNav = () => {
  return (
    <div className="w-full bg-slate-800 text-white">
      {/* Top Header Section */}

      {/* Main Header Section */}
      <div className="bg-slate-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* School Logo */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <Image
                  src={logo}
                  alt="School Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* School Name and Info */}
            <div className="flex-1 text-center px-8">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
                সরকারি আজিজুল হক কলেজ,বগুড়া
              </h1>
              <h2 className="text-lg md:text-xl text-slate-200 mb-1">
                Govt Azizul Haque College, Bogura
              </h2>
              <p className="text-sm text-slate-300">College Code: 119246</p>
            </div>

            {/* Contact Info and Social */}
            <div className="flex-shrink-0 text-right">
              <div className="flex flex-col space-y-2 mb-3">
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <School className="w-4 h-4" />
                  <span>Est. 1965</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <MapPin className="w-4 h-4" />
                  <span>Bogura, Bangladesh</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  aria-label="Facebook"
                  href="https://facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  aria-label="Twitter"
                  href="https://twitter.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-slate-300 hover:text-blue-300 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  aria-label="Instagram"
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Section with Professional Marquee */}
      <div className="notice-section">
        <div className="container mx-auto">
          <div className="flex items-center py-3 px-4">
            <div className="flex-shrink-0 mr-4">
              <span className="notice-badge">📢 NOTICES</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="marquee-container">
                <div className="marquee-content">
                  <span className="marquee-item">
                    🎓 আজিজুল হক কলেজে ভর্তির আবেদন শুরু ৫ আগস্ট ২০২৫ থেকে -
                    অফিস সময় সকাল ৯টা থেকে বিকাল ৪টা
                  </span>
                  <span className="marquee-item">
                    📊 HSC পরীক্ষার ফলাফল প্রকাশ হবে ১০ আগস্ট ২০২৫ দুপুর ২টায়
                  </span>
                  <span className="marquee-item">
                    🎭 বার্ষিক সাংস্কৃতিক অনুষ্ঠান অনুষ্ঠিত হবে ২৫ আগস্ট ২০২৫
                  </span>
                  <span className="marquee-item">
                    📚 নতুন শিক্ষাবর্ষ ২০২৫-২৬ শুরু হবে ১ সেপ্টেম্বর ২০২৫ থেকে
                  </span>
                  <span className="marquee-item">
                    🏆 আমাদের ছাত্রছাত্রীরা জেলা বিজ্ঞান মেলা ২০২৫ এ প্রথম
                    পুরস্কার জিতেছে
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 ml-4">
              <Link href="/notices" className="view-all-btn">
                View All →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
