import { useState } from "react";
import { ChangeEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBiodata } from "../utils/queries/update";

interface FormData {
  firstName: string;
  lastName: string;
  aboutMe: string;
}

const useUpdateBiodata = (initialData: FormData) => {
  const [update, setUpdate] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [error, setError] = useState(false);

  const client = useQueryClient();

  // update the profile
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["updateBiodata"],
    mutationFn: updateBiodata,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      setError(true);
    },
  });

  const handleFormData = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateModal = () => {
    setUpdate((prevState) => !prevState);
  };

  const handleSave = async () => {
    await mutateAsync(formData);
  };

  const isSaveDisabled =
    formData.firstName === initialData.firstName &&
    formData.lastName === initialData.lastName &&
    formData.aboutMe === initialData.aboutMe;

  return {
    update,
    setUpdate,
    formData,
    setFormData,
    mutateAsync,
    handleFormData,
    handleUpdateModal,
    handleSave,
    isSaveDisabled,
    isPending,
    error,
  };
};

export default useUpdateBiodata;
