interface PRCardDataChipProps {
  Title: string;
  Value: number;
}

const PRCardDataChip = ({ Title, Value }: PRCardDataChipProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center w-fit h-fit px-4 py-2 bg-[#131314] border border-[#323236] text-white rounded-2xl">
      <p className="font-extralight text-sm">{Title}</p>
      <p className="text-xl font-medium">{Value}</p>
    </div>
  );
};

export default PRCardDataChip;
