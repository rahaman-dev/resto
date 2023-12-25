const ReservationBanner = () => {
  return (
    <div className="reservationBannerTwo flex items-center justify-center flex-col mt-24  h-[444px]">
      <h3
        className="md:text-[90px]  text-6xl font-bold mb-5 text-white"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        Reservation
      </h3>
      <p
        className="text-center text-lg text-white"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        When the going gets tough, the tough get grilling. Bringing heat to
        <br></br>
        your meat. No one can compete with our meat
      </p>
    </div>
  );
};

export default ReservationBanner;
