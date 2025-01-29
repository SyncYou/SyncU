import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { supabase } from '../../supabase/client';
import useFetchUserData from '../../hooks/useFetchUserData';

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
          id: 'test-user-id', // Ensure this is correctly mocked
        },
      },
    },
  }));
  
  // Create a wrapper for the QueryClientProvider
  const createWrapper = () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false, // Disable retries for testing
        },
      },
    });
    return ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
  
  describe('useFetchUserData', () => {
    beforeEach(() => {
      vi.clearAllMocks(); // Clear all mocks before each test
    });
  
    it('should fetch user data successfully', async () => {
      const mockUserData = {
        id: 'test-user-id',
        username: 'testuser',
        firstName: 'Test',
        lastName: 'User',
        fullname: 'Test User',
        photoUrl: 'https://example.com/photo.jpg',
        email: 'test@example.com',
        countryOfResidence: 'USA',
        areaOfExpertise: 'Software Development',
        description: 'A test user',
        links: [],
        stacks: ['JavaScript', 'React'],
      };
  
      // Mock the Supabase response
      const mockSingle = vi.fn().mockResolvedValue({
        data: mockUserData,
        error: null,
      });
  
      const mockEq = vi.fn().mockReturnValue({
        single: mockSingle,
      });
  
      const mockSelect = vi.fn().mockReturnValue({
        eq: mockEq,
      });
  
      vi.spyOn(supabase, 'from').mockReturnValue({
        select: mockSelect,
      } as any);
  
      const { result } = renderHook(() => useFetchUserData(), {
        wrapper: createWrapper(),
      });
  
      // Wait for the query to resolve
      await waitFor(() => {
        expect(result.current.data).toEqual(mockUserData);
      });
  
      // Assertions
      expect(supabase.from).toHaveBeenCalledWith('Users');
      expect(mockSelect).toHaveBeenCalled();
      expect(mockEq).toHaveBeenCalledWith('id', 'test-user-id'); // Ensure this matches the mocked user ID
      expect(mockSingle).toHaveBeenCalled();
      expect(result.current.error).toBeNull();
    });
  
    it('should handle error when fetching user data', async () => {
        const mockError = new Error('Failed to fetch user data');
      
        // Mock the Supabase response with an error
        const mockSingle = vi.fn().mockResolvedValue({
          data: null,
          error: mockError,
        });
      
        const mockEq = vi.fn().mockReturnValue({
          single: mockSingle,
        });
      
        const mockSelect = vi.fn().mockReturnValue({
          eq: mockEq,
        });
      
        vi.spyOn(supabase, 'from').mockReturnValue({
          select: mockSelect,
        } as any);
      
        const { result } = renderHook(() => useFetchUserData(), {
          wrapper: createWrapper(),
        });
      
        // Wait for the query to resolve
        await waitFor(() => {
          expect(result.current.error).toBeDefined();
          expect(supabase.from).toHaveBeenCalledWith('Users');
          expect(mockSelect).toHaveBeenCalled();
          expect(mockEq).toHaveBeenCalledWith('id', 'test-user-id');
          expect(mockSingle).toHaveBeenCalled();
          expect(result.current.data).toBeUndefined();
          expect(result.current.error?.message).toBe(mockError.message);
        });
      
      });
  });
  