export interface Links {
  name: string;
  url: string;
}

export interface BiodataFormData {
  firstName: string;
  lastName: string;
  aboutMe: string;
}

export interface UserData {
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
