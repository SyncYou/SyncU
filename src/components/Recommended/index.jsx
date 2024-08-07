import RecommendedCard from "./RecommendedCard";

export default function Recommended(){
    return(
        <>
        <article className="px-6">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-[15px] leading-[30px] text-[#1F2937]">Recommended connections</h1>
                <img className="cursor-pointer" src="/Refresh.svg" alt="" />
            </div>
            <div className="space-y-3">
                <RecommendedCard/>
                <RecommendedCard/>
                <RecommendedCard/>
                <div className="flex items-center gap-3 justify-center border border-[#E5E7EB] py-2 px-3 rounded-lg">
                <button className="text-[#374151] leading-6 font-medium">See more</button>
                <img src="/arrow-right.svg" alt="" />
                </div>
            </div>
        </article>
        </>
    )
}