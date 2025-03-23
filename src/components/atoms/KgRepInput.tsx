import { useState } from "react";

const KgRepInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (inputValue.length > 3) inputValue = inputValue.slice(0, 3); // Limit to 3 digits
    setValue(inputValue);
  };

  return (
    <div className="flex w-fit h-fit text-center justify-center items-center">
      <label>
        <input
          className="flex h-8 w-8 text-center bg-transparent border-none outline-none placeholder-[#ababab] appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          value={value}
          onChange={handleChange}
          placeholder="-"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
        />
      </label>
    </div>
  );
};

export default KgRepInput;
