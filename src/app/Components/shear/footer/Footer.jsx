import OurServices from "@/app/Components/shear/footer/FooterComponents/FooterOurServices";
import QuickLinks from "@/app/Components/shear/footer/FooterComponents/FooterQuickLinks";
import FooterTop from "@/app/Components/shear/footer/FooterComponents/FooterTop";
import FooterAbout from "@/app/Components/shear/footer/FooterComponents/FooterAbout";
import FooterLatestPosts from "@/app/Components/shear/footer/FooterComponents/FooterLatestPosts";
import Container from "../../SmallComponents/Container";

export default function Footer() {
  return (
    <>
      <section className="bg-lightBg ">
        <Container>
          <section className="bg-cover w-full py-20 footer">
            <FooterTop />
            <section className="mt-16">
              <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr_2fr_2fr_3fr] gap-5 md:gap-10">
                <FooterAbout />
                <OurServices />
                <QuickLinks />
                <FooterLatestPosts />
              </section>
            </section>
          </section>
        </Container>
      </section>
      {/* copy right section  */}
      <section className="bg-[#0e1317] py-[26px]">
        <p className="text-center text-[16px] leading-[30px] text-muted">
          Copyrights © 2023 <span className="text-[#c59d5f]">Restaurt</span>.
          Designed by <span className="text-[#c59d5f]">Zozothemes</span>
        </p>
      </section>
    </>
  );
}
