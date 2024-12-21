import check from "/signUp-imgs/Check.svg";

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
  const isChecked = clicked ? id : null;

  function handleToggle() {
    setChecked(isChecked);
    setIsModalOpen(isChecked !== null);
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
        {items.image.length > 0 && (
          <fieldset key={0}>
            {clicked ? (
              <img src={items.image[0].fill} alt="niche-icons" />
            ) : (
              <img src={items.image[0].img} alt="niche-icons" />
            )}
          </fieldset>
        )}
        {clicked && (
          <fieldset className="p-1 rounded-full bg-brand-600 absolute z-10 right-[3vh] top-[2vh]">
            <img src={check} alt="check" />
          </fieldset>
        )}
        <p className="text-base font-medium text-center">{stack}</p>
      </span>
    </>
  );
}
