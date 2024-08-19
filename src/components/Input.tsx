import React from "react";

type InputProps = {
  label: string;
  value: string;
  onChange: any;
};

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <label className="flex justify-center items-center gap-4">
      <div className="min-w-28 text-center font-semibold"> {label}:</div>{" "}
      <input
        value={value}
        onChange={onChange}
        type="text"
        required
        className="p-1 px-2 max-w-60 sm:min-w-60 border border-gray-400 rounded-md outline-none"
      ></input>
    </label>
  );
};

export default Input;
