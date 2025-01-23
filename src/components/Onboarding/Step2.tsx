import React, { useEffect, useState } from "react";
import usercard from "/user-card-2.svg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import zigzag from "/signUp-imgs/arrow.svg";

interface Props {
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const Step2: React.FC<Props> = ({ handlePrevStep, handleNextStep }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="h-dvh w-full  bg-[#F6F2FC] md:bg-[#8333D0] relative overflow-hidden">
      <div>
        <img
          className="absolute -z-50 top-1/2 -translate-y-1/2 md:scale-100 left-1/2 -translate-x-1/2"
          src={zigzag}
          alt="zigzag"
        />
      </div>
      <div className="relative pt-20 md:pt-[6.1rem] px-2 sm:px-16 sm:flex sm:items-center sm:justify-center w-full text-center">
        <svg className="absolute top-44 sm:top-[7.5rem] -right-[7rem] sm:right-32 md:-right-[1rem] sm:h-[585px] h-[400px]" width="605" height="585" viewBox="0 0 605 585" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M600.04 0.897065C602.562 0.273185 605 2.18185 605 4.78003V118.601C605 124.124 600.523 128.601 595 128.601H591C585.477 128.601 581 124.124 581 118.601V58.2844C581 54.5698 576.378 52.8612 573.962 55.6827L321.745 350.225C314.993 358.109 302.638 357.577 296.589 349.142L234.375 262.378C232.829 260.222 229.651 260.141 227.997 262.215L-28.1241 583.355C-29.5016 585.082 -32.0183 585.366 -33.7454 583.988L-46.2544 574.012C-47.9815 572.634 -48.265 570.118 -46.8875 568.391L219.124 234.849C225.74 226.553 238.452 226.879 244.636 235.502L307.177 322.723C308.69 324.832 311.778 324.965 313.466 322.994L551.406 45.124C553.938 42.1681 551.185 37.7049 547.408 38.6394L486.223 53.7739C480.862 55.1 475.441 51.8289 474.115 46.4677L473.154 42.5847C471.828 37.2234 475.099 31.8022 480.46 30.4761L600.04 0.897065Z" fill={isMobile ? "#EDE4FA" : "#8A47D4"}/>
        </svg>
        <h1 className=" z-10 font-semibold tracking-tight text-center text-[32px] leading-[40px] text-[#8333D0]  md:text-white md:w-[400px]">
          Upskill by working on projects that interest you.
        </h1>
      </div>
      <div className="mt-8 sm:mt-28 md:mt-10 relative flex flex-col gap-20 items-center justify-center">
        <img className="w-[246px] sm:w-[300px]" width={290} height={150}  src={usercard} alt="masked image" />
          <div className="bg-gradient-to-b from-[#8333D000] to-[#F6F2FC] md:to-[#8333D0] w-[489px] h-24 absolute z-20 -bottom-[11rem] md:-bottom-[12.5rem]">

          </div>
          <svg
            className=" opacity-80 h-[180px] sm:h-[212px] absolute -bottom-[11rem] md:-bottom-[12.5rem]"
            width="489"
            height="212"
            viewBox="0 0 489 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
              <defs>
                <linearGradient id="opacityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopOpacity="1" stopColor="white" />
                  <stop offset="100%" stopOpacity="0.3" stopColor="white" />
                </linearGradient>
                <mask id="opacityMask">
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#opacityGradient)" />
                </mask>
              </defs>
            <g mask="url(#opacityMask)">
            <path
              d="M0.14917 11.2762C0.14917 8.08634 2.73502 5.50049 5.92483 5.50049H78.6396C81.3368 5.50049 83.9489 6.44434 86.0232 8.16839L110.609 28.6031H0.14917V11.2762Z"
              fill="#8CDEFF"
            />
            <rect
              x="0.14917"
              y="15.6078"
              width="196.373"
              height="196.373"
              rx="11.5513"
              fill="#8CDEFF"
            />
            <path
              d="M8.81812 30.6518C8.81812 25.9965 12.592 22.2227 17.2472 22.2227H182.317C186.972 22.2227 190.746 25.9965 190.746 30.6518H8.81812Z"
              fill="white"
            />
            <path
              d="M292.395 6.04721C292.395 2.8574 294.98 0.271545 298.17 0.271545H370.885C373.582 0.271545 376.194 1.21539 378.269 2.93945L402.854 23.3742H292.395V6.04721Z"
              fill="#FABC51"
            />
            <rect
              x="292.395"
              y="10.3789"
              width="196.373"
              height="196.373"
              rx="11.5513"
              fill="#FABC51"
            />
            <path
              d="M299.226 25.4257C299.226 20.7674 303.002 16.9911 307.66 16.9911H472.838C477.496 16.9911 481.272 20.7674 481.272 25.4257H299.226Z"
              fill="white"
            />
            <path
              d="M141.335 7.53799C141.335 4.34818 143.921 1.76233 147.111 1.76233H219.825C222.523 1.76233 225.135 2.70618 227.209 4.43023L251.795 24.865H141.335V7.53799Z"
              fill="#A6A6B5"
            />
            <rect
              x="141.335"
              y="11.8698"
              width="196.373"
              height="196.373"
              rx="11.5513"
              fill="#A6A6B5"
            />
            <g style={{ mixBlendMode: "screen" }}>
              <path
                d="M251.659 108.316C251.659 105.743 251.252 103.494 250.438 101.569C249.612 99.6432 248.397 98.1489 246.794 97.086C245.19 96.0385 243.229 95.5148 240.91 95.5148L224.352 95.5148C224.352 99.139 227.281 102.077 230.894 102.077L240.522 102.077C241.669 102.077 242.655 102.216 243.482 102.493C244.296 102.77 244.962 103.178 245.48 103.718C245.998 104.272 246.38 104.935 246.627 105.705C246.861 106.475 246.979 107.353 246.979 108.339C246.979 109.279 246.861 110.118 246.627 110.858C246.38 111.612 245.998 112.252 245.48 112.775C244.962 113.299 244.296 113.7 243.482 113.977C242.655 114.27 241.669 114.416 240.522 114.416H230.931C227.318 114.416 224.389 117.354 224.389 120.978L240.91 120.978C243.204 120.978 245.153 120.447 246.757 119.384C248.36 118.321 249.581 116.834 250.42 114.924C251.246 113.03 251.659 110.827 251.659 108.316Z"
                fill="#40404D"
              />
              <path
                d="M228.496 95.8148C228.496 93.25 228.894 91.0076 229.691 89.0878C230.499 87.168 231.687 85.6782 233.256 84.6185C234.824 83.5741 236.742 83.0519 239.01 83.0519L255.207 83.0519C255.207 86.6653 252.342 89.5946 248.808 89.5946L239.39 89.5946C238.268 89.5946 237.303 89.7329 236.495 90.0093C235.699 90.2858 235.047 90.6928 234.541 91.2303C234.034 91.7832 233.66 92.4436 233.419 93.2116C233.189 93.9795 233.075 94.8549 233.075 95.8379C233.075 96.7748 233.189 97.6118 233.419 98.349C233.66 99.1016 234.034 99.739 234.541 100.261C235.047 100.783 235.699 101.183 236.495 101.459C237.303 101.751 238.268 101.897 239.39 101.897L246.227 102.439C249.761 102.439 251.523 104.826 251.523 108.44H239.01C236.766 108.44 234.86 107.91 233.292 106.85C231.724 105.79 230.529 104.308 229.709 102.404C228.9 100.515 228.496 98.3183 228.496 95.8148Z"
                fill="#F5F5FA"
              />
            </g>
            <g style={{ mixBlendMode: "screen" }}>
              <path
                d="M404.554 108.316C404.554 105.743 404.147 103.494 403.333 101.569C402.506 99.6432 401.291 98.1489 399.688 97.086C398.084 96.0385 396.123 95.5148 393.804 95.5148L377.246 95.5148C377.246 99.139 380.175 102.077 383.788 102.077L393.416 102.077C394.563 102.077 395.55 102.216 396.376 102.493C397.19 102.77 397.856 103.178 398.374 103.718C398.892 104.272 399.275 104.935 399.521 105.705C399.756 106.475 399.873 107.353 399.873 108.339C399.873 109.279 399.756 110.118 399.521 110.858C399.275 111.612 398.892 112.252 398.374 112.775C397.856 113.299 397.19 113.7 396.376 113.977C395.55 114.27 394.563 114.416 393.416 114.416H383.825C380.212 114.416 377.283 117.354 377.283 120.978L393.804 120.978C396.099 120.978 398.047 120.447 399.651 119.384C401.254 118.321 402.475 116.834 403.314 114.924C404.14 113.03 404.554 110.827 404.554 108.316Z"
                fill="#40404D"
              />
              <path
                d="M381.391 95.8148C381.391 93.25 381.789 91.0076 382.585 89.0878C383.393 87.168 384.582 85.6782 386.15 84.6185C387.718 83.5741 389.637 83.0519 391.905 83.0519L408.101 83.0519C408.101 86.6653 405.236 89.5946 401.702 89.5946L392.285 89.5946C391.163 89.5946 390.198 89.7329 389.389 90.0093C388.593 90.2858 387.942 90.6928 387.435 91.2303C386.928 91.7832 386.554 92.4436 386.313 93.2116C386.084 93.9795 385.969 94.8549 385.969 95.8379C385.969 96.7748 386.084 97.6118 386.313 98.349C386.554 99.1016 386.928 99.739 387.435 100.261C387.942 100.783 388.593 101.183 389.389 101.459C390.198 101.751 391.163 101.897 392.285 101.897L399.121 102.439C402.655 102.439 404.417 104.826 404.417 108.44H391.905C389.661 108.44 387.755 107.91 386.186 106.85C384.618 105.79 383.423 104.308 382.603 102.404C381.795 100.515 381.391 98.3183 381.391 95.8148Z"
                fill="#F5F5FA"
              />
            </g>
            <g style={{ mixBlendMode: "screen" }}>
              <path
                d="M103.979 108.316C103.979 105.743 103.572 103.494 102.758 101.569C101.931 99.6432 100.717 98.1489 99.1131 97.086C97.5097 96.0385 95.5485 95.5148 93.2297 95.5148L76.6711 95.5148C76.6711 99.139 79.6001 102.077 83.2131 102.077L92.8412 102.077C93.9883 102.077 94.975 102.216 95.8014 102.493C96.6154 102.77 97.2815 103.178 97.7995 103.718C98.3176 104.272 98.6999 104.935 98.9466 105.705C99.1809 106.475 99.2981 107.353 99.2981 108.339C99.2981 109.279 99.1809 110.118 98.9466 110.858C98.6999 111.612 98.3176 112.252 97.7995 112.775C97.2815 113.299 96.6154 113.7 95.8014 113.977C94.975 114.27 93.9883 114.416 92.8412 114.416H83.2501C79.6371 114.416 76.7081 117.354 76.7081 120.978L93.2297 120.978C95.5239 120.978 97.4727 120.447 99.0761 119.384C100.68 118.321 101.901 116.834 102.739 114.924C103.566 113.03 103.979 110.827 103.979 108.316Z"
                fill="#40404D"
              />
              <path
                d="M80.8159 95.8148C80.8159 93.25 81.214 91.0076 82.0103 89.0878C82.8186 87.168 84.0069 85.6782 85.5753 84.6185C87.1437 83.5741 89.0619 83.0519 91.33 83.0519L107.527 83.0519C107.527 86.6653 104.662 89.5946 101.128 89.5946L91.7101 89.5946C90.5881 89.5946 89.6229 89.7329 88.8146 90.0093C88.0184 90.2858 87.3669 90.6928 86.8602 91.2303C86.3535 91.7832 85.9795 92.4436 85.7382 93.2116C85.509 93.9795 85.3943 94.8549 85.3943 95.8379C85.3943 96.7748 85.509 97.6118 85.7382 98.349C85.9795 99.1016 86.3535 99.739 86.8602 100.261C87.3669 100.783 88.0184 101.183 88.8146 101.459C89.6229 101.751 90.5881 101.897 91.7101 101.897L98.5462 102.439C102.08 102.439 103.842 104.826 103.842 108.44H91.33C89.0861 108.44 87.1799 107.91 85.6115 106.85C84.0431 105.79 82.8488 104.308 82.0284 102.404C81.2201 100.515 80.8159 98.3183 80.8159 95.8148Z"
                fill="#F5F5FA"
              />
            </g>
            <path
              d="M149.688 26.8412C149.688 22.2661 153.396 18.5573 157.971 18.5573H320.199C324.774 18.5573 328.483 22.2661 328.483 26.8412H149.688Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      {isMobile ? (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[138px] z-40">  
          <div className="flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]" />
          </div>
          <div className="w-full flex  items-center justify-between mt-10">
            <IoArrowBackCircleOutline onClick={handlePrevStep} className="cursor-pointer h-10 w-10 text-black  border-[#D6D6E0] outline-[#D6D6E0]" />
            <IoArrowForwardCircleOutline onClick={handleNextStep} className="cursor-pointer h-10 w-10 text-black border-[#D6D6E0] outline-[#D6D6E0]" />
          </div>
        </div>
      ) : (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-5 z-40">
          <IoArrowBackCircleOutline onClick={handlePrevStep} className="text-xs font-extralight cursor-pointer h-10 w-10 text-white" />
          <div className="w-28 flex items-center gap-5 justify-center my-5">
            <div className="w-3 h-3 rounded-full border-[1.5px] border-[#96969c]" />
            <div className="w-3 h-3 rounded-full bg-[#F5F5FA]" />
          </div>
          <IoArrowForwardCircleOutline
            onClick={handleNextStep}
            className="text-xs font-light cursor-pointer h-10 w-10 text-white"
          />
        </div>
      )}
    </section>
  );
};

export default Step2;
