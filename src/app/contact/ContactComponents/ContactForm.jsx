import { Button } from "@/app/Components/SmallComponents/Button";

export const InputText = ({ labelName }) => {
  return (
    <div className="pb-4">
      <label className="text-md font-semibold" htmlFor={labelName}>
        {labelName}
      </label>
      <input
        type="text"
        name={labelName}
        className="form-input px-5 py-4 w-full rounded-lg border-2 border-white bg-transparent"
      />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="bg-[#0b1517]">
      <div className="lg:flex items-center justify-center py-20 px-12">
        <div className="py-5 lg:w-1/3">
          <h1 className="text-5xl font-semibold">Get in touch</h1>
          <p className="text-sm pt-5">
            If you have questions or comments, please get a hold of us in
            whichever way is most convenient. Ask away. There is no reasonable
            question that our team can not answer. <br /> <br />
            Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
            proident chillwave doop vlaborum. <br /> <br />
            Craft beer elit seitan exercitation, photo booth et 8-bit kale chips
            proident chillwave doop vlaborum.
          </p>
        </div>
        <div className="lg:w-1/2 w-full lg:px-10 py-5">
          <form>
            <InputText labelName={"name"} />
            <InputText labelName={"email"} />

            <div className="pb-3">
              <label className="text-md  font-semibold" htmlFor="message">
                Your message (optional)
              </label>
              <textarea
                cols="5"
                rows="3"
                name="message"
                className="form-input px-5 py-4 w-full rounded-lg border-2 border-white  bg-transparent"
              />
            </div>
            <Button buttonText={"Submit"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
