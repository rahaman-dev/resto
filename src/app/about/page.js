import React from "react";
import InviteToRestaurant from "./InviteToRestaurant";
import ChooseUs from "./AboutComponents/ChooseUs";
import CoverBackground from "../Components/SmallComponents/CoverBackground";

const About = () => {
  return (
    <>
      <CoverBackground
        background={"aboutBackground"}
        title={"MORE FLAVOR FOR LESS"}
        heading={"About"}
        para={
          "When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat"
        }
        leftCornerImage={"/contact-left-covert.png"}
        rightCornerImage={"/contact-right-cover.png"}
      />
      <InviteToRestaurant />
      <ChooseUs />
    </>
  );
};

export default About;
