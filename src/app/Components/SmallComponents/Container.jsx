const Container = ({ children, className }) => {
  return (
    <section
      className={`w-[95%] xl:w-[87%]  2xl:w-[1240px] mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Container;
