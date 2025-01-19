import { CalendarSync } from "lucide-react";
import CloseButton from "./atoms/CloseButton";
import InputField from "./atoms/InputField";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";

const AddSplit = ({ isNotAdded, setIsNotAdded }: any) => {
  // State for rep range and sets
  const [repRange, setRepRange] = useState<string>("");
  const [sets, setSets] = useState<number | string>("");

  // Handle rep range change
  const handleRepRangeChange = (event: any) => {
    setRepRange(event.target.value);
  };

  // Handle sets change
  const handleSetsChange = (event: any) => {
    setSets(event.target.value);
  };

  return (
    <div className="absolute flex bg-white z-50 w-svw max-w-[410px] min-h-svh p-2 py-8 px-6 mt-24 self-center rounded-t-3xl flex-col">
      <CloseButton onClick={() => setIsNotAdded(false)} />
      <div className="flex text-2xl gap-3 text-[#0A0A0A] font-semibold items-center">
        <div className="flex w-12 h-12 bg-[#0A0A0A] rounded-full items-center justify-center">
          <CalendarSync size={24} color="#fff" strokeWidth={2.1} />
        </div>
        <div className="flex">Add a Split</div>
      </div>

      <div className="flex flex-col mt-4 text-[#0A0A0A] font-medium text-lg">
        Name Your Split:
        <InputField />
      </div>

      <div className="flex flex-col w-full h-fit mt-4 mb-2 py-8 px-6 border-2 gap-3 border-[#0A0A0A] rounded-2xl text-white">
        {/* Exercise Input */}
        <div className="text-xl font-semibold text-[#0A0A0A]">
          Exercise
          <InputField />
        </div>

        {/* Rep Range Dropdown */}
        <div className="text-xl font-semibold text-[#0A0A0A]">
          Rep Range
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Rep Range</InputLabel>
            <Select
              value={repRange}
              onChange={handleRepRangeChange}
              label="Rep Range"
              fullWidth
            >
              {/* Rep Ranges */}
              {[
                "1",
                "2",
                "3",
                "4-5",
                "6-7",
                "8-9",
                "10-11",
                "12-13",
                "14-15",
                "16-17",
                "18-19",
                "20-21",
              ].map((range, index) => (
                <MenuItem key={index} value={range}>
                  {range}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Sets Dropdown */}
        <div className="text-xl font-semibold text-[#0A0A0A]">
          Sets
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Sets</InputLabel>
            <Select
              value={sets}
              onChange={handleSetsChange}
              label="Sets"
              fullWidth
            >
              {/* Set values */}
              {["1", "2", "3", "4", "5"].map((setValue, index) => (
                <MenuItem key={index} value={setValue}>
                  {setValue}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default AddSplit;
