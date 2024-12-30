import { useQuery } from "@tanstack/react-query";
import { fetchUserData } from "../utils/queries/fetch";

interface Links {
  name: string;
  url: string;
}

interface UserData {
  username: string;
  firstName: string;
  lastName: string;
  fullname: string;
  photoUrl: string;
  email: string;
  countryOfResidence: string;
  areaOfExpertise: string;
  description: string;
  links: Links[];
  stacks: string[];
}

const useFetchUserData = (): {
  data: UserData[];
  error: any;
} => {
  const { data, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUserData,
  });

  //   console.log(data, error);
  return { data, error };
};

export default useFetchUserData;
