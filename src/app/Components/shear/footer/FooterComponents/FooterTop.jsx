export default function FooterTop() {
  return (
    <section className="bg-darkBg w-full footer-top  lg:w-[836px] mx-auto">
      <section className="py-[30px] px-12">
        <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3">
          <div className="md:border-r border-[#ffffff1a] w-full md:w-1/3">
            <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">
              Call Us On :
            </h4>
            <h5 className="text-[18px] font-[700] text-[#c59d5f] text-center">
              +(528) 456-7592
            </h5>
          </div>
          <div className="md:border-r border-[#ffffff1a] w-full md:w-1/3">
            <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">
              Open Hours :
            </h4>
            <h5 className="text-[18px] font-[700] text-[#c59d5f] text-center">
              7.00 AM - 11.15 PM
            </h5>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-[20px] font-[700] text-white text-center mb-1 md:mb-3">
              Mail Us :
            </h4>
            <h5 className="text-[18px] font-[700] text-[#c59d5f] text-center">
              info@example.com
            </h5>
          </div>
        </section>
      </section>
    </section>
  );
}
