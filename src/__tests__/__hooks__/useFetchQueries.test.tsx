import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useFetchQueries from '../../hooks/useFetchQueries';
import { supabase } from '../../supabase/client';
import { fetchProjects } from '../../utils/queries/fetch';
import { Project } from '../../types/project';

// Mock the Supabase client
vi.mock('../../supabase/client', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(),
      eq: vi.fn(),
      single: vi.fn(),
    })),
  },
}));

// Mock the user data
vi.mock('../../utils/queries/fetch', () => ({
  user: {
    data: {
      user: {
        id: 'test-user-id',
      },
    },
  },
  fetchProjects: vi.fn(),
}));

// Create a wrapper for the QueryClientProvider
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useFetchQueries', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch user data successfully', async () => {
    const mockUserData = {
      id: 'test-user-id',
      name: 'Test User',
      email: 'test@example.com',
    };

    const mockSelect = vi.fn().mockResolvedValue({
      data: mockUserData,
      error: null,
    });

    const mockEq = vi.fn().mockReturnValue({
      single: vi.fn().mockReturnValue({
        data: mockUserData,
        error: null,
      }),
    });

    const fromSpy = vi.spyOn(supabase, 'from').mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: mockEq,
      }),
    } as any);

    const { result } = renderHook(() => useFetchQueries(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.userData.isSuccess).toBe(true);
    });

    expect(fromSpy).toHaveBeenCalledWith('Users');
    expect(result.current.userData.data).toEqual(mockUserData);
  });

  it('should fetch projects successfully', async () => {
    const mockProjects: Project[] = [
      {
        id: '1',
        created_at: '2023-01-01',
        title: 'Project 1',
        description: 'Description for Project 1',
        created_by: 'user-1',
        required_roles: ['Frontend Developer', 'Backend Developer'],
        participants: ['user-2', 'user-3'],
        updated_at: '2023-01-02',
        industry: 'Tech',
        project_views: 100,
        required_stacks: ['React', 'Node.js'],
        workspace: {
          name: 'Workspace 1',
          url: 'https://workspace1.com',
        },
        requests: [
          {
            userId: 'user-4',
            status: 'pending',
          },
        ],
      },
      {
        id: '2',
        created_at: '2023-01-03',
        title: 'Project 2',
        description: 'Description for Project 2',
        created_by: 'user-2',
        required_roles: ['UI/UX Designer', 'DevOps Engineer'],
        participants: ['user-1', 'user-3'],
        updated_at: '2023-01-04',
        industry: 'Finance',
        project_views: 150,
        required_stacks: ['Figma', 'Docker'],
        workspace: {
          name: 'Workspace 2',
          url: 'https://workspace2.com',
        },
        requests: [
          {
            userId: 'user-5',
            status: 'pending',
          },
        ],
      },
    ];
  
    // Mock the fetchProjects function to return mockProjects
    vi.mocked(fetchProjects).mockResolvedValue(mockProjects);
  
    const { result } = renderHook(() => useFetchQueries(), {
      wrapper: createWrapper(),
    });
  
    // Wait for the query to resolve
    await waitFor(() => {
      expect(result.current.projects.isSuccess).toBe(true);
    });
  
    // Assertions
    expect(result.current.projects.data).toEqual(mockProjects);
  });

  it('should fetch notifications successfully', async () => {
    const mockNotifications = [
      { id: 1, message: 'Notification 1', to: 'test-user-id' },
      { id: 2, message: 'Notification 2', to: 'test-user-id' },
    ];

    const mockSelect = vi.fn().mockResolvedValue({
      data: mockNotifications,
      error: null,
    });

    const mockEq = vi.fn().mockReturnValue({
      data: mockNotifications,
      error: null,
    });

    const fromSpy = vi.spyOn(supabase, 'from').mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: mockEq,
      }),
    } as any);

    const { result } = renderHook(() => useFetchQueries(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.notifications.isSuccess).toBe(true);
    });

    expect(fromSpy).toHaveBeenCalledWith('Notifications');
    expect(result.current.notifications.data).toEqual(mockNotifications);
  });

  it('should handle user data fetch error', async () => {
    const mockError = new Error('Failed to fetch user data');

    const mockEq = vi.fn().mockReturnValue({
      single: vi.fn().mockReturnValue({
        data: null,
        error: mockError,
      }),
    });

    vi.spyOn(supabase, 'from').mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: mockEq,
      }),
    } as any);

    const { result } = renderHook(() => useFetchQueries(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.userData.isError).toBe(true);
    });

    expect(result.current.userData.error?.message).toBe(mockError.message);
  });

  it('should handle notifications fetch error', async () => {
    const mockError = new Error('Failed to fetch notifications');

    const mockEq = vi.fn().mockReturnValue({
      data: null,
      error: mockError,
    });

    vi.spyOn(supabase, 'from').mockReturnValue({
      select: vi.fn().mockReturnValue({
        eq: mockEq,
      }),
    } as any);

    const { result } = renderHook(() => useFetchQueries(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.notifications.isError).toBe(true);
    });

    expect(result.current.notifications.error?.message).toBe(mockError.message);
  });
});