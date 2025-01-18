import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUsername } from "../utils/queries/update";

const useUpdateUsername = (initialUsername: string) => {
  const [newUsername, setNewUsername] = useState(initialUsername);
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);
  const [success, setSuccess] = useState(false);

  const client = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["updateUsername"],
    mutationFn: updateUsername,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  useEffect(() => {
    setError(false);
    setChecking(false);
    setSuccess(false);
  }, []);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value);
  };

  const handleSave = async () => {
    try {
      await mutateAsync(newUsername);
      setSuccess(true);
    } catch (e) {
      setError(true);
    }
  };

  const checkUsernameAvailability = async () => {
    setChecking(true);
    // Add your logic to check username availability
    // Example: Simulate an API call
    setTimeout(() => {
      setChecking(false);
      setSuccess(true); 
    }, 1000);
  };

  return {
    newUsername,
    setNewUsername,
    error,
    checking,
    setChecking,
    success,
    handleUsernameChange,
    handleSave,
    checkUsernameAvailability,
    isPending,
    isUsernameValid: initialUsername !== newUsername,
    mutateAsync
  };
};

export default useUpdateUsername;
