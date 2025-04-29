interface PRCardDataChipProps {
  Title: string;
  Value: number;
  TextColor: string;
}

const PRCardDataChip = ({
  Title,
  Value,
  TextColor,
}: PRCardDataChipProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-fit h-fit px-4 py-2 bg-[#131314] border border-[#323236] text-white rounded-2xl">
      <p className="font-extralight text-[#a8a8a8] text-sm">{Title}</p>
      <p className={`text-xl font-medium ${TextColor}`}>{Value}</p>
    </div>
  );
};

export default PRCardDataChip;
