import { useNavigate } from 'react-router-dom';
import dot from '/Dot.svg'
import users from '/users2.svg'
import comment from '/comment.svg'
export default function ProjectPost({ post, setShowDescription }) {
  const navigate = useNavigate()
  return (
    <>
      <div onClick={() => {
        // setShowDescription(prev => !prev)
        navigate(`/${post?.id}`)
      }} className="border border-[#D1D5DB] rounded-lg shadow p-3 space-y-2 z-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <img src={post?.author_icon} alt="" />
            <h1 className="font-medium leading-[21px] text-[14px] text-[#374151] capitalize">
              {post?.author}
            </h1>
            <small className="font-normal leading-[21px] text-[14px] text-[#6B7280]">
              {post?.time}
            </small>
          </div>
          <img src={dot} alt="" />
          {/* tag */}
          <div>
            <p className="font-normal leading-[21px] text-[14px] text-[#6B7280] capitalize">
              {post?.category}
            </p>
          </div>
          <img src={dot} alt="" />
          <div className="flex items-center gap-2">
            <img src={users} alt="" />
            <small className="font-normal leading-[21px] text-[14px] text-[#6B7280]">
              {post?.collaborators}
            </small>
          </div>
          <img src="/src/assets/Dot.svg" alt="" />
          {/* comments */}
          <div className="flex items-center gap-2">
            <img src={comment} alt="" />
            <small className="font-normal leading-[21px] text-[14px] text-[#6B7280]">
              {post?.comments}
            </small>
          </div>
        </div>

        <div className="pb-5 border-b border-[#D1D5DB]">
          {/* Project title */}
          <h1 className="font-semibold text-[20px] leading-[30px] text-[#1F2937]">
            {post?.title}
          </h1>
          {/* Project description */}
          <p className="text-[#374151]">{post?.description}</p>
        </div>

        {/* Tags */}
        <div className="max-w-[564px] relative flex items-center -z-10">
          <div className="my-3 flex items-center gap-2 w-full overflow-hidden">
            {post.tags &&
              post.tags.map((tag, index) => (
                <div
                  key={index}
                  className="py-1 px-5 rounded-full border border-[#D1D5DB] flex items-center justify-center space-x-2"
                >
                  {tag.icon && <img src={tag.icon} alt="" />}
                  <p className="text-[#1F2937] leading-[21px] text-[14px] whitespace-nowrap">
                    {tag.name}
                  </p>
                </div>
              ))}
          </div>
          {/* fader */}
          <div className="w-[32px] h-[78px] bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF66] absolute rotate-90 -right-3 -top-3"></div>
        </div>
      </div>
    </>
  );
}
