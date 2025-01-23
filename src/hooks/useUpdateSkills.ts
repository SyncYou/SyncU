import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStacks } from "../utils/queries/update";

const useUpdateSkills = (initialStacks: string[]) => {
  // State for new skill input, suggested skills, and selected skills
  const [newSkill, setNewSkill] = useState("");
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([
    "Motion design",
    "Framer",
    "Branding",
    "Figma",
    "Sketch",
    "Adobe Photoshop",
    "AutoCAD",
    "Corel Draw",
    "MS Packages",
    "Sketch",
  ]);
  const [skills, setSkills] = useState([...initialStacks]);

  const client = useQueryClient();

  // Mutation for updating the stacks
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["updateStacks"],
    mutationFn: updateStacks,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  // Add a new skill to the selected skills list
  const addSkill = (text: string) => {
    setSuggestedSkills((prev) => prev.filter((suggest) => suggest !== text));
    setSkills((prev) => [...prev, text]);
  };

  // Remove a skill from the selected skills list
  const removeSkill = (text: string) => {
    setSkills((prev) => prev.filter((skill) => skill !== text));
  };

  // Handle saving the skills
  const handleSave = async () => {
    await mutateAsync(skills);
  };

  return {
    newSkill,
    setNewSkill,
    suggestedSkills,
    skills,
    addSkill,
    removeSkill,
    handleSave,
    isPending,
    mutateAsync,
    isSaveDisabled: initialStacks.length === skills.length || isPending,
  };
};

export default useUpdateSkills;
