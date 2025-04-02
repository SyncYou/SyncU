// store/useUserStore.ts
import { create } from 'zustand';
import { User } from '@supabase/supabase-js';
import { supabase } from '../supabase/client';

interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  countryOfResidence: string;
  photoUrl: string;
  areaOfExpertise: string;
  stacks: string[];
  onboardingComplete: boolean;
}

interface UserState {
  // Auth state
  authUser: User | null;
  loading: boolean;
  error: string | null;
  
  // Profile state
  userDetails: UserDetails | null;
  currentStep: number;
  
  // Auth actions
  setAuthUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  
  // Profile actions
  setUserDetails: (details: Partial<UserDetails>) => void;
  setCurrentStep: (step: number) => void;
  removeSkill: (skill: string) => void;
  toggleSkill: (skill: string) => void;
  
  // Combined actions
  initializeAuth: () => Promise<void>;
  fetchUserProfile: (userId: string) => Promise<void>;
  clearUser: () => void;
}

const initialUserDetails: UserDetails = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  countryOfResidence: 'Nigeria',
  photoUrl: '',
  areaOfExpertise: '',
  stacks: ['N/A', 'N/A', 'N/A'],
  onboardingComplete: false
};

export const useUserStore = create<UserState>((set, get) => ({
  // Initial state
  authUser: null,
  loading: true,
  error: null,
  userDetails: null,
  currentStep: 1,

  // Auth actions
  setAuthUser: (user) => set({ authUser: user }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  // Profile actions
  setUserDetails: (details: Partial<UserDetails>) => 
    set((state) => ({
      userDetails: state.userDetails 
        ? { ...state.userDetails, ...details }
        : { ...initialUserDetails, ...details }
    })),

  setCurrentStep: (step) => set({ currentStep: step }),

  removeSkill: (skill) =>
    set((state) => {
      if (!state.userDetails) return state;
      const updatedStack = state.userDetails.stacks.filter(item => item !== skill);
      return {
        userDetails: { ...state.userDetails, stacks: updatedStack }
      };
    }),

  toggleSkill: (skill) =>
    set((state) => {
      if (!state.userDetails) return state;
      let stacks = [...state.userDetails.stacks];
      
      if (stacks.includes(skill)) {
        stacks = stacks.filter(item => item !== skill);
      } else {
        stacks = [...stacks.filter(item => item !== "N/A"), skill];
      }
      
      return {
        userDetails: { ...state.userDetails, stacks }
      };
    }),

  // Combined actions
  initializeAuth: async () => {
    set({ loading: true, error: null });
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error || !user) {
        throw new Error(error?.message || 'Not authenticated');
      }
      
      set({ authUser: user });
      await get().fetchUserProfile(user.id);
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unknown error' });
      get().clearUser();
    } finally {
      set({ loading: false });
    }
  },

  fetchUserProfile: async (userId) => {
    try {
      const { data, error } = await supabase
        .from('Users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error || !data) {
        throw new Error(error?.message || 'User profile not found');
      }

      set({
        userDetails: {
          id: data.id,
          firstName: data.first_name || '',
          lastName: data.last_name || '',
          email: data.email || '',
          username: data.username || '',
          countryOfResidence: data.country_of_residence || 'Nigeria',
          photoUrl: data.photo_url || '',
          areaOfExpertise: data.area_of_expertise || '',
          stacks: data.stacks || ['N/A', 'N/A', 'N/A'],
          onboardingComplete: data.onboarding_complete || false
        }
      });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to fetch profile' });
    }
  },

  clearUser: () => set({ 
    authUser: null,
    userDetails: null,
    currentStep: 1,
    error: null
  })
}));