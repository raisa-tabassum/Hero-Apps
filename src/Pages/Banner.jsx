import React from "react";
import playStore from '../../public/assets/google-play.png'
import appStore from '../../public/assets/app-store.png'
import BannerImg from '../../public/assets/hero.png'

const Banner = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-20 text-center">
      <h1 className="text-7xl font-bold mb-6">
        We Build <span className="text-[#632EE3]">Productive </span>Apps
      </h1>
      <p className="mb-6 font-normal text-lg text-[#627382]">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="mb-6 font-semibold">
        <a href="https://play.google.com/store/apps?hl=en"
          target="_blank" className="btn mr-3 text-lg bg-transparent"><span><img className="w-6" src={playStore} /></span> Google Play</a>
        <a href="https://www.apple.com/app-store/"
          target="_blank" className="btn text-lg bg-transparent"><span><img className="w-6" src={appStore} /></span> App Store</a>
      </div>
      <img src={BannerImg} alt="" />
    </div>
  );
};

export default Banner;
