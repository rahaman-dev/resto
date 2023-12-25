export const VerticalCard = ({ img, name, description, rate, aos }) => {
  return (
    <div
      className="bg-[#121A1D] lg:w-[600px] h-[160px] mx-3 "
      data-aos={aos}
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
    >
      <div className="flex">
        <div>
          <img src={img} alt="verticalCard1" className="w-[250px] h-[160px]" />
        </div>
        <div className="lg:w-[600px] p-5 flex flex-col">
          <div className="flex items-center">
            <h2 className="text-2xl">
              {name}
              <span className="text-[#314555] select-none">..............</span>
            </h2>
            <h4 className="text-2xl">${rate}</h4>
          </div>
          <p className="mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
};
