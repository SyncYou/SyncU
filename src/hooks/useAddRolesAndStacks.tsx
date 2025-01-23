import { ChangeEvent, useState } from "react";

const useAddRolesAndStacks = () => {
  const [stacks, setStacks] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [typedRole, setTypedRole] = useState<string>("");
  const [typedStack, setTypedStack] = useState<string>("");

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

  const handleTypedRole = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedRole(e.target.value);
  };

  const handleTypedStack = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedStack(e.target.value);
  };

  return {
    addRole,
    addStack,
    removeRole,
    removeStack,
    typedRole,
    typedStack,
    roles,
    stacks,
    handleTypedRole,
    handleTypedStack,
  };
};

export default useAddRolesAndStacks;
