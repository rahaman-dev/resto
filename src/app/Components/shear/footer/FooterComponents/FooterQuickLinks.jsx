import FooterCol from "./FooterCol";

const quickLinks = [
  {
    link: "/",
    name: " About Us",
  },
  {
    link: "/",
    name: "Testimonials",
  },
  {
    link: "/",
    name: "Our Team",
  },
  {
    link: "/",
    name: "Blog",
  },
  {
    link: "/",
    name: "Contact Us",
  },
];

const FooterQuickLinks = () => {
  return <FooterCol title={"Quick Links"} links={quickLinks} />;
};

export default FooterQuickLinks;
