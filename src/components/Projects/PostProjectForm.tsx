import { useState } from "react";
import Overlay from "../Reuseables/Overlay";
import SubSection from "../Reuseables/SubSection";
import WorkSpace from "../Reuseables/Workspace";
import PrimaryButton from "../Reuseables/PrimaryButton";
import SecondaryButton from "../Reuseables/SecondaryButton";
import Chip from "../Reuseables/Chip";
import DropDown from "../Reuseables/DropDown";
import useAddRolesAndStacks from "../../hooks/useAddRolesAndStacks";
import { WorkSpaceType } from "../../utils/types/Types";
import usePostProject from "../../hooks/usePostProject";
import { Loading } from "../Reuseables/Loading";
import { useQueryClient } from "@tanstack/react-query";
import useDisplayPostProjectForm from "../../context/useDisplayPostProjectForm";
import { errorToast } from "oasis-toast";
import { validateUrl } from "../../utils/ValidateUrl";

function PostProjectForm() {
  const client = useQueryClient();
  const [workspace, setWorkspace] = useState<WorkSpaceType>("Slack");
  const {
    addRole,
    addStack,
    removeRole,
    removeStack,
    roles,
    stacks,
    typedRole,
    typedStack,
    handleTypedRole,
    handleTypedStack,
  } = useAddRolesAndStacks();
  const { validate, status, register, handleSubmit, reset, errors, title, description } = usePostProject();
  const { show, setShow } = useDisplayPostProjectForm();

  const handleWorkspaceChange = (text: WorkSpaceType) => {
    setWorkspace(text);
  };

  if (!show) {
    return <></>;
  } else {
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
              errorToast("Error", "Form not valid")
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
                    required: "Title is required",
                    minLength: {
                      value: 5,
                      message: "Title must be at least 5 characters",
                    },
                    maxLength: {
                      value: 50,
                      message: "Title cannot exceed 50 characters",
                    },
                  })}
                    placeholder="For e.g, Milk shopper"
                    type="text"
                    name="title"
                    id="title"
                    className={`w-full h-full pt-4 px-3 outline-none border rounded-lg focus:border-brand400 placeholder:text-sm placeholder:text-gray400 ${
                      errors.title ? "border-alert-600" : ""
                    }`}
                  />
                  <label
                    className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                    htmlFor="title"
                  >
                    Project title
                  </label>
                </div>
                {errors.title && (
                <p className="text-alert-600 text-xs mt-1">{errors.title.message}</p>
              )}
              <p className="text-right font-normal text-xs text-gray700">
                {title?.length || 0}/50 words
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
                  required: "Industry is required",
                })}
                className={`w-full text-sm !text-gray400 h-full pt-4 px-2 outline-none border rounded-lg focus:border-brand400 ${
                  errors.industry ? "border-alert-600" : ""
                }`}
              >
                  <option value="">Select one---</option>
                  <option value="Tech">Tech</option>
                </select>
                <label
                  className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                  htmlFor="title"
                >
                  Industry
                </label>
                {errors.industry && (
                <p className="text-alert-600 text-xs mt-1">{errors.industry.message}</p>
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
                      required: "Description is required",
                      minLength: {
                        value: 80,
                        message: "Description must be at least 80 characters",
                      },
                      maxLength: {
                        value: 1000,
                        message: "Description cannot exceed 1000 characters",
                      },
                    })}
                    placeholder="Tell us about your project..."
                    className={`w-full h-[274px] placeholder:text-sm placeholder:text-gray400 pt-6 px-3 outline-none border rounded-lg focus:border-brand400 ${
                      errors.description ? "border-alert-600" : ""
                    }`}
                  ></textarea>
                  <label
                    className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                    htmlFor="description"
                  >
                    Description
                  </label>
                </div>
                {errors.description && (
                <p className="text-alert-600 text-xs mt-1">{errors.description.message}</p>
              )}
              <p className="text-right font-normal text-xs text-gray700">
                {description?.length || 0}/1000 words
              </p>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-sm font-medium text-gray950">
                What roles do you require for this project?*
              </h2>
              <div className="min-h-20 flex flex-col gap-1 relative">
                <div
                className={`flex flex-wrap gap-1 w-[435px] min-h-[60px] relative pt-6 pb-4 px-3 outline-none border rounded-lg ${
                  errors.required_roles ? "border-alert-600" : ""
                }`}>
                  <label
                    className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                    htmlFor="title"
                  >
                    Roles
                  </label>
                  {roles?.map((role, index) => (
                    <Chip key={index} className="border-brand600 bg-brand-400 text-brand600">
                      {role}{" "}
                      <span
                        onClick={() => removeRole(role)}
                        className="cursor-pointer"
                      >
                        x
                      </span>
                    </Chip>
                  ))}

                  {roles.length < 10 && (
                    <input
                      type="text"
                      value={typedRole}
                      onChange={handleTypedRole}
                      className="outline-none w-40"
                    />
                  )}
                </div>
                {errors.required_roles && (
                <p className="text-alert-600 text-xs mt-1">{errors.required_roles.message}</p>
              )}
                <p className="text-right font-normal text-xs text-gray700">
                  min of 3 and a max of 10
                </p>
                {typedRole != "" && (
                  <DropDown
                    type="roles"
                    handleAddition={addRole}
                    input={typedRole}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-sm font-medium text-gray950">
                What stack do you require for this project?*
              </h2>
              <div className="min-h-[120px] flex flex-col gap-1 relative">
                <div  className={`flex flex-wrap gap-1 w-[435px] min-h-[129px] relative pt-6 pb-4 px-3 border rounded-lg ${
                  errors.required_stacks ? "border-alert-600" : ""
                }`}>
                  <label
                    className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                    htmlFor="title"
                  >
                    Stacks/skills
                  </label>
                  {stacks?.map((stack, index) => (
                    <Chip key={index} className="border-brand600 bg-brand-400 text-brand600">
                      {stack}
                      <span
                        onClick={() => removeStack(stack)}
                        className="cursor-pointer ml-2"
                      >
                        x
                      </span>
                    </Chip>
                  ))}
                  {stacks.length < 10 && (
                    <input
                      type="text"
                      value={typedStack}
                      onChange={handleTypedStack}
                      className="outline-none w-40 h-5"
                    />
                  )}
                </div>
                {errors.required_stacks && (
                <p className="text-alert-600 text-xs mt-1">{errors.required_stacks.message}</p>
              )}
                <p className="text-right font-normal text-xs text-gray700">
                  min of 3 and a max of 10
                </p>
                {typedStack != "" && (
                  <DropDown
                    type="stacks"
                    handleAddition={addStack}
                    input={typedStack}
                  />
                )}
              </div>
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
                      <h2>Slack</h2>
                    </div>
                    {workspace === "Slack" && (
                      <div className="relative h-[60px] w-[389px]">
                        <input
                        {...register("workspace.url", {
                          required: "Workspace URL is required",
                          validate: (value) =>
                            validateUrl(value) || "Invalid workspace URL",
                        })}
                          type="text"
                          className={`h-[60px] w-full text-gray800 ${
                            errors.workspace?.url ? "border-alert-600 focus:border-alert-600" : ""
                          } font-normal text-base pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400`}
                        />
                        <label
                          className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                          htmlFor="workspace-url"
                        >
                          Workspace URL
                        </label>
                        {errors.workspace?.url && (
                        <p className="text-alert-600 text-xs my-1">{errors.workspace.url.message}</p>
                      )}
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
                      <h2>Discord</h2>
                    </div>
                    {workspace === "Discord" && (
                      <div className="relative h-[60px] w-[389px]">
                        <input
                         {...register("workspace.url", {
                          required: "Workspace URL is required",
                          validate: (value) =>
                            validateUrl(value) || "Invalid workspace URL",
                        })}
                          type="text"
                          className={`h-[60px] w-full text-gray800 ${
                            errors.workspace?.url ? "border-alert-600 focus:border-alert-600" : ""
                          } font-normal text-base pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400`}
                        />
                        <label
                          className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                          htmlFor="workspace-url"
                        >
                          Workspace URL
                        </label>
                        {errors.workspace?.url && (
                        <p className="text-alert-600 text-xs my-1">{errors.workspace.url.message}</p>
                      )}
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
                      <h2>Microsoft teams</h2>
                    </div>
                    {workspace === "Microsoft teams" && (
                      <div className="relative h-[60px] w-[389px]">
                        <input
                          {...register("workspace.url", {
                            required: "Workspace URL is required",
                            validate: (value) =>
                              validateUrl(value) || "Invalid workspace URL",
                          })}
                          type="text"
                          className={`h-[60px] w-full text-gray800 ${
                            errors.workspace?.url ? "border-alert-600 focus:border-alert-600" : ""
                          } font-normal text-base pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400`}
                        />
                        <label
                          className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                          htmlFor="workspace-url"
                        >
                          Workspace URL
                        </label>
                        {errors.workspace?.url && (
                        <p className="text-alert-600 text-xs my-1">{errors.workspace.url.message}</p>
                      )}

                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {status === "pending" && <Loading />}
          </div>
          <div className="w-full h-[84px] border-t border-gray200 px-8 pb-6 pt-4 flex justify-end  gap-4">
            <PrimaryButton type="submit" classes="w-[120px] h-11 gap-0">
              Post Project
            </PrimaryButton>
            <SecondaryButton classes="w-[120px] h-11 gap-0">
              Cancel
            </SecondaryButton>
          </div>
        </form>
      </Overlay>
    );
  }
}

export default PostProjectForm;
