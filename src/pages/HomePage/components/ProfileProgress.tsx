const ProfileProgress = () => {
  return (
    <section className="fixed top-0 left-0 w-screen z-20 overflow-hidden flex justify-center items-center h-screen bg-[#12121266]">
      <div className="md:w-[824px] md:h-[674px] w-[358px] h-[458px] flex flex-col rounded-3xl gap-8 md:py-10 pt-6 pb-10 md:px-8 px-4 bg-white">
        <div className="md:h-[280px] h-[224px] w-full md:w-[484px] mx-auto bg-gray-50"></div>
        <div className="md:h-[282px] h-[138px] md:w-full flex flex-col text-center gap-4">
          <h2>2/4 completed</h2>
          <div className="md:grid md:grid-cols-2 flex w-full md:overflow-hidden overflow-x-scroll h-[114px] md:h-[242px] gap-5">
            <div className="md:min-w-[370px] min-w-[275px] py-3 px-4 rounded-2xl md:h-[108px] h-[88px] border border-gray200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="md:min-w-[370px] min-w-[275px] py-3 px-4 rounded-2xl md:h-[108px] h-[88px] border border-gray200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="md:min-w-[370px] min-w-[275px] py-3 px-4 rounded-2xl md:h-[108px] h-[88px] border border-gray200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="md:min-w-[370px] min-w-[275px] py-3 px-4 rounded-2xl md:h-[108px] h-[88px] border border-gray200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileProgress;
