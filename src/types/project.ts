export interface Workspace {
  name: string;
  url: string;
}

export interface Requests{
    userId: string;
    status: 'pending';
} 

export interface Project {
  id: string;
  created_at: string;
  title: string;
  description: string;
  created_by: string;
  required_roles: string[];
  participants: string[];
  updated_at: string;
  industry: string;
  project_views: number;
  required_stacks: string[];
  workspace: Workspace;
  requests: Requests[]; 
}

