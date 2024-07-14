export default function Post() {
  return (
    <>
      <div className="border border-[#D1D5DB] rounded-lg shadow p-3 space-y-2 z-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <img src="/vergil.svg" alt="" />
            <h1 className="font-medium leading-[21px] text-[14px] text-[#374151] capitalize">
              vergil
            </h1>
            <small className="font-normal leading-[21px] text-[14px] text-[#6B7280]">
              posted 1 hr ago
            </small>
          </div>
          <img src="/Dot.svg" alt="" />
          {/* tag */}
          <div>
            <p className="font-normal leading-[21px] text-[14px] text-[#6B7280] capitalize">
              collaboration
            </p>
          </div>
          <img src="/Dot.svg" alt="" />
          <div className="flex items-center gap-2">
            <img src="/users2.svg" alt="" />
            <small className="font-normal leading-[21px] text-[14px] text-[#6B7280]">
              8
            </small>
          </div>
          <img src="/Dot.svg" alt="" />
          {/* comments */}
          <div className="flex items-center gap-2">
            <img src="/comment.svg" alt="" />
            <small className="font-normal leading-[21px] text-[14px] text-[#6B7280]">
              1
            </small>
          </div>
        </div>

        <div className="pb-5 border-b border-[#D1D5DB]">
          {/* Project title */}
          <h1 className="font-semibold text-[20px] leading-[30px] text-[#1F2937]">
            Syncu
          </h1>
          {/* Project description */}
          <p className="text-[#374151]">
            SyncU is a collaborative platform that enables developers,
            designers, and other tech professionals to work om real-life
            projects, gain hands-...
          </p>
        </div>

        {/* Tags */}
        <div className="max-w-[564px] relative flex items-center -z-10">
          <div className="my-3 flex items-center gap-2 w-full overflow-hidden">
            <div className="py-1 px-5 rounded-full border border-[#D1D5DB] flex items-center justify-center space-x-2">
              <img src="/Figma.svg" alt="" />
              <p className="text-[#1F2937] leading-[21px] text-[14px] whitespace-nowrap">
                Figma
              </p>
            </div>

            <div className="py-1 px-5 rounded-full border border-[#D1D5DB] flex items-center justify-center space-x-2">
              {/* <img src="/Figma.svg" alt="" /> */}
              <p className="text-[#1F2937] leading-[21px] text-[14px] whitespace-nowrap">
                Ui design
              </p>
            </div>
            <div className="py-1 px-5 rounded-full border border-[#D1D5DB] flex items-center justify-center space-x-2">
              {/* <img src="/Figma.svg" alt="" /> */}
              <p className="text-[#1F2937] leading-[21px] text-[14px] whitespace-nowrap">
                Front-end development
              </p>
            </div>
            <div className="py-1 px-5 rounded-full border border-[#D1D5DB] flex items-center justify-center space-x-2">
              <img src="/React.svg" alt="" />
              <p className="text-[#1F2937] leading-[21px] text-[14px] whitespace-nowrap">
                React
              </p>
            </div>
            <div className="py-1 px-5 rounded-full border border-[#D1D5DB] flex items-center justify-center space-x-2">
              <img src="/Javascript.svg" alt="" />
              <p className="text-[#1F2937] leading-[21px] text-[14px] whitespace-nowrap">
                JavaScript
              </p>
            </div>
          </div>
          {/* fader */}
          <div className="w-[32px] h-[78px] bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF66] absolute rotate-90 -right-3 -top-3"></div>
        </div>
      </div>
    </>
  );
}
