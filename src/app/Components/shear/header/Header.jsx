"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { FaInstagram, FaTripadvisor } from "react-icons/fa";

const navbar = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/about",
    text: "About",
  },
  {
    link: "/ourmenu",
    text: "Our Menu",
  },
  {
    link: "/contact",
    text: "Contact",
  },
  {
    link: "/shop",
    text: "Shop",
  },
  {
    link: "/blog",
    text: "Blogs",
  },
];

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolling(scrollY > 50);
  }, [scrollY]);

  const handleMenu = () => {
    setIsOpen(true);
  };

  return (
    <div
      className={`${
        isScrolling
          ? " fixed-navbar z-30  opacity-100 fixed text-white w-full pt-2 pb-2"
          : "z-30 opacity-100 fixed   text-white w-full  pt-8"
      } `}
    >
      <div className=" px-8 md:px-0  md:gap-0 flex justify-between items-center w-full md:max-w-6xl mx-auto">
        <div>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={"150"}
              height={"150"}
              className="md:h-[70] md:w-[150px] h-[60px] w-[130px]"
            />
          </Link>
        </div>

        <div className="hidden  md:flex justify-center items-center  gap-8 font-semibold text-base">
          {navbar.map((item) => (
            <>
              <Link href={`${item.link}`} className="block">
                {item.text}
              </Link>
            </>
          ))}
        </div>

        {/* responsive menu for small device */}
        <div
          className={`  ${
            isOpen ? "absolute right-0 top-0 smooth" : " hidden -right-80 top-0"
          } `}
        >
          <div className="md:hidden relative  font-semibold text-base bg-[#0b1517] flex flex-col gap-5 min-h-screen py-20 px-10">
            <p
              className="absolute right-10 top-10 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <RxCross1 size={24}></RxCross1>
            </p>
            {navbar.map((item) => (
              <>
                <Link href={`${item.link}`} className="block">
                  {item.text}
                </Link>
              </>
            ))}
            <button className="mt-20 bg-transparent border border-white font-bold px-20 py-4">
              Reservation
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 ">
          <Link href="https://www.linkedin.com/in/dev-rahaman" target="_blank">
            <FaLinkedinIn size={24}></FaLinkedinIn>
          </Link>
          <Link href="https://github.com/dev-rahaman" target="_blank">
            <FaGithub size={24}></FaGithub>
          </Link>
          <Link href="https://www.facebook.com/rahamandev" target="_blank">
            <FaFacebook size={24}></FaFacebook>
          </Link>
          <p className="md:hidden block cursor-pointer" onClick={handleMenu}>
            <HiMenuAlt4 size={24}></HiMenuAlt4>
          </p>
        </div>
      </div>
    </div>
  );
}
