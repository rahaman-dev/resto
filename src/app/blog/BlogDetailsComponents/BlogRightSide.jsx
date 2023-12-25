import BlogCategories from "./BlogCategories";
import BlogLatestPosts from "./BlogLatestPosts";
import BlogSearchBox from "./BlogSearchBox";
import BlogTags from "./BlogTags";

const BlogRightSide = () => {
  return (
    <section className="w-full">
      <BlogSearchBox />
      <BlogLatestPosts />
      <BlogCategories />
      <BlogTags />
    </section>
  );
};

export default BlogRightSide;
