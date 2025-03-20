interface SetInputProps {
  setNumber: number;
}

const SetInput: React.FC<SetInputProps> = ({ setNumber }) => {
  return (
    <div className="flex w-fit h-fit text-center">
      <label>
        <input
          className="flex h-8 w-8 text-center bg-transparent border-none outline-none"
          value={setNumber} // Display the set number
          readOnly // Prevent manual editing
        />
      </label>
    </div>
  );
};

export default SetInput;
