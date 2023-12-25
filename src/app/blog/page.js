import Container from "../Components/SmallComponents/Container";
import BlogBanner from "./BlogDetailsComponents/BlogBanner";
import Introduction from "./BlogDetailsComponents/BlogIntroduction";
import RightPart from "./BlogDetailsComponents/BlogRightSide";

const BlogsDetails = () => {
  return (
    <>
      <BlogBanner />
      <section className="py-[100px] w-full">
        <Container>
          <section className="w-full h-full flex flex-col lg:flex-row justify-between items-start gap-12">
            <section className="w-full lg:w-[67%]">
              <Introduction />
            </section>
            <section className="w-full lg:w-[33%]">
              <RightPart />
            </section>
          </section>
        </Container>
      </section>
    </>
  );
};

export default BlogsDetails;
