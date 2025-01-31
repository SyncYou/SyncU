import { describe, it, expect, vi, beforeEach } from 'vitest';
import useFetchProjectData from '../../hooks/useFetchProjectData';
import { supabase } from '../../supabase/client';

// Mock the Supabase client
vi.mock('../supabase/client', () => ({
    supabase: {
      from: vi.fn(() => ({
        select: vi.fn(),
      })),
    },
  }));
  
  describe('useFetchProjectData', () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });
  
    it('should fetch projects successfully', async () => {
      const mockProjects = [
        { id: 1, name: 'Project 1', description: 'Test project 1' },
        { id: 2, name: 'Project 2', description: 'Test project 2' },
      ];
  
      const mockSelect = vi.fn().mockResolvedValue({
        data: mockProjects,
        error: null,
      });
  
      // Set up the mock chain
      const fromSpy = vi.spyOn(supabase, 'from').mockReturnValue({
        select: mockSelect,
      } as any);
  
      const result = await useFetchProjectData();
  
      expect(fromSpy).toHaveBeenCalledWith('Projects');
      expect(mockSelect).toHaveBeenCalledWith('*');
      expect(result).toEqual(mockProjects);
    });
  
    it('should throw error when fetch fails', async () => {
      const mockSelect = vi.fn().mockResolvedValue({
        data: null,
        error: new Error('Database error'),
      });
  
      // Set up the mock chain
      const fromSpy = vi.spyOn(supabase, 'from').mockReturnValue({
        select: mockSelect,
      } as any);
  
      await expect(useFetchProjectData()).rejects.toThrow('Cabins could not be loaded');
      expect(fromSpy).toHaveBeenCalledWith('Projects');
      expect(mockSelect).toHaveBeenCalledWith('*');
    });
  });