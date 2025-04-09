export interface Workspace {
  name: string;
  url: string;
}


export interface Project {
  id: string;
  created_at: string;
  title: string;
  description: string;
  created_by: string;
  required_roles: string[];
  updated_at: string;
  industry: string;
  project_views: number;
  required_stacks: string[];
  workspace: Workspace;
}

