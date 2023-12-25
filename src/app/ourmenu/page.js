import React from "react";
import CoverBackground from "../Components/SmallComponents/CoverBackground";
import { Center } from "../Components/SmallComponents/Center";
import { VerticalCard } from "./OurMenuComponents/VerticalCard";

export default function OurMenu() {
  return (
    <div className="overflow-hidden">
      <CoverBackground
        background={"ourMenuBackground"}
        title={"MORE FLAVOR FOR LESS"}
        heading={"Our Menu"}
        para={
          "When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat"
        }
        leftCornerImage={"/contact-left-covert.png"}
        rightCornerImage={"/contact-right-cover.png"}
      />

      {/* Drink */}
      <Center
        heading={"Drinks"}
        para={
          "Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam. Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam."
        }
      />
      <div className="flex items-center justify-center flex-wrap gap-8">
        <VerticalCard
          img={"/drink1.jpeg"}
          name={"Dark Coffee"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
          rate={"1.50"}
          aos={"fade-right"}
        />
        <VerticalCard
          img={"/drink2.jpeg"}
          name={"Espresso Martini"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
          rate={"3.50"}
          aos={"fade-left"}
        />
        <VerticalCard
          img={"/drink3.jpeg"}
          name={"Coffee Beverage"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
          rate={"7.50"}
          aos={"fade-left"}
        />
        <VerticalCard
          img={"/drink4.jpeg"}
          name={"Cold Americano"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
          rate={"10.50"}
          aos={"fade-right"}
        />

        {/* Desserts */}
        <Center
          heading={"Desserts"}
          para={
            "Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam"
          }
        />
        <div className="flex items-center justify-center flex-wrap gap-8">
          <VerticalCard
            img={"/Desserts1.jpeg"}
            name={"Bacon & Eggs"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            rate={"1.50"}
            aos={"fade-right"}
          />
          <VerticalCard
            img={"/Desserts2.jpeg"}
            name={"Fruit Salad"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            rate={"3.50"}
            aos={"fade-left"}
          />
          <VerticalCard
            img={"/Desserts3.jpeg"}
            name={"Burger"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            rate={"7.50"}
            aos={"fade-left"}
          />
          <VerticalCard
            img={"/Desserts4.jpeg"}
            name={"Cack"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            rate={"10.50"}
            aos={"fade-right"}
          />
        </div>

        {/* Dishes */}
        <Center
          heading={"Dishes"}
          para={
            "Porro eveniet, autem ipsam corrupti consectetur cum. Repudiandae dignissimos fugiat sit nam"
          }
        />
        <div className="flex items-center justify-center flex-wrap gap-8">
          <VerticalCard
            img={"/Desserts1.jpeg"}
            name={"Bacon & Eggs"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            rate={"1.50"}
            aos={"fade-right"}
          />
          <VerticalCard
            img={"/Desserts2.jpeg"}
            name={"Fruit Salad"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            rate={"3.50"}
            aos={"fade-left"}
          />
          <VerticalCard
            img={"/Desserts3.jpeg"}
            name={"Burger"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            rate={"7.50"}
            aos={"fade-left"}
          />
          <VerticalCard
            img={"/Desserts4.jpeg"}
            name={"Cack"}
            description={
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
            rate={"10.50"}
            aos={"fade-right"}
          />
        </div>
      </div>
    </div>
  );
}
