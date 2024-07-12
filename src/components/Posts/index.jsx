export default function Post() {
  return (
    <>
      <div className="border border-[#D1D5DB] rounded-lg shadow p-3">
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
            <p className="font-normal leading-[21px] text-[14px] text-[#6B7280] capitalize">collaboration</p>
          </div>
          <img src="/Dot.svg" alt="" />
          <div className="flex items-center gap-2">
            <img src="/users2.svg" alt="" />
            <small className="font-normal leading-[21px] text-[14px] text-[#6B7280]">8</small>
          </div>
          <img src="/Dot.svg" alt="" />
          {/* comments */}
          <div className="flex items-center gap-2">
            <img src="/comment.svg" alt="" />
            <small className="font-normal leading-[21px] text-[14px] text-[#6B7280]">1</small>
          </div>
        </div>

        <div className="pb-5 border-b border-[#D1D5DB]">
            {/* Project title */}
            <h1 className="font-semibold text-[20px] leading-[30px] text-[#1F2937]">Syncu</h1>
            {/* Project description */}
            <p className="text-[#374151]">SyncU is a collaborative platform that enables developers, designers, and other tech professionals to work om real-life projects, gain hands-...</p>
        </div>

        {/* Tags */}
        <div className="my-3 flex items-center gap-2">
            <button className="py-1 px-3 rounded-full border border-[#D1D5DB] flex items-center gap-2">
                <img src="/Figma.svg" alt="" />
                <small className="text-[#1F2937] leading-[21px] text-[14px]">Figma</small>
            </button>

            <button className="py-1 px-3 rounded-full border border-[#D1D5DB] flex items-center gap-2">
                {/* <img src="/Figma.svg" alt="" /> */}
                <small className="text-[#1F2937] leading-[21px] text-[14px]">Ui design</small>
            </button>
            <button className="py-1 px-3 rounded-full border border-[#D1D5DB] flex items-center gap-2">
                {/* <img src="/Figma.svg" alt="" /> */}
                <small className="text-[#1F2937] leading-[21px] text-[14px]">Front-end development</small>
            </button>
            <button className="py-1 px-3 rounded-full border border-[#D1D5DB] flex items-center gap-2">
                <img src="/React.svg" alt="" />
                <small className="text-[#1F2937] leading-[21px] text-[14px]">React</small>
            </button>
            <button className="py-1 px-3 rounded-full border border-[#D1D5DB] flex items-center gap-2">
                <img src="/Javascript.svg" alt="" />
                <small className="text-[#1F2937] leading-[21px] text-[14px]">JavaScript</small>
            </button>
        </div>

      </div>
    </>
  );
}
