import React, { useRef, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { User } from "../../types/user";

interface Props {
  type: "email" | "text";
  name: "email" | "firstName" | "lastName";
  label: string;
  placeholder: string;
  errors: FieldErrors<User>;
  register: UseFormRegister<User>;
}

const ControlledInput: React.FC<Props> = ({
  type,
  label,
  placeholder,
  name,
  errors,
  register,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fieldError = errors[name]?.message ?? "";

  return (
    <>
      <div
        onClick={() => inputRef.current?.focus()}
        className={`border rounded-xl py-2 px-3 flex flex-col gap-2 ${
          isFocused
            ? "border-[#A771E5] shadow-lg shadow-[#EDE4FA]"
            : "border-[#E6E6F0]"
        }`}
      >
        <label
          className="text-secondary leading-6 text-[16px] font-normal"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="focus:outline-none"
          {...register(name)}
          name={name}
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
        />
      </div>
      {fieldError && <small className="text-red-500">{fieldError}</small>}
    </>
  );
};

export default ControlledInput;
