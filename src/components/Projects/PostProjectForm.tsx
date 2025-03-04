import { useState } from "react";
import Overlay from "../Reuseables/Overlay";
import SubSection from "../Reuseables/SubSection";
import WorkSpace from "../Reuseables/Workspace";
import PrimaryButton from "../Reuseables/PrimaryButton";
import IndustryModal from "../Reuseables/IndustryModal";
import SecondaryButton from "../Reuseables/SecondaryButton";
import Chip from "../Reuseables/Chip";
import { FaCheck } from "react-icons/fa";
import DropDown from "../Reuseables/DropDown";
import useAddRolesAndStacks from "../../hooks/useAddRolesAndStacks";
import { WorkSpaceType } from "../../utils/types/Types";
import usePostProject from "../../hooks/usePostProject";
import { Loading } from "../Reuseables/Loading";
import { useQueryClient } from "@tanstack/react-query";
import useDisplayPostProjectForm from "../../context/useDisplayPostProjectForm";
import { Contributors } from "../../utils/StacksSuggestions";

type Contributor = {
  username: string;
  email: string;
  role: string;
  image?: string;
}

function PostProjectForm() {
  const client = useQueryClient();
  const [workspace, setWorkspace] = useState<WorkSpaceType>("Slack");
  const {
    addRole,
    addContributor,
    addStack,
    removeRole,
    removeStack,
    removeContributor,
    roles,
    contributors,
    stacks,
    typedRole,
    typedStack,
    typedContributor,
    handleTypedRole,
    handleTypedStack,
    handleTypedContributor,
  } = useAddRolesAndStacks();
  const { validate, status, register, handleSubmit, reset } = usePostProject();
  const { show, setShow } = useDisplayPostProjectForm();
  const [showInviteModal, setShowInviteModal ] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    industry: "",
    description: "",
  })
  const [suggestedContributors, setSuggestedContributors] = useState<Contributor[]>(Contributors);
  const [modal, setModal] = useState<boolean>(false)
  const handleIndustrySelect = (industry: string) => {
    setProjectDetails(prev => {
      setModal(false)
      return {...prev, industry}
    })
  }
  const maxChars = 50; // Set character limit

  const handleWorkspaceChange = (text: WorkSpaceType) => {
    setWorkspace(text);
  };

  if (show) {
    return (
      <Overlay>
        <form
          onSubmit={handleSubmit(async (data) => {
            const otherData = {
              workspace,
              roles,
              stacks,
            };

            const valid = await validate(data, otherData);
            if (valid) {
              console.log("Form validated");
              await client.invalidateQueries({
                queryKey: ["projects"],
              });
            } else {
              console.log("Form not valid");
            }

            if (status === "success") {
              reset();
            }
          })}
          className="h-[699px] w-[770px] rounded-[20px] bg-white"
        >
          <SubSection header="Post project" state={() => setShow(false)} />
          <div className="w-full h-[539px] flex flex-col gap-6 p-6 overflow-auto">
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
                      minLength: 5,
                    })}
                    placeholder="For e.g, Milk shopper"
                    onChange={(e) => {
                      if (e.target.value.length <= maxChars) {
                        setProjectDetails(prev => ({...prev, title: e.target.value}));
                      }
                    }}
                    type="text"
                    name="title"
                    value={projectDetails.title || ""}
                    id="title"
                    className="w-full h-full text-[#40404D] pt-4 px-3 outline-none border rounded-lg focus:border-brand400 placeholder:text-sm placeholder:text-gray400 text-base"
                  />
                  <label
                    className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                    htmlFor="title"
                  >
                    Project title
                  </label>
                </div>
                <p className={`text-right font-normal text-xs ${projectDetails.title.length > maxChars - 10 ? "text-red-500" : "text-gray-600"}`}>
                    {projectDetails.title.length} / {maxChars} characters
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-sm font-medium text-gray950">
                What industry are you focused on?*
              </h2>
              <div className="w-[435px] h-[60px] relative">
                <div className="w-full flex items-center justify-between px-2 relative h-full">
                  <input
                    {...register("industry", {
                      required: true,
                    })}
                    name="Industry"
                    type="text"
                    placeholder="Select one---"
                    value={projectDetails.industry || ""}
                    onClick={() => setModal(() => true)}
                    readOnly
                    className="w-full text-[#40404D] text-base placeholder:text-sm placeholder:text-gray400 h-full pt-4 px-2 outline-none border rounded-lg focus:border-brand400"
                  />
                  <svg className="absolute right-5 top-1/2 -translate-y-1/2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0307 15.97C17.1004 16.0396 17.1557 16.1223 17.1935 16.2134C17.2312 16.3044 17.2506 16.402 17.2506 16.5006C17.2506 16.5992 17.2312 16.6967 17.1935 16.7878C17.1557 16.8788 17.1004 16.9616 17.0307 17.0312L12.5307 21.5312C12.461 21.6009 12.3783 21.6563 12.2873 21.694C12.1962 21.7318 12.0986 21.7512 12.0001 21.7512C11.9015 21.7512 11.8039 21.7318 11.7128 21.694C11.6218 21.6563 11.5391 21.6009 11.4694 21.5312L6.96943 17.0312C6.82869 16.8905 6.74963 16.6996 6.74963 16.5006C6.74963 16.3016 6.82869 16.1107 6.96943 15.97C7.11016 15.8292 7.30103 15.7502 7.50005 15.7502C7.69907 15.7502 7.88995 15.8292 8.03068 15.97L12.0001 19.9403L15.9694 15.97C16.0391 15.9002 16.1218 15.8449 16.2128 15.8072C16.3039 15.7694 16.4015 15.75 16.5001 15.75C16.5986 15.75 16.6962 15.7694 16.7873 15.8072C16.8783 15.8449 16.961 15.9002 17.0307 15.97ZM8.03068 8.03122L12.0001 4.0609L15.9694 8.03122C16.1102 8.17195 16.301 8.25101 16.5001 8.25101C16.6991 8.25101 16.8899 8.17195 17.0307 8.03122C17.1714 7.89048 17.2505 7.69961 17.2505 7.50059C17.2505 7.30157 17.1714 7.1107 17.0307 6.96996L12.5307 2.46996C12.461 2.40023 12.3783 2.34491 12.2873 2.30717C12.1962 2.26943 12.0986 2.25 12.0001 2.25C11.9015 2.25 11.8039 2.26943 11.7128 2.30717C11.6218 2.34491 11.5391 2.40023 11.4694 2.46996L6.96943 6.96996C6.82869 7.1107 6.74963 7.30157 6.74963 7.50059C6.74963 7.69961 6.8287 7.89048 6.96943 8.03121C7.11016 8.17195 7.30103 8.25101 7.50005 8.25101C7.69907 8.25101 7.88995 8.17195 8.03068 8.03122Z" fill="#73737F"/>
                  </svg>
                </div>
                <label
                  className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                  htmlFor="title"
                >
                  Industry
                </label>
                              {/* Country Modal */}
                {modal && (
                  <div className="absolute top-[4rem] left-0 p-2 z-10 w-full h-[200px] bg-[#ffffff] rounded-xl shadow-lg shadow-[#6969691A] border mx-auto">
                    <IndustryModal onSelectIndustry={handleIndustrySelect} />
                  </div>
                )}
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
                      maxLength: 1000,
                      required: true,
                      minLength: 80,
                    })}
                    value={projectDetails.description}
                    onChange={(e) => {
                      if (e.target.value.length <= maxChars) {
                        setProjectDetails(prev => ({...prev, description: e.target.value}));
                      }
                    }}
                    placeholder="Tell us about your project..."
                    className="w-full h-[274px] text-[#40404D] placeholder:text-sm placeholder:text-gray400 pt-6 px-3 outline-none border rounded-lg focus:border-brand400"
                  ></textarea>
                  <label
                    className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                    htmlFor="description"
                  >
                    Description
                  </label>
                </div>
                <p className="text-right font-normal text-xs text-gray700">
                  {projectDetails.description.split(' ').length}/1000 words
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-sm font-medium text-gray950">
                What roles do you require for this project?*
              </h2>
              <div className="min-h-20 flex flex-col gap-1 relative">
                <label htmlFor="role">
                  <div className="flex flex-wrap gap-1 w-[435px] min-h-[60px] relative pt-8 pb-4 px-2 outline-none border rounded-lg">
                    <label
                      className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                      htmlFor="title"
                    >
                      Roles
                    </label>
                    {roles?.map((role) => (
                      <Chip className="bg-[#f3ecfcce] text-brand600 flex gap-3">
                        {role}{" "}
                        <span
                          onClick={() => removeRole(role)}
                          className="cursor-pointer font-semibold"
                        >
                          x
                        </span>
                      </Chip>
                    ))}

                    {roles.length < 10 && (
                      <input
                        id="role"
                        type="text"
                        value={typedRole}
                        onChange={handleTypedRole}
                        className="outline-none w-40"
                      />
                    )}
                  </div>
                </label>
                <p className="text-right font-normal text-xs text-gray700">
                  min of 3 and a max of 10
                </p>
                {typedRole != "" && (
                  <div
                     className="overflow-auto absolute -bottom-40 z-10 w-full h-40 bg-white rounded-xl border border-gray200"
                   >
                    <DropDown
                      type="roles"
                      setSuggestedContributors={setSuggestedContributors}
                      handleAddition={addRole}
                      input={typedRole}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-sm font-medium text-gray950">
                What stack do you require for this project?*
              </h2>
              <label htmlFor="stack">
                <div className="min-h-[120px] flex flex-col gap-1 relative">
                  <div className="flex flex-wrap gap-1 w-[435px] min-h-[129px] relative pt-2 pb-4 px-3 border flex-col border-gray200 rounded-lg">
                    <label
                      className=" font-medium text-gray950 text-xs"
                      htmlFor="stack"
                    >
                      Stacks/skills
                    </label>

                    <div className="flex flex-wrap gap-1">
                      {stacks?.map((stack) => (
                        <Chip className="bg-[#f3ecfcce] h-fit text-brand600 flex gap-3">
                          {stack}
                          <span
                            onClick={() => removeStack(stack)}
                            className="cursor-pointer font-semibold"
                          >
                            x
                          </span>
                        </Chip>
                      ))}

                      {stacks.length < 10 && (
                        <input
                          id="stack"
                          type="text"
                          value={typedStack}
                          onChange={handleTypedStack}
                          className="outline-none w-40"
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-right font-normal text-xs text-gray700">
                    min of 3 and a max of 10
                  </p>
                  {typedStack != "" && (
                    <div className="overflow-auto absolute -bottom-40 z-10 w-full h-40 bg-white rounded-xl border border-gray200">

                      <DropDown
                        type="stacks"
                        setSuggestedContributors={setSuggestedContributors}
                        handleAddition={addStack}
                        input={typedStack}
                      />
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="flex justify-between">
              <h2 className="text-sm font-medium text-gray950">
                Select your preferred workspace.*
              </h2>
              <div className="flex flex-col gap-4 w-[435px]">
                <div className="flex gap-4">
                  <input
                    type="radio"
                    className="accent-brand-600 w-5 h-5"
                    checked={workspace === "Slack"}
                    onChange={() => handleWorkspaceChange("Slack")}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <WorkSpace workspace="Slack" />
                      <p className="text-sm font-medium">Slack</p>
                    </div>
                    {workspace === "Slack" && (
                      <div className="relative h-[60px] w-[389px]">
                        <input
                          {...register("workspace.url", {
                            required: true,
                          })}
                          type="text"
                          className={`h-[60px] w-full text-gray800 ${
                            true && "border-alert-600 focus:border-alert-600"
                          } font-normal text-base pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400`}
                        />
                        <label
                          className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                          htmlFor="workspace-url"
                        >
                          Workspace URL
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <input
                    type="radio"
                    className="accent-brand-600 w-5 h-5"
                    checked={workspace === "Discord"}
                    onChange={() => handleWorkspaceChange("Discord")}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <WorkSpace workspace="Discord" />
                      <p className="text-sm font-medium">Discord</p>
                    </div>
                    {workspace === "Discord" && (
                      <div className="relative h-[60px] w-[389px]">
                        <input
                          {...register("workspace.url", {
                            required: true,
                          })}
                          type="text"
                          className={`h-[60px] w-full text-gray800 ${
                            true && "border-alert-600 focus:border-alert-600"
                          } font-normal text-base pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400`}
                        />
                        <label
                          className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                          htmlFor="workspace-url"
                        >
                          Workspace URL
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <input
                    className="accent-brand-600 w-5 h-5"
                    type="radio"
                    checked={workspace === "Microsoft teams"}
                    onChange={() => handleWorkspaceChange("Microsoft teams")}
                  />
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <WorkSpace workspace="Microsoft teams" />
                      <p className="text-sm font-medium">Microsoft teams</p >
                    </div>
                    {workspace === "Microsoft teams" && (
                      <div className="relative h-[60px] w-[389px]">
                        <input
                          {...register("workspace.url", {
                            required: true,
                          })}
                          type="text"
                          className={`h-[60px] w-full text-gray800 ${
                            true && "border-alert-600 focus:border-alert-600"
                          } font-normal text-base pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400`}
                        />
                        <label
                          className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                          htmlFor="workspace-url"
                        >
                          Workspace URL
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {status === "pending" && <Loading />}
          </div>
          <div className="w-full h-[84px] border-t border-gray200 px-8 pb-6 pt-4 flex justify-end  gap-4">
            <div onClick={() => {
                setShow(false)
                setShowInviteModal(true)
                console.log(showInviteModal, 'Modal')
            }}>
              <PrimaryButton type="submit" classes="w-[120px] h-10 gap-0 ">
                <span className="font-normal text-sm">Post Project</span>
              </PrimaryButton>
            </div>
            <div onClick={() => setShow(false)}>
              <SecondaryButton classes="w-[120px] h-10 gap-0">
                <span className="font-norma text-sm">Cancel</span>
              </SecondaryButton>
            </div>
          </div>
        </form>
      </Overlay>
    )
  } 
  else if (showInviteModal) {
    return (<Overlay>
      <div className="h-[37.7rem] w-[35.5rem] bg-white shadow rounded-2xl relative">
        <div className="py-[10px] px-5 shadow flex justify-between items-center">
          <h2 className="font-semibold text-lg">Invite Contributors to join you</h2>
          <div className="cursor-pointer" onClick={() => setShowInviteModal(false)}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5399 31.3409C13.9541 31.9266 13.9541 32.8764 14.5399 33.4623C15.1257 34.048 16.0755 34.048 16.6612 33.4623L33.4612 16.6622C34.0471 16.0764 34.0471 15.1267 33.4612 14.5409C32.8755 13.9551 31.9257 13.9551 31.3399 14.5409L14.5399 31.3409Z" fill="#A6A6B5"/>
              <path d="M16.6612 14.5409C16.0755 13.9551 15.1257 13.9551 14.5399 14.5409C13.9541 15.1267 13.9541 16.0764 14.5399 16.6622L31.34 33.4623C31.9257 34.048 32.8755 34.048 33.4612 33.4623C34.047 32.8764 34.047 31.9266 33.4612 31.3409L16.6612 14.5409Z" fill="#A6A6B5"/>
            </svg>
          </div>

        </div>
        <div className="">
          <div className="min-h-20 flex flex-col gap-1 relative">
            <label htmlFor="role" className="px-5 py-5">
              <div className="flex flex-wrap gap-1 w-full  flex-col min-h-[129px] relative pt-2 pb-4 px-2 outline-none border rounded-lg">
                <label
                  className="font-medium text-gray950 text-xs"
                  htmlFor="title"
                >
                  Invite via email
                </label>
                <div className="flex gap-1 flex-wrap">
                  {contributors?.map((contributor) => (
                    <div key={contributor}>
                      <Chip className="bg-[#f3ecfcce] text-brand600 flex gap-3">
                        {contributor}{" "}
                        <span
                          onClick={() => {
                            removeContributor(contributor)
                            const removed = Contributors.filter(r => r.email.toLowerCase() === contributor.toLowerCase() )
                            setSuggestedContributors(prev => [...prev, ...removed] )
                          }}
                          className="cursor-pointer font-semibold"
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3607 3.63613C12.6862 3.96159 12.6862 4.4892 12.3607 4.81464L4.81827 12.3571C4.49281 12.6826 3.96521 12.6826 3.63976 12.3571C3.3143 12.0317 3.3143 11.5041 3.63976 11.1786L11.1822 3.63613C11.5077 3.31069 12.0353 3.31067 12.3607 3.63613Z" fill="#8333D0"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.63926 3.63613C3.96472 3.31067 4.49233 3.31069 4.81777 3.63613L12.3602 11.1786C12.6857 11.5041 12.6857 12.0317 12.3602 12.3571C12.0348 12.6826 11.5072 12.6826 11.1817 12.3571L3.63926 4.81464C3.31382 4.4892 3.3138 3.96159 3.63926 3.63613Z" fill="#8333D0"/>
                          </svg>

                        </span>
                      </Chip>
                    </div>
                  ))}

                  {contributors.length < 10 && (
                    <input
                      id="role"
                      type="text"
                      value={typedContributor}
                      onChange={handleTypedContributor}
                      className="outline-none w-40"
                    />
                  )}
                </div>
              </div>
            </label>
            {typedContributor != "" && (
              <div
                  className="overflow-auto absolute -bottom-40 z-10 w-full h-40 bg-white rounded-xl border border-gray200"
                >
                <DropDown
                  type="contributors"
                  handleAddition={addContributor}
                  suggestedContributors={suggestedContributors}
                  setSuggestedContributors={setSuggestedContributors}
                  input={typedContributor}
                />
              </div>
            )}
          </div>
          <div className="px-5 text-[#73737F]">
            <h3>Recommended</h3>
            <div className="bg-[rgb(245,245,250)] max-h-[270px] overflow-scroll mt-2 rounded-xl px-4 flex flex-col gap-3 py-3">
              {Contributors.map((contributor, _ )=> (
                <div 
                  key={`contributor ${_}`} 
                  className="flex gap-3 cursor-pointer"
                  onClick={() => {
                      const newContributors = suggestedContributors?.filter(
                        (s) => s.email.toLowerCase() !== contributor.email.toLowerCase()
                      );
                      setSuggestedContributors(() => newContributors);
                      addContributor(contributor.email);
                  }}>
                    {
                      contributor.image? 
                      <img src={contributor.image} height="40" width="40" className="rounded-full" /> :
                      <div className="h-10 w-10 rounded-full bg-white"></div>
                    }
                    <div className="flex justify-between w-full items-center">
                      <div className="flex flex-col gap-[2px] justify-center">
                        <p className="text-sm text-black">{contributor.username}</p>
                        <p className="text-xs">{contributor.role}</p>
                      </div>
                      <div>
                        <div className={`w-5 h-5 rounded-full relative ${contributors.includes(contributor.email)? "bg-[#7F56D9]" : "border border-[#A6A6B5]"}`} >
                          { contributors.includes(contributor.email) && (
                            <FaCheck className="text-white text-sm absolute top-1/2 right-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                          )
                          }
                        </div>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute px-2 rounded-2xl  right-0 bg-white left-0 bottom-0 shadow-lg h-[5.3rem] flex items-center justify-end gap-2">
          <div onClick={() => {
                setShowInviteModal(false)
            }}>
              <PrimaryButton type="submit" classes="w-[160px] h-[44px] gap-0 ">
                <span className="font-normal text-base">Send Invite</span>
              </PrimaryButton>
            </div>
            <div onClick={() => setShowInviteModal(false)}>
              <SecondaryButton classes="w-[160px] h-[44px] gap-0">
                <span className="font-norma text-base">Skip</span>
              </SecondaryButton>
            </div> 
        </div>
      </div>
    </Overlay>)
  }
  else {
    return <></>;
  }
}

export default PostProjectForm;
