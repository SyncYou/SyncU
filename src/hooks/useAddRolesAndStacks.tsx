import { ChangeEvent, useState } from "react";

// type Contributor = {
//   username: string;
//   email: string;
//   role: string;
//   image: string;
// }

const useAddRolesAndStacks = () => {
  const [stacks, setStacks] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [contributors, setContributors] = useState<string[]>([]);
  const [typedRole, setTypedRole] = useState<string>("");
  const [typedStack, setTypedStack] = useState<string>("");
  const [typedContributor, setTypedContributor] = useState<string>("");

  const addRole = (role: string) => {
    const newRole = [...roles, role];

    setRoles(newRole);
    setTypedRole("");
  };

  const removeRole = (role: string) => {
    const newRole = roles.filter((r) => r != role);

    setRoles(newRole);
  };

  const addStack = (stack: string) => {
    const newStack = [...stacks, stack];

    setStacks(newStack);
    setTypedStack("");
  };

  const removeStack = (stack: string) => {
    const newStack = stacks.filter((r) => r != stack);

    setStacks(newStack);
  };

  const addContributor = (contributor: string) => {
    const newContributor = [...contributors, contributor];

    setContributors(newContributor);
    setTypedContributor("");
  };

  const removeContributor = (contributor: string) => {
    const newContributor = contributors.filter((r) => r != contributor);
    
    setContributors(newContributor);
  };

  const handleTypedRole = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedRole(e.target.value);
  };

  const handleTypedStack = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedStack(e.target.value);
  };


  const handleTypedContributor = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedContributor(e.target.value);
  };

  return {
    addRole,
    addStack,
    addContributor,
    removeRole,
    removeStack,
    removeContributor,
    typedRole,
    typedStack,
    typedContributor,
    roles,
    stacks,
    contributors,
    handleTypedRole,
    handleTypedStack,
    handleTypedContributor
  };
};

export default useAddRolesAndStacks;
