import Image from "next/image";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import "./about-section.css";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container mx-auto px-4 py-16">
        <div className="about-container">
          {/* Left Side - Head Teacher Profile */}
          <div className="head-teacher-profile">
            <div className="profile-card">
              <div className="profile-image-wrapper">
                <Image
                  src="https://res.cloudinary.com/djqyb52xi/image/upload/v1734462846/lrad0lwlm3e-1734462846396-file-hosain.png"
                  alt="Head Teacher"
                  width={250}
                  height={300}
                  className="profile-image"
                />
                <div className="profile-badge">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              <div className="profile-info">
                <h3 className="profile-name">প্রফেসর মোঃ আব্দুল করিম</h3>
                <p className="profile-role">অধ্যক্ষ (Principal)</p>
                <p className="profile-qualification">M.A, M.Ed, Ph.D</p>

                <div className="profile-message">
                  <blockquote>
                    শিক্ষাই জাতির মেরুদণ্ড। আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীকে
                    দক্ষ ও নৈতিক মানুষ হিসেবে গড়ে তোলা।
                  </blockquote>
                </div>

                <div className="profile-contact">
                  <div className="contact-item">
                    <span className="contact-label">অভিজ্ঞতা:</span>
                    <span className="contact-value">২৫+ বছর</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">যোগদান:</span>
                    <span className="contact-value">জানুয়ারি ২০১৮</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - School About */}
          <div className="school-about">
            <div className="about-header">
              <h2 className="about-title">আমাদের সম্পর্কে</h2>
              <h3 className="about-title-en">About Our Institution</h3>
              <div className="title-underline"></div>
            </div>

            <div className="about-content">
              <p className="about-description">
                সরকারি আজিজুল হক কলেজ ১৯৬৫ সালে প্রতিষ্ঠিত বগুড়া জেলার একটি
                অগ্রণী শিক্ষা প্রতিষ্ঠান। গত ৫৮ বছর ধরে আমরা গুণগত শিক্ষা
                প্রদানের মাধ্যমে হাজারো শিক্ষার্থীর স্বপ্ন পূরণে সহায়তা করেছি।
              </p>

              {/* Stats */}
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-icon">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">৩০০০+</span>
                    <span className="stat-label">শিক্ষার্থী</span>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">১২০+</span>
                    <span className="stat-label">শিক্ষক</span>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">৫৮+</span>
                    <span className="stat-label">বছরের ঐতিহ্য</span>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-icon">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="stat-info">
                    <span className="stat-number">৯৮%</span>
                    <span className="stat-label">পাসের হার</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="about-features">
                <h4 className="features-title">আমাদের বিশেষত্ব</h4>
                <ul className="features-list">
                  <li>আধুনিক শিক্ষা পদ্ধতি ও প্রযুক্তি</li>
                  <li>অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী</li>
                  <li>সমৃদ্ধ গ্রন্থাগার ও গবেষণাগার</li>
                  <li>খেলাধুলা ও সাংস্কৃতিক কার্যক্রম</li>
                  <li>বৃত্তি ও আর্থিক সহায়তা</li>
                </ul>
              </div>

              <div className="about-cta">
                <Link href={"/about"}>
                  <button className="cta-button primary">আরও জানুন</button>
                </Link>
                <Link href={"/contact"}>
                  <button className="cta-button primary">যোগাযোগ করুন</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
