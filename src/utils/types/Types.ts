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
  notifications: object[];
}

export interface ProjectType {
  created_at: string;
  created_by: string;
  description: string;
  id: string;
  industry: string;
  participants: string[];
  project_views: number;
  requests: {
    userId: string;
    status: string;
  }[];
  required_roles: string[];
  required_stacks: string[];
  title: string;
  updated_at?: string;
  username?: string;
}
