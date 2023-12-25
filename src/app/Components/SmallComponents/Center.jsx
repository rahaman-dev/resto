export const Center = ({ heading, para }) => {
  return (
    <div className="flex items-center justify-center flex-col text-center">
      <div
        className="py-20 lg:w-[600px]"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <h2 className="mb-2 lg:text-5xl text-3xl text-center">{heading}</h2>
        <h2 className="text-1xl text-center ">{para}</h2>
      </div>
    </div>
  );
};
