const Button = ({ bgColor, textColor, text, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-fit h-fit px-5 py-3 text-lg font-semibold ${bgColor} ${textColor} rounded-2xl`}
    >
      {text}
    </button>
  );
};

export default Button;
