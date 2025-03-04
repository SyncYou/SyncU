import { useState } from "react";
import Chip from "./Chip";
import { Roles, Stacks } from "../../utils/StacksSuggestions";


type Contributor = {
  username: string;
  email: string;
  role: string;
  image?: string;
}

interface DropDownProps {
  type: "roles" | "stacks" | "contributors";
  input: string;
  suggestedContributors?: Contributor[];
  setSuggestedContributors: React.Dispatch<React.SetStateAction<Contributor[]>>;
  handleAddition: (text: string) => void;
}


const DropDown = ({ type, input, suggestedContributors, setSuggestedContributors, handleAddition}: DropDownProps) => {
  // Suggested roles and stacks
  const [suggestedRoles, setSuggestedRoles] = useState<string[]>(Roles);
  const [suggestedStacks, setSuggestedStacks] = useState<string[]>(Stacks);

  return (
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
        {type === "contributors" &&
          suggestedContributors
            ?.filter((r) =>
              input ? r.email.toLowerCase().includes(input.toLowerCase()) : r
            )
            .map((contributor) => (
              <>
                <Chip className="m-0 cursor-pointer">
                  <span
                    key={contributor.username}
                    onClick={() => {
                      const newContributors = suggestedContributors?.filter(
                        (s) => s.email.toLowerCase() !== contributor.email.toLowerCase()
                      );
                      console.log(newContributors)
                      setSuggestedContributors(() => newContributors);
                      console.log(suggestedContributors)
                      handleAddition(contributor.email);
                    }}
                  >
                    {contributor.email}
                  </span>
                </Chip>
              </>
            ))}
      </div>
  );
};

export default DropDown;
