const CardRect = ({
  color,
  title,
  textColor,
  rounded,
  split,
  splitTextColor,
}: any) => {
  return (
    <div
      className={`w-full h-28 pl-8 ${color} ${rounded} flex flex-col justify-start`}
    >
      <div className="flex flex-col leading-6 my-auto">
        <div className={`font-bold text-[22px] ${textColor} w-3/5`}>
          {title}
        </div>
        <div className={`font-bold text-[18px] ${splitTextColor} w-3/5`}>
          {split}
        </div>
      </div>
    </div>
  );
};

export default CardRect;
