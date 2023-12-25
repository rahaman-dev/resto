import Link from "next/link";

const FooterCol = ({ title, links }) => {
  return (
    <section>
      <div className="relative">
        <h1 className="font-Themify text-[24px] font-semibold text-white">
          {title}
        </h1>
        <div className="bottom before:w-[70px] before:border-[1.5px] before:top-3"></div>
      </div>
      <div className="mt-10">
        <div className="flex flex-col gap-4">
          {links.map((item, idx) => (
            <Link key={idx} href={`${item.link}`} className="footer-menu">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterCol;
