import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateLinks } from "../utils/queries/update";

interface Links {
  name: string;
  url: string;
}

const useUpdatePortfolioLinks = (initialLinks: Links[]) => {
  const [error, setError] = useState(false);
  const [portfolioLink, setPortfolioLink] = useState(initialLinks);
  const [suggestedLinks, setSuggestedLinks] = useState([
    { name: "Behance", url: "www.behance.net" },
    { name: "LinkedIn", url: "www.linkedIn.net" },
    { name: "x", url: "www.x.net" },
    { name: "fiverr", url: "www.fiverr.net" },
  ]);

  const client = useQueryClient();

  // update the portfolio links
  const { mutateAsync, error: mutationError } = useMutation({
    mutationKey: ["updateLinks"],
    mutationFn: updateLinks,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: () => {
      setError(true);
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
  };

  // Handle adding a suggested link
  const addSuggestedLink = (link: Links) => {
    setPortfolioLink((prev) => [...prev, link]);
    // Remove the added suggested link from the list
    setSuggestedLinks((prev) =>
      prev.filter((suggestedLink) => suggestedLink.url !== link.url)
    );
  };

  // Handle saving the links
  const handleSave = async () => {
    await mutateAsync(portfolioLink);
  };

  return {
    error,
    portfolioLink,
    setPortfolioLink,
    setSuggestedLinks,
    mutateAsync,
    suggestedLinks,
    handleInputChange,
    handleInputDelete,
    addSuggestedLink,
    handleSave,
    isSaveDisabled: initialLinks?.length === portfolioLink?.length,
  };
};

export default useUpdatePortfolioLinks;
