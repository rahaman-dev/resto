import { Center } from "@/app/Components/SmallComponents/Center";
import React from "react";

const Card = ({ img, title, para, aos }) => {
  return (
    <div
      className="lg:w-[350px] flex items-center justify-center flex-col gap-4 text-center p-5"
      data-aos={aos}
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
    >
      <img src={img} alt="" className="w-[70px]" />
      <h2 className="text-3xl">{title}</h2>
      <p>{para}</p>
    </div>
  );
};

export default function ChooseUs() {
  return (
    <>
      <Center
        heading={"Why people choose us?"}
        para={" Porro eveniet, autem ipsam vitae consequatur!"}
      />

      <div className="lg:flex items-center justify-center gap-5 flex-wrap">
        <Card
          img={"/Menu.png"}
          title={"Always Quality Beans"}
          para={
            "Dolor sit amet, consectetur adipisicing elit et molestias possimus"
          }
          aos={"fade-right"}
        />

        <Card
          img={"/barista.png"}
          title={"Menu for every taste"}
          para={
            "Dolor sit amet, consectetur adipisicing elit et molestias possimus"
          }
          aos={"zoom-out-down"}
        />
        <Card
          img={"/coffee.png"}
          title={"Experienced Barista"}
          para={
            "Dolor sit amet, consectetur adipisicing elit et molestias possimus"
          }
          aos={"fade-left"}
        />
      </div>
    </>
  );
}
