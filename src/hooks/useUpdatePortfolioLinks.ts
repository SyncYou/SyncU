import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLinks } from "../utils/queries/update";

interface Links {
  name: string;
  url: string;
}

const useUpdatePortfolioLinks = (initialLinks: Links[] | null | undefined) => {
  const [error, setError] = useState<string | null>(null);
  const [portfolioLink, setPortfolioLink] = useState<Links[]>(
    initialLinks || []
  );
  const [validationErrors, setValidationErrors] = useState<boolean[]>([]); 
  // const [isValidating, setIsValidating] = useState<boolean[]>([]);

  const [suggestedLinks, setSuggestedLinks] = useState<Links[]>([
    { name: "Behance", url: "www.behance.net" },
    { name: "LinkedIn", url: "www.linkedIn.net" },
    { name: "x", url: "www.x.net" },
    { name: "fiverr", url: "www.fiverr.net" },
  ]);

  const client = useQueryClient();

  // URL validation function
  const validateUrl = (url: string): boolean => {
    const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlPattern.test(url);
  };

 

  

  // Update the portfolio links
  const { mutateAsync, error: mutationError } = useMutation({
    mutationKey: ["updateLinks"],
    mutationFn: updateLinks,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: () => {
      setError("Failed to update links. Please try again.");
      console.log(mutationError);
    },
  });

  // Handle input change for portfolio links
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number,
    link: Links
  ) => {
    const updatedLinks = [...portfolioLink];
    updatedLinks[i] = {
      name: link.name,
      url: e.target.value,
    };
    setPortfolioLink(updatedLinks);

    // Validate the URL and update validation errors
    const isValid = validateUrl(e.target.value);
    const updatedErrors = [...validationErrors];
    updatedErrors[i] = !isValid;
    setValidationErrors(updatedErrors);
  };

  // Handle deletion of a portfolio link
  const handleInputDelete = (i: number, link: Links) => {
    if (
      link.name === "Behance" ||
      link.name === "x" ||
      link.name === "LinkedIn" ||
      link.name === "fiverr"
    ) {
      setSuggestedLinks([...suggestedLinks, link]);
    }
    const updatedLinks = portfolioLink.filter((_, index) => index !== i);
    setPortfolioLink(updatedLinks);

    // Remove the corresponding validation error
    const updatedErrors = validationErrors.filter((_, index) => index !== i);
    setValidationErrors(updatedErrors);
  };

  // Handle adding a suggested link
  const addSuggestedLink = (link: Links) => {
    setPortfolioLink((prev) => [...prev, link]);
    // Remove the added suggested link from the list
    setSuggestedLinks((prev) =>
      prev.filter((suggestedLink) => suggestedLink.url !== link.url)
    );

    // Validate the added link
    const isValid = validateUrl(link.url);
    setValidationErrors([...validationErrors, !isValid]);
  };

  // Handle saving the links
  const handleSave = async () => {
    // Check if any link is invalid
    const hasInvalidLinks = validationErrors.some((error) => error);
    if (hasInvalidLinks) {
      setError("Please fix invalid URLs before saving.");
      return;
    }

    // If all links are valid, proceed with saving
    await mutateAsync(portfolioLink);
    setError(null); // Clear any previous errors
  };

  return {
    error,
    portfolioLink,
    validationErrors,
    suggestedLinks,
    handleInputChange,
    handleInputDelete,
    addSuggestedLink,
    handleSave,
    mutateAsync,
    setPortfolioLink,
    setSuggestedLinks,
    setValidationErrors,
    isSaveDisabled: portfolioLink.length === 0 || validationErrors.some((error) => error),
  };
};

export default useUpdatePortfolioLinks;