import {create} from 'zustand';
import { UserDetails } from './UseUserStore';
import { Project } from '../types/project';
import { NotificationType } from '../utils/types/Types';

interface UserState {
  user: UserDetails | null;
  setUser: (user: UserDetails | null) => void;
}

interface ProjectState {
  projects: Project[] | undefined;
  setProjects: (projects: Project[]) => void;
}

interface NotificationState {
  notifications: NotificationType[] | undefined;
  setNotifications: (notifications: NotificationType[]) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
}));

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  setNotifications: (notifications) => set({ notifications }),
}));