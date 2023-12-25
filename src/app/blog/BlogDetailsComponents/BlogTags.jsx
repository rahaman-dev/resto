const tags = ["daily", "desserts", "drinks", "food", "main", "recipes", "tips"];

const BlogTags = () => {
  return (
    <section className="mt-10 w-full p-[30px] bg-lightBg">
      <div className="relative">
        <h1 className="font-Themify text-[24px] font-semibold text-white">
          Tags
        </h1>
        <div className="bottom before:w-[70px] before:border-[1.5px] before:top-3"></div>
      </div>
      <section className="mt-10 flex flex-wrap justify-start items-start gap-3">
        {tags?.map((tag, index) => {
          return (
            <button key={index} className="tag">
              {tag}
            </button>
          );
        })}
      </section>
    </section>
  );
};

export default BlogTags;
