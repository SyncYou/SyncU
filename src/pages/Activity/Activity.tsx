import { useAlerts } from "../../context/useUserData";

const Activity = () => {
  const { alerts } = useAlerts();

  return (
    <section className="px-5 pt-5 md:py-6 md:px-[100px] w-full text-gray950">
      <div className="mb-2">
        <div className="mb-2">
          <h1 className="font-semibold text-lg md:text-2xl mb-2">
            Here are updates for you.
          </h1>
          <p className="font-normal text-sm md:text-base text-gray-800">
            Hello there👋! You have {alerts?.length} unread updates that need
            your attention.
          </p>
        </div>
        <div className="h-[60px] py-4">
          <div className="flex gap-4">
            <div className="h-7 py-1 px-3 rounded-full border-[1.5px] border-brand600 text-center cursor-pointer text-xs font-medium text-brand600 min-w-16">
              All
            </div>
            <div className="h-7 py-1 px-3 rounded-full border-[1.5px] border-gray300 text-center cursor-pointer text-xs font-medium min-w-16">
              Requests
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="py-3">
        <p>Today</p>
        <div className="flex flex-col gap-3">
        <div className="py-2 px-1  hover:bg-gray100 flex items-center gap-1 md:gap-4 relative">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray950 block rounded-[50%]"></div>
                <div className="font-normal text-gray700 text-sm">
                  <div className="flex gap-2">
                   <span className="px-1 text-black text-base font-semibold">Welcome to Syncu! 🥰
                    <span>1h</span>
                    </span>
                  </div>
                  <p className="text-sm md:text-base px-2">Take a quick tour 🚀 to see how it works and get started!</p>
                  <div className="w-4 h-4 rounded-full bg-brand600 absolute right-1 top-1/2 -translate-y-1/2 border border-white"></div>
                </div>
              </div>
          {alerts?.map((alert) => (
            <>
              <div className="p-2 hover:bg-gray100 flex items-center gap-4 relative">
                <div className="w-10 h-10 bg-gray950 block rounded-full"></div>
                <div className="font-normal text-gray700 text-sm">
                  <div className="flex gap-2">
                    <span className="text-base font-semibold text-gray900">
                      {alert.status === "accepted" &&
                        "Congratulations🎉 you're in!"}
                      {alert.status === "pending" && "Someone requested"}
                      {alert.status === "rejected" &&
                        "Sorry, you have been rejected "}
                    </span>
                    <span>1h</span>
                  </div>
                  <p className="">{alert.message}</p>
                  <div className="w-4 h-4 rounded-full bg-brand600 absolute right-2 top-[22px] border border-white"></div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        <p className="pt-4 text-center text-[#73737F] text-sm">That's all for now</p>
      </div>
    </section>
  );
};

export default Activity;