/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsFolder2 } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";

const BlogHeading = () => {
  return (
    <section className="text-white">
      <h1 className="text-[50px] leading-[59px] font-bold font-Themify mb-4">
        Things to Know When Choosing Foods
      </h1>
      <div className="flex justify-start items-center gap-5 border-b border-[#a0abb446] pb-10">
        <div className="flex justify-start items-center gap-3">
          <img
            src={"/man.png"}
            alt="man"
            className="w-5 h-5 object-cover object-center rounded-full"
          />
          <Link href="#" className="menu-link text-muted text-[15px]">
            Restont
          </Link>
        </div>
        <div className="flex justify-start items-center gap-3">
          <CiClock2 size={20} className="text-[#c59d5f]" />
          <Link href="#" className="menu-link text-muted text-[15px]">
            April 19, 2022
          </Link>
        </div>
        <div className="flex justify-start items-center gap-3">
          <BsFolder2 size={20} className="text-[#c59d5f]" />
          <Link href="#" className="menu-link text-muted text-[15px]">
            Daily Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogHeading;
