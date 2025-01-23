import { useState } from "react";
import Chip from "./Chip";
import { Roles, Stacks } from "../../utils/StacksSuggestions";

interface DropDownProps {
  type: "roles" | "stacks";
  input: string;
  handleAddition: (text: string) => void;
  style?: HTMLDivElement["className"];
}

const DropDown = ({ type, input, handleAddition, style }: DropDownProps) => {
  // Suggested roles and stacks
  const [suggestedRoles, setSuggestedRoles] = useState<string[]>(Roles);
  const [suggestedStacks, setSuggestedStacks] = useState<string[]>(Stacks);

  return (
    <div
      className={`overflow-auto absolute top-16 z-10 w-full h-40 bg-white rounded-xl border border-gray200 ${style}`}
    >
      <div className="flex flex-wrap gap-2 p-2">
        {type === "roles" &&
          suggestedRoles
            ?.filter((r) =>
              input ? r.toLowerCase().includes(input.toLowerCase()) : r
            )
            .map((role) => (
              <Chip className="m-0 cursor-pointer">
                <span
                  onClick={() => {
                    const newRoles = suggestedRoles?.filter((s) => s != role);
                    setSuggestedRoles(newRoles);
                    handleAddition(role);
                  }}
                >
                  {role}
                </span>
              </Chip>
            ))}
        {type === "stacks" &&
          suggestedStacks
            ?.filter((r) =>
              input ? r.toLowerCase().includes(input.toLowerCase()) : r
            )
            .map((stack) => (
              <>
                <Chip className="m-0">
                  <span
                    onClick={() => {
                      const newStacks = suggestedStacks?.filter(
                        (s) => s != stack
                      );
                      setSuggestedStacks(newStacks);
                      handleAddition(stack);
                    }}
                  >
                    {stack}
                  </span>
                </Chip>
              </>
            ))}
      </div>
    </div>
  );
};

export default DropDown;
