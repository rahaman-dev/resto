import { CiClock2 } from "react-icons/ci";

const posts = [
  {
    title: "Things To Know When Choosing Foods",
    img: "https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2022/04/blog-img-80x80.jpg",
    date: "April 19, 2022",
    border: true,
  },
  {
    title: "Colour Spicy To Spring In Your Table",
    img: "https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/04/r-blog-10-1-1-80x80.jpg",
    date: "April 19, 2022",
    border: false,
  },
];

const FooterLatestPosts = () => {
  return (
    <section>
      <div className="relative">
        <h1 className="font-Themify text-[24px] font-semibold text-white">
          Latest Posts
        </h1>
        <div className="bottom before:w-[70px] before:border-[1.5px] before:top-3"></div>
      </div>
      <section className="mt-10 flex flex-col justify-start items-start gap-3">
        {posts?.map((post, idx) => (
          <div
            key={idx}
            className={`flex justify-between gap-4 pb-3 ${
              post?.border ? "border-b border-[#ffffff1a]" : ""
            }`}
          >
            <img
              src={post?.img}
              alt="firstPost"
              className="h-20 w-20 object-cover object-center"
            />
            <div className="text-white">
              <h4 className="text-[16px] font-[600] mb-[5px] hover:text-[#c59d5f] cursor-pointer duration-300">
                {post?.title}
              </h4>
              <div className="flex justify-start items-center gap-3">
                <CiClock2 size={18} className="text-[#c59d5f]" />
                <p className="text-muted text-[15px]">{post?.date}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default FooterLatestPosts;
