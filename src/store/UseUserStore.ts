import { create } from 'zustand';
import { User } from '@supabase/supabase-js';
import { supabase } from '../supabase/client';

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  countryOfResidence: string;
  photoUrl: string;
  areaOfExpertise: string;
  links: string[];
  description: string;
  stacks: string[];
  onboardingComplete: boolean | string;
}

interface UserState {
  authUser: User | null;
  loading: boolean;
  error: string | null;
  userDetails: UserDetails | null;
  currentStep: number;
  setAuthUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setUserDetails: (details: Partial<UserDetails>) => void;
  setCurrentStep: (step: number) => void;
  removeSkill: (skill: string) => void;
  toggleSkill: (skill: string) => void;
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
  links: [],
  description: '',
  stacks: ['N/A', 'N/A', 'N/A'],
  onboardingComplete: 'false'
};

export const useUserStore = create<UserState>((set, get) => ({
  authUser: null,
  loading: true,
  error: null,
  userDetails: null,
  currentStep: 1,

  setAuthUser: (user) => set({ authUser: user }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

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

    initializeAuth: async () => {
      set({ loading: true, error: null });
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        
        if (error) throw error;
        if (!user) {
          set({ authUser: null, userDetails: null, loading: false });
          return;
        }
        
        set({ authUser: user });
        await get().fetchUserProfile(user.id);
      } catch (error) {
        set({ error: error instanceof Error ? error.message : 'Unknown error' });
      } finally {
        set({ loading: false });
      }
    },

  fetchUserProfile: async (userId) => {
    console.log('Fetching profile for user:', userId);
    try {
      const { data, error } = await supabase
        .from('Users')
        .select('*')
        .eq('id', userId)
        .single();
  
      if (error || !data) {
        throw new Error(error?.message || 'User profile not found');
      }
  
      console.log('Fetched user data:', data); 
  
      set({
        userDetails: {
          id: data.id,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          username: data.username || '',
          countryOfResidence: data.countryOfResidence || 'Nigeria',
          photoUrl: data.photoUrl || '',
          areaOfExpertise: data.areaOfExpertise || '',
          links: data.links || [],
          description: data.desrciption || '',
          stacks: data.stacks || ['N/A', 'N/A', 'N/A'],
          onboardingComplete: data.onboardingComplete
        }
      });
    } catch (error) {
      console.error('Error fetching profile:', error);  
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