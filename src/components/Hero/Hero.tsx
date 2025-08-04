"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";
import "./HeroSection.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/yncSPsnR/Orange-Gradient-Web-Developer-Course-Facebook-Cover.png",
      title: "সরকারি আজিজুল হক কলেজ",
      subtitle: "শিক্ষার আলোয় আলোকিত ভবিষ্যৎ",
      description: "Excellence in Education Since 1965",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=1200",
      title: "আধুনিক শিক্ষা ব্যবস্থা",
      subtitle: "গুণগত শিক্ষার নিশ্চয়তা",
      description: "Modern Education for Bright Future",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=1200",
      title: "সমৃদ্ধ গ্রন্থাগার",
      subtitle: "জ্ঞানের ভান্ডার",
      description: "Rich Library Resources",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=600&width=1200",
      title: "বিজ্ঞান গবেষণাগার",
      subtitle: "হাতে-কলমে শিক্ষা",
      description: "Advanced Science Laboratories",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=600&width=1200",
      title: "ক্রীড়া ও সাংস্কৃতিক কার্যক্রম",
      subtitle: "সুস্থ দেহে সুস্থ মন",
      description: "Sports & Cultural Activities",
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="hero-container">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <div className="hero-image-wrapper">
              <Image
                src={slide?.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="hero-image"
                priority={index === 0}
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content">
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="hero-text">
                  <h1 className="hero-title">{slide.title}</h1>
                  <h2 className="hero-subtitle">{slide.subtitle}</h2>
                  <p className="hero-description">{slide.description}</p>
                  <div className="hero-buttons">
                    <button className="hero-btn primary">ভর্তি তথ্য</button>
                    <button className="hero-btn secondary">আরও জানুন</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="hero-controls">
        {/* Previous/Next Buttons */}
        <button className="hero-nav-btn prev" onClick={prevSlide}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="hero-nav-btn next" onClick={nextSlide}>
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Play/Pause Button */}
        <button className="hero-play-btn" onClick={togglePlayPause}>
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        {/* Slide Indicators */}
        <div className="hero-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            >
              <span className="indicator-number">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="hero-progress">
        <div
          className="hero-progress-bar"
          style={{
            animationDuration: isPlaying ? "5s" : "paused",
            animationPlayState: isPlaying ? "running" : "paused",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
