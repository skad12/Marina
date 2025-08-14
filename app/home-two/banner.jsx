"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const bannerImages = [
    "/img/banner-custom-1.jpg",
    "/img/banner-custom-2.jpg",
    "/img/banner-custom-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bannerImages.length]);

  return (
    <div
      className="banner__three"
      style={{ backgroundImage: `url('/img/bg/banner-bg.jpg')` }}
    >
      <div className="container custom__container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 order-last order-lg-first">
            <div className="banner__three-title">
              <span className="subtitle__one">Hotel Booking Website</span>
              <h1>
                Book hotels online<span> Get 20% Off !</span>
              </h1>
              <Link className="theme-btn" href="/about">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 lg-mb-60">
            <div className="banner__three-right">
              <Image
                className="img__full"
                src={bannerImages[currentIndex]}
                alt="Featured hotel"
                width={900}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
