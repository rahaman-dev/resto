import { AiOutlineArrowRight } from "react-icons/ai";

const BlogSearchBox = () => {
  return (
    <section className="w-full bg-lightBg md:p-[30px] rounded-none relative">
      <div className="relative">
        <input
          type="text"
          className="w-full bg-darkBg text-white px-3 py-4 border  border-[#ffffff1a] outline-0 placeholder:text-[#b7b7b7] focus:border-btnBg duration-150"
          placeholder="Search for..."
        />
        <button className="absolute flex justify-center items-center bg-btnBg text-white px-3 py-[11px] top-2 right-2 hover:bg-lightBg duration-300">
          <AiOutlineArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default BlogSearchBox;
