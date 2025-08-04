import Link from "next/link";
import { Calendar, Clock, ArrowRight, Bell } from "lucide-react";
import "./NoticeSection.css";

// Mock data following your interface structure
const mockNotices = [
  {
    _id: "1",
    organization: "64f8a1b2c3d4e5f6a7b8c9d0",
    title: "HSC পরীক্ষার ফলাফল প্রকাশ",
    description:
      "২০২৫ সালের HSC পরীক্ষার ফলাফল আগামী ১০ আগস্ট দুপুর ২:০০ টায় প্রকাশিত হবে। সকল পরীক্ষার্থী নিজ নিজ রোল নম্বর দিয়ে ফলাফল দেখতে পারবেন।",
    image: "/images/hsc-result.jpg",
    date: "2025-08-05T10:00:00Z",
  },
  {
    _id: "2",
    organization: "64f8a1b2c3d4e5f6a7b8c9d0",
    title: "নতুন শিক্ষাবর্ষে ভর্তির আবেদন",
    description:
      "২০২৫-২৬ শিক্ষাবর্ষে একাদশ শ্রেণিতে ভর্তির জন্য অনলাইন আবেদন শুরু হয়েছে। আবেদনের শেষ তারিখ ২০ আগস্ট ২০২৫।",
    image: "/images/admission.jpg",
    date: "2025-08-03T09:00:00Z",
  },
  {
    _id: "3",
    organization: "64f8a1b2c3d4e5f6a7b8c9d0",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫",
    description:
      "আগামী ১৫-১৭ আগস্ট অনুষ্ঠিত হবে কলেজের বার্ষিক ক্রীড়া প্রতিযোগিতা। সকল শিক্ষার্থী অংশগ্রহণের জন্য নিবন্ধন করতে পারেন।",
    image: "/images/sports.jpg",
    date: "2025-08-02T08:30:00Z",
  },
  {
    _id: "4",
    organization: "64f8a1b2c3d4e5f6a7b8c9d0",
    title: "বিজ্ঞান মেলা ২০২৫ আয়োজন",
    description:
      "২৫ আগস্ট ২০২৫ তারিখে কলেজ প্রাঙ্গণে বিজ্ঞান মেলার আয়োজন করা হবে। আগ্রহী শিক্ষার্থীরা প্রকল্প জমা দিতে পারেন।",
    image: "/images/science-fair.jpg",
    date: "2025-08-01T11:00:00Z",
  },
  {
    _id: "5",
    organization: "64f8a1b2c3d4e5f6a7b8c9d0",
    title: "শিক্ষক দিবস উদযাপন",
    description:
      "৫ সেপ্টেম্বর শিক্ষক দিবস উপলক্ষে বিশেষ অনুষ্ঠানের আয়োজন করা হবে। সকল শিক্ষার্থী ও অভিভাবকদের উপস্থিতি কামনা করা হচ্ছে।",
    image: "/images/teachers-day.jpg",
    date: "2025-07-30T14:00:00Z",
  },
  {
    _id: "6",
    organization: "64f8a1b2c3d4e5f6a7b8c9d0",
    title: "নতুন শিক্ষাবর্ষে ভর্তির আবেদন",
    description:
      "২০২৫-২৬ শিক্ষাবর্ষে একাদশ শ্রেণিতে ভর্তির জন্য অনলাইন আবেদন শুরু হয়েছে। আবেদনের শেষ তারিখ ২০ আগস্ট ২০২৫।",
    image: "/images/admission.jpg",
    date: "2025-08-03T09:00:00Z",
  },
  {
    _id: "7",
    organization: "64f8a1b2c3d4e5f6a7b8c9d0",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫",
    description:
      "আগামী ১৫-১৭ আগস্ট অনুষ্ঠিত হবে কলেজের বার্ষিক ক্রীড়া প্রতিযোগিতা। সকল শিক্ষার্থী অংশগ্রহণের জন্য নিবন্ধন করতে পারেন।",
    image: "/images/sports.jpg",
    date: "2025-08-02T08:30:00Z",
  },
  {
    _id: "8",
    organization: "64f8a1b2c3d4e5f6a7b8c9d0",
    title: "বিজ্ঞান মেলা ২০২৫ আয়োজন",
    description:
      "২৫ আগস্ট ২০২৫ তারিখে কলেজ প্রাঙ্গণে বিজ্ঞান মেলার আয়োজন করা হবে। আগ্রহী শিক্ষার্থীরা প্রকল্প জমা দিতে পারেন।",
    image: "/images/science-fair.jpg",
    date: "2025-08-01T11:00:00Z",
  },
];

const NoticeSection = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("bn-BD", options);
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "১ দিন আগে";
    if (diffDays <= 7) return `${diffDays} দিন আগে`;
    if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} সপ্তাহ আগে`;
    return `${Math.ceil(diffDays / 30)} মাস আগে`;
  };

  return (
    <section className="notice-section">
      <div className="container mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="notice-header">
          <div className="header-content">
            <div className="header-icon">
              <Bell className="w-8 h-8" />
            </div>
            <div className="header-text">
              <h2 className="section-title">Latest Notices</h2>
            </div>
          </div>
          <Link href="/notices" className="view-all-link">
            সব নোটিশ দেখুন
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Notice Grid */}
        <div className="notice-grid">
          {mockNotices.slice(0, 8).map((notice, index) => (
            <div
              key={notice._id}
              className={`notice-card ${index === 0 ? "featured" : ""}`}
            >
              <div className="notice-content">
                {/* Date Badge */}
                <div className="notice-date">
                  <div className="date-badge">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(notice.date!)}</span>
                  </div>
                  <div className="time-ago">
                    <Clock className="w-3 h-3" />
                    <span>{getTimeAgo(notice.date!)}</span>
                  </div>
                </div>

                {/* Notice Title */}
                <h3 className="notice-title">{notice.title}</h3>

                {/* Notice Description */}
                <p className="notice-description">{notice.description}</p>

                {/* Read More Button */}
                <div className="notice-footer">
                  <Link
                    href={`/notices/${notice._id}`}
                    className="read-more-btn"
                  >
                    বিস্তারিত পড়ুন
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card Number */}
              <div className="card-number">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="notice-cta">
          <p className="cta-text">
            আরও নোটিশ ও আপডেটের জন্য আমাদের নোটিশ বোর্ড দেখুন
          </p>
          <Link href="/notices" className="cta-button">
            নোটিশ বোর্ড
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
