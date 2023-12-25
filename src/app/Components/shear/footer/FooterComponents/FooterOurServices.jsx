import FooterCol from "./FooterCol";

const ourServices = [
  {
    link: "/",
    name: "Fast Delivery",
  },
  {
    link: "/",
    name: "Vegan Cuisine",
  },
  {
    link: "/",
    name: "Fresh Products",
  },
  {
    link: "/",
    name: "Skilled Chefs",
  },
  {
    link: "/",
    name: "Great Coffee",
  },
];

const FooterOurServices = () => {
  return <FooterCol title={"Our Services"} links={ourServices} />;
};

export default FooterOurServices;
