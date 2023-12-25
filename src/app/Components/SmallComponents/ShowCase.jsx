"use client";
import React, { useEffect } from "react";
import Aos from "aos";

const ShowCase = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full">
      <div className="text-white  text-center md:my-24 my-14 px-5 md:px-0">
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="uppercase light-font tracking-widest text-xl mb-3"
        >
          follow alone
        </h2>
        <div className="inline-flex gap-2 justify-between items-center ">
          <img
            src={"/small-wave.png"}
            alt=""
            className=" h-[15px] w-full hidden md:block"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
            className="md:text-7xl text-5xl font-semibold"
          >
            @Wilma
          </h1>
          <img
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={"/small-wave.png"}
            alt=""
            className="
            h-[15px]  w-full hidden md:block
          "
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="grid px-7 md:px-0 md:grid-cols-9 grid-cols-1 gap-8 md:max-w-6xl w-full mx-auto showcase"
      >
        <img
          src={"/archive-img-1.jpg"}
          className="h-[345px] rounded-md w-full md:col-span-3"
        />
        <img
          src={"/archive-img-2.jpg"}
          className="h-[345px] rounded-md w-full md:col-span-4"
        />
        <img
          src={"/archive-img-3.jpg"}
          className="h-[345px] rounded-md w-full md:col-span-2"
        />
        <img
          src={"/archive-img-4.jpg"}
          className="h-[345px] rounded-md w-full md:col-span-4"
        />
        <img
          src={"/archive-img-5.jpg"}
          className="h-[345px] rounded-md w-full md:col-span-2"
        />
        <img
          src={"/archive-img-6.jpg"}
          className="h-[345px] rounded-md w-full md:col-span-3"
        />
      </div>
    </div>
  );
};

export default ShowCase;
