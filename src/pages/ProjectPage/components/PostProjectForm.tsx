import { useForm } from "react-hook-form";
import Overlay from "../../../components/Overlay";
import SubSection from "../../../components/SubSection";

interface PostProjectFormType {
  created_at: string;
  created_by: string;
  description: string;
  id: string;
  industry: string;
  participants: string[];
  project_views: number;
  requests: {
    userId: string;
    status: string;
  }[];
  required_roles: string[];
  required_stacks: string[];
  title: string;
  updated_at?: string;
  username?: string;
}

function PostProjectForm() {
  const { register } = useForm<PostProjectFormType>({
    defaultValues: {
      created_at: "",
      created_by: "",
      description: "",
      id: "",
      industry: "",
      participants: [],
      project_views: 0,
      requests: [],
      required_roles: [],
      required_stacks: [],
      title: "",
      updated_at: "",
      username: "",
    },
  });
  return (
    <Overlay>
      <div className="h-[699px] w-[770px] rounded-[20px] bg-white">
        <SubSection header="Post project" />
        <form className="w-full h-[539px] flex flex-col gap-6 p-6 overflow-auto">
          <div className="flex justify-between">
            <h2 className="text-sm font-medium text-gray950">
              What is your project title?*
            </h2>
            <div className="h-20 flex flex-col gap-1">
              <div className="w-[435px] h-[60px] relative">
                <input
                  {...register("title", {
                    required: true,
                    maxLength: 50,
                  })}
                  placeholder="For e.g, Milk shopper"
                  type="text"
                  name="title"
                  id="title"
                  className="w-full h-full pt-4 px-3 outline-none border rounded-lg focus:border-brand400 placeholder:text-sm placeholder:text-gray400"
                />
                <label
                  className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                  htmlFor="title"
                >
                  Project title
                </label>
              </div>
              <p className="text-right font-normal text-xs text-gray700">
                0/50 words
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-sm font-medium text-gray950">
              What industry are you focused on?*
            </h2>
            <div className="w-[435px] h-[60px] relative">
              <select
                {...register("industry", {
                  required: true,
                })}
                name="title"
                id="title"
                className="w-full text-sm !text-gray400 h-full pt-4 px-2 outline-none border rounded-lg focus:border-brand400"
              >
                <option value="">Select one---</option>
              </select>
              <label
                className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                htmlFor="title"
              >
                Industry
              </label>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-sm font-medium text-gray950">
              Describe your project?*
            </h2>
            <div className="flex flex-col gap-1">
              <div className="w-[435px] relative">
                <textarea
                  {...register("description", {
                    required: true,
                    maxLength: 1000,
                  })}
                  placeholder="Tell us about your project..."
                  name="title"
                  id="title"
                  className="w-full h-[274px] placeholder:text-sm placeholder:text-gray400 pt-6 px-3 outline-none border rounded-lg focus:border-brand400"
                ></textarea>
                <label
                  className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                  htmlFor="title"
                >
                  Description
                </label>
              </div>
              <p className="text-right font-normal text-xs text-gray700">
                0/1000 words
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-sm font-medium text-gray950">
              What roles do you require for this project?*
            </h2>
            <div className="h-20 flex flex-col gap-1">
              <div className="w-[435px] h-[60px] relative">
                <input
                  {...register("required_roles", {
                    required: true,
                  })}
                  placeholder="Type a role"
                  type="text"
                  name="title"
                  id="title"
                  className="w-full h-full pt-4 px-3 outline-none border rounded-lg focus:border-brand400 placeholder:text-sm placeholder:text-gray400"
                />
                <label
                  className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                  htmlFor="title"
                >
                  Roles
                </label>
              </div>
              <p className="text-right font-normal text-xs text-gray700">
                min of 3 and a max of 10
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-sm font-medium text-gray950">
              What skills/stacks are required for this project?*
            </h2>
            <div className="h-[149px] flex flex-col gap-1">
              <div className="w-[435px] h-[129px] relative">
                <textarea
                  {...register("required_stacks", {
                    required: true,
                  })}
                  name="title"
                  id="title"
                  className="w-full h-full pt-6 px-3 outline-none border rounded-lg focus:border-brand400 placeholder:text-sm placeholder:text-gray400"
                />
                <label
                  className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                  htmlFor="title"
                >
                  Skills/stacks
                </label>
              </div>
              <p className="text-right font-normal text-xs text-gray700">
                Min of 3 and a max of 10
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-sm font-medium text-gray950">
              Select your preferred workspace.*
            </h2>
            <div className="flex flex-col gap-4 w-[435px]">
              <div className="flex gap-4">
                <input type="radio" />
                <h2>Slack</h2>
              </div>
              <div className="flex gap-4">
                <input type="radio" />
                <h2>Discord</h2>
              </div>
              <div className="flex gap-4">
                <input type="radio" />
                <h2>Microsoft teams</h2>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Overlay>
  );
}

export default PostProjectForm;
