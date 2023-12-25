import CoverBackground from "../Components/SmallComponents/CoverBackground";
import ContactDetails from "./ContactComponents/ContactDetails";
import ContactForm from "./ContactComponents/ContactForm";
import ContactMapLocation from "./ContactComponents/ContactMapLocation";

const Contact = () => {
  return (
    <div>
      <CoverBackground
        background={"contactBackground"}
        title={"MORE FLAVOR FOR LESS"}
        heading={"Contact"}
        para={
          "When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat"
        }
        leftCornerImage={"/contact-left-covert.png"}
        rightCornerImage={"/contact-right-cover.png"}
      />
      <ContactDetails />
      <ContactMapLocation />
      <ContactForm />
    </div>
  );
};

export default Contact;
