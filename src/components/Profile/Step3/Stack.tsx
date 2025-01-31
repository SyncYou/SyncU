import { useUserStore } from "../../../store/UseUserStore";


interface StackProps {
  stack: string;
  id: number;
  checked: number | null;
  setChecked: (id: number | null) => void;
  items: any;
  setIsModalOpen: (open: boolean) => void;
}

export function Stack({
  stack,
  id,
  checked,
  setChecked,
  items,
  setIsModalOpen,
}: StackProps) {
  const clicked = id === checked;
  const { userDetails, setUserDetails } = useUserStore();

  function handleToggle() {
    // Toggle the checked state
    const newCheckedState = clicked ? null : id;
    setChecked(newCheckedState);
    // Open the modal if a stack is selected
    setIsModalOpen(newCheckedState !== null);
    setUserDetails("areaOfExpertise", "");
  }

  return (
    <>
      <span
        onClick={handleToggle}
        className={`p-4 relative cursor-pointer flex flex-col items-center gap-6 w-[137px] rounded-lg border-solid ${
          clicked
            ? "border-brand-500  [&_p]:text-brand-500 border-[1.5px] bg-clicked "
            : "bg-white border border-gray-300 shadow-smallBox [&_p]:text-gray-950"
        }`}
      >
        {items.image && items.image.length > 0 && (
          <fieldset key={0}>
            <img
              src={clicked ? items.image[0].fill : items.image[0].img}
              alt="niche-icons"
            />
          </fieldset>
        )}
        {clicked && (
          <fieldset className="p-1 rounded-full z-10 bg-brand-500 absolute  right-3 top-2">
            <svg className="rounded-full" width="12.5" height="12.5" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1663 1.875L4.43717 7.60417L1.83301 5" stroke="white" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          </fieldset>
        )}
        <p className="text-base font-medium text-center">{stack}</p>
      </span>
    </>
  );
}
