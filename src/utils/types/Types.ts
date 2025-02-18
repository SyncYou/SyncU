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
  id: string;
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

export interface CardsData {
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
  workspace?: { name: "Slack" | "Discord" | "Microsoft teams"; url: string };
}

export interface NotificationType {
  id: string;
  from: string;
  to: string;
  status: string;
  message: string;
}

export interface PostProjectFormType {
  created_by?: string;
  description: string;
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
  updated_at?: Date;
  username?: string;
  workspace: { name: "Slack" | "Discord" | "Microsoft teams"; url: string };
}

export type WorkSpaceType = "Slack" | "Discord" | "Microsoft teams";

export interface Request {
  userId: string;
  status: string;
}
