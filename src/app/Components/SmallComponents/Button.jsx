export const Button = ({ buttonText }) => {
  return (
    <button className="btn bg-amber-500 p-5 rounded hover:bg-transparent border border-amber-500 hover:border px-8 text-white">
      {buttonText}
    </button>
  );
};
