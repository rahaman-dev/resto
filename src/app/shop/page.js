import React from "react";
import CoverBackground from "../Components/SmallComponents/CoverBackground";
import RestaurantBookingCard from "../Components/SmallComponents/RestaurantBookingCard";

export default function Shop() {
  return (
    <div>
      <CoverBackground
        background={"shopBackground"}
        title={"MORE FLAVOR FOR LESS"}
        heading={"Shop"}
        para={
          "When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat"
        }
        leftCornerImage={"/contact-left-covert.png"}
        rightCornerImage={"/contact-right-cover.png"}
      />
      <RestaurantBookingCard />
    </div>
  );
}
