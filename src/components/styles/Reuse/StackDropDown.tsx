// import Scroll from '/signUp-imgs/Scroll.svg';

interface Area {
  area: string;
}

interface Stack {
  areas: Area[]; 
}

interface StackDropDownProps {
  style?: string; 
  selectedStack: Stack | null; 
  handleAreaClick: (area: string) => void; 
}

export function StackDropDown({ style, selectedStack, handleAreaClick }: StackDropDownProps) {
  return (
    <>
      <span
        className={`flex items-start justify-between py-2 px-3 border border-solid border-gray-200 bg-white w-[62%] rounded-lg shadow-rightShadow absolute z-10 ${style} h-[18vh] overflow-y-scroll`}
      >
        <div className="flex flex-col h-auto">
          {selectedStack?.areas.map((areaObj, index) => (
            <span
              key={index}
              className="flex items-center justify-center flex-col gap-[10px] w-full [&_p]:h-auto [&_p]:text-gray-800 [&_p]:text-base [&_p]:font-medium *:hover:bg-gray-100 [&_p]:hover:cursor-pointer *:w-full [&_p]:py-1 [&_p]:pl-3 [&_p]:rounded-[4px]"
            >
              <p
                onClick={() => handleAreaClick(areaObj.area)}
              >
                {areaObj.area}
              </p>
            </span>
          ))}
        </div>
      </span>
    </>
  );
}
