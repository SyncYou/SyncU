import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useUserStore } from "../../store/UseUserStore";
import { useLeftFill1 } from "../../hooks/useLeftFill1";
import { Niches } from "../../components/Profile/Step3/Niches";
import { sendUserDetails } from "../../utils/SupabaseRequest";

vi.mock("../../store/UseUserStore", () => ({
  useUserStore: vi.fn(),
}));

vi.mock("../../utils/SupabaseRequest", () => ({
  sendUserDetails: vi.fn(),
}));

describe("useLeftFill1", () => {
  const setUserDetails = vi.fn();
  const validUserDetails = {
    firstName: "John",
    lastName: "Doe",
    countryOfResidence: "USA",
    email: "john.doe@example.com",
    username: "johndoe",
    areaOfExpertise: "Graphics design",
    photoUrl: "",
    stacks: ["N/A", "N/A", "N/A"],
  };

  const initialUserDetails = {
    ...validUserDetails,
    areaOfExpertise: "",
  };

  beforeEach(() => {
    (useUserStore as any).mockReturnValue({
      userDetails: initialUserDetails,
      setUserDetails: (field: string, value: any) => {
        initialUserDetails[field as keyof typeof initialUserDetails] = value;
        setUserDetails(field, value);
      },
      setCurrentStep: vi.fn(),
      removeSkill: vi.fn(),
      toggleSkill: vi.fn(),
      isStackValid: vi.fn(() => false),
      currentStep: 1,
    });
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useLeftFill1());

    expect(result.current.checked).toBeNull();
    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.selectedStack).toBeNull();
    expect(result.current.isValid).toBe(false);
  });

  it("should update checked state when setChecked is called", () => {
    const { result } = renderHook(() => useLeftFill1());

    act(() => {
      result.current.setChecked(1);
    });

    expect(result.current.checked).toBe(1);
    expect(result.current.selectedStack).toEqual(
      Niches.find((niche) => niche.id === 1)
    );
  });

  it("should update isModalOpen state when setIsModalOpen is called", () => {
    const { result } = renderHook(() => useLeftFill1());

    act(() => {
      result.current.setIsModalOpen(true);
    });

    expect(result.current.isModalOpen).toBe(true);
  });

  it("should update userDetails when handleAreaClick is called", () => {
    const { result } = renderHook(() => useLeftFill1());

    act(() => {
      result.current.handleAreaClick("Graphics design");
    });

    expect(setUserDetails).toHaveBeenCalledWith(
      "areaOfExpertise",
      "Graphics design"
    );
    expect(result.current.isModalOpen).toBe(false);
  });

  it("should validate the form correctly", () => {
    const { result } = renderHook(() => useLeftFill1());

    act(() => {
      setUserDetails(validUserDetails);
    });

    expect(result.current.isValid).toBe(true);
  });

  it("should handle form submission successfully", async () => {
    (sendUserDetails as any).mockResolvedValue({ data: {}, error: null });

    const { result, rerender } = renderHook(() => useLeftFill1());

    act(() => {
      setUserDetails(validUserDetails);
      rerender();
    });

    await act(async () => {
      await result.current.handleRequest();
    });

    expect(sendUserDetails).toHaveBeenCalledWith(validUserDetails);
  });

  it("should handle form submission successfully", async () => {
    (sendUserDetails as any).mockResolvedValue({ data: {}, error: null });

    const { result } = renderHook(() => useLeftFill1());

    act(() => {
      setUserDetails(validUserDetails);
    });

    await act(async () => {
      await result.current.handleRequest();
    });

    expect(sendUserDetails).toHaveBeenCalledWith(validUserDetails);
  });

  it("should handle form submission error", async () => {
    (sendUserDetails as any).mockRejectedValue(
      new Error("Failed to send data")
    );

    const { result } = renderHook(() => useLeftFill1());

    act(() => {
      setUserDetails(validUserDetails);
    });

    await act(async () => {
      await result.current.handleRequest();
    });

    expect(sendUserDetails).toHaveBeenCalledWith(validUserDetails);
  });
});
