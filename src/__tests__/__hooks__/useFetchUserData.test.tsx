import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "../../supabase/client";
import useFetchUserData from "../../hooks/useFetchUserData";

vi.mock("../../supabase/client", () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(),
      eq: vi.fn(),
      single: vi.fn(),
    })),
  },
}));

vi.mock("../../utils/queries/fetch", () => ({
  user: {
    data: {
      user: {
        id: "test-user-id",
      },
    },
  },
}));

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

describe("useFetchUserData", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch user data successfully", async () => {
    const mockUserData = {
      id: "test-user-id",
      username: "testuser",
      firstName: "Test",
      lastName: "User",
      fullname: "Test User",
      photoUrl: "https://example.com/photo.jpg",
      email: "test@example.com",
      countryOfResidence: "USA",
      areaOfExpertise: "Software Development",
      description: "A test user",
      links: [],
      stacks: ["JavaScript", "React"],
    };

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

    vi.spyOn(supabase, "from").mockReturnValue({
      select: mockSelect,
    } as any);

    const { result } = renderHook(() => useFetchUserData(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.data).toEqual(mockUserData);
    });

    expect(supabase.from).toHaveBeenCalledWith("Users");
    expect(mockSelect).toHaveBeenCalled();
    expect(mockEq).toHaveBeenCalledWith("id", "test-user-id");
    expect(mockSingle).toHaveBeenCalled();
    expect(result.current.error).toBeNull();
  });

  it("should handle error when fetching user data", async () => {
    const mockError = new Error("Failed to fetch user data");

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

    vi.spyOn(supabase, "from").mockReturnValue({
      select: mockSelect,
    } as any);

    const { result } = renderHook(() => useFetchUserData(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.error).toBeDefined();
      expect(supabase.from).toHaveBeenCalledWith("Users");
      expect(mockSelect).toHaveBeenCalled();
      expect(mockEq).toHaveBeenCalledWith("id", "test-user-id");
      expect(mockSingle).toHaveBeenCalled();
      expect(result.current.data).toBeUndefined();
      expect(result.current.error?.message).toBe(mockError.message);
    });
  });
});
