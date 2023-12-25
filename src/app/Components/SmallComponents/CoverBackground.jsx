const CoverBackground = ({
  title,
  heading,
  para,
  leftCornerImage,
  rightCornerImage,
  background,
}) => {
  return (
    <>
      <div className={`${background} overflow-hidden relative w-full`}>
        <div className="h-full bg-zinc-950/20 px-5 md:px-0 text-white overflow-hidden">
          <div className="h-full flex flex-col justify-center items-center overflow-hidden">
            <h3 className="light-font block text-lg leading-4 tracking-widest ">
              {title}
            </h3>
            <h1
              className="md:text-[90px] text-6xl font-bold mb-5 font-reforma"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {heading}
            </h1>

            <p
              className="text-center text-lg w-[500px]"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {para}
            </p>
          </div>

          {/* left corner image */}
          <div className="absolute -bottom-10 z-50 -left-[91px] hidden md:block ">
            <img src={leftCornerImage} alt="" className="w-[400px]" />
          </div>

          {/* right corner image */}
          <div className="absolute -right-16 z-50 -bottom-48  hidden md:block">
            <img src={rightCornerImage} alt="" className="w-[300px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverBackground;
