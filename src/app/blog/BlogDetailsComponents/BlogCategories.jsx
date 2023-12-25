import { FiArrowUpRight } from "react-icons/fi";

const categories = [
  {
    title: "Daily Menu",
    border: true,
  },
  {
    title: "Food & Drinks",
    border: true,
  },
  {
    title: "Healthy Food",
    border: true,
  },
  {
    title: "Recipes",
    border: true,
  },
  {
    title: "Starters",
    border: false,
  },
];

const BlogCategories = () => {
  return (
    <section className="mt-10 w-full p-[30px] bg-lightBg">
      <div className="relative">
        <h1 className="font-Themify text-[24px] font-semibold text-white">
          Categories
        </h1>
        <div className="bottom before:w-[70px] before:border-[1.5px] before:top-3"></div>
      </div>
      <section className="mt-10 flex flex-col justify-start items-start gap-3">
        {categories?.map((category, idx) => (
          <div
            key={idx}
            className={`w-full flex justify-between gap-4 pb-2 ${
              category?.border
                ? "border-b border-dashed border-[#ffffff1a]"
                : ""
            }`}
          >
            <div className="text-white flex justify-start items-center gap-3">
              <FiArrowUpRight size={20} className="text-[#c59d5f]" />
              <h4 className="text-[16px] font-[600] mb-[5px] hover:text-[#c59d5f] cursor-pointer duration-300">
                {category?.title}
              </h4>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default BlogCategories;
