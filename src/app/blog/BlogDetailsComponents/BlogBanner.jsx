import Container from "@/app/Components/SmallComponents/Container";
import Link from "next/link";

const BlogBanner = () => {
  return (
    <section
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(/banner.jpg)` }}
    >
      <section className="h-[150px] md:h-[284px] md:pt-[174px] md:pb-20 flex justify-start items-center w-full bg-[#000000ad]">
        <Container className="text-white flex justify-start items-center gap-[5px]">
          <Link href="#" className="menu-link">
            Home
          </Link>
          <Link href="#" className="menu-link">
            Daily Menu
          </Link>
          <p className="font-base whitespace-pre-wrap">
            Things to Know When Choosing Foods
          </p>
        </Container>
      </section>
    </section>
  );
};

export default BlogBanner;
