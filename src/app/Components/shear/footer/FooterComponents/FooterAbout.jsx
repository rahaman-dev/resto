import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const FooterAbout = () => {
  return (
    <section className="flex flex-col justify-start gap-5">
      <img src={"/logo.png"} alt="logo" className="w-[158px]" />
      <p className="text-muted text-justify text-[16px] leading-[30px]">
        Lorem ipsum dolor sit amet, elit. Aenean ligula eget dolor. Lorem ipsum
        dolor sit amet, consect to adipisicing elit. Ut enim ad minim veniam.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, quis
        us elit aboris nisi.
      </p>
      <div className="flex justify-start items-center gap-3">
        <a
          href="#"
          className="p-2 bg-[#3b5999] text-white hover:bg-darkBg duration-300 group"
        >
          <BiLogoFacebook
            size={20}
            className="bg-[#3b5999] group-hover:bg-darkBg duration-300"
          />
        </a>
        <a
          href="#"
          className="p-2 bg-[#55acee] text-white hover:bg-darkBg duration-300 group"
        >
          <BsTwitter
            size={20}
            className="bg-[#55acee] group-hover:bg-darkBg duration-300"
          />
        </a>
        <a
          href="#"
          className="p-2 bg-[#e4405f] text-white hover:bg-darkBg duration-300 group"
        >
          <BsInstagram
            size={20}
            className="bg-[#e4405f] group-hover:bg-darkBg duration-300"
          />
        </a>
        <a
          href="#"
          className="p-2 bg-[#0077B5] text-white hover:bg-darkBg duration-300 group"
        >
          <BiLogoLinkedin
            size={20}
            className="bg-[#0077B5] group-hover:bg-darkBg duration-300"
          />
        </a>
      </div>
    </section>
  );
};

export default FooterAbout;
