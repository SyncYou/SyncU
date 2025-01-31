import { renderHook, act } from "@testing-library/react";
import { useUserStore } from "../store/UseUserStore";


describe("useUserStore", () => {
  beforeEach(() => {
    // Reset the store before each test
    useUserStore.setState({
      userDetails: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        countryOfResidence: "Nigeria",
        photoUrl: "",
        areaOfExpertise: "",
        stacks: ["N/A", "N/A", "N/A"],
      },
      currentStep: 1,
    });
  });

  it("should set user details", () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setUserDetails("firstName", "John");
    });

    expect(result.current.userDetails.firstName).toBe("John");
  });

  it("should toggle a skill", () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.toggleSkill("React");
    });

    expect(result.current.userDetails.stacks).toContain("React");
    expect(result.current.userDetails.stacks).not.toContain("N/A");

    act(() => {
      result.current.toggleSkill("React");
    });

    expect(result.current.userDetails.stacks).not.toContain("React");
  });

  it("should remove a skill", () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.toggleSkill("React");
      result.current.removeSkill("React");
    });

    expect(result.current.userDetails.stacks).not.toContain("React");
  });

  it("should validate the stack", () => {
    const { result } = renderHook(() => useUserStore());

    expect(result.current.isStackValid()).toBe(true);

    act(() => {
      result.current.toggleSkill("React");
    });

    expect(result.current.isStackValid()).toBe(false);
  });
});
