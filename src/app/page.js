import CoverBackground from "./Components/SmallComponents/CoverBackground";
import ReservationAbout from "./reservation/ReservationComponents/ReservationAbout";
import ReservationBanner from "./reservation/ReservationComponents/ReservationBanner";
import ReservationDetails from "./reservation/ReservationComponents/ReservationDetails";
import ReservationSpecial from "./reservation/ReservationComponents/ReservationSpecial";
import ReservationCover from "./reservation/ReservationComponents/reservationCover";

export default function page() {
  return (
    <div className="overflow-hidden">
      <CoverBackground
        background={"reservationBackground"}
        title={"MORE FLAVOR FOR LESS"}
        heading={"Reservation"}
        para={
          "When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat"
        }
        leftCornerImage={"/contact-left-covert.png"}
        rightCornerImage={"/contact-right-cover.png"}
      />
      <ReservationDetails />
      <ReservationBanner />
      <ReservationSpecial />
      <ReservationAbout />
    </div>
  );
}
