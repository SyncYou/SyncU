import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase/client";
import { PostProjectFormType, WorkSpaceType } from "../utils/types/Types";
import { user } from "../utils/queries/fetch";
import { useForm } from "react-hook-form";
import { errorToast, successToast } from "oasis-toast";
import useDisplayPostProjectForm from "../context/useDisplayPostProjectForm";
import { validateUrl } from "../utils/ValidateUrl";

const usePostProject = () => {
  const { setShow } = useDisplayPostProjectForm();
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<PostProjectFormType>({
    defaultValues: {
      created_by: "",
      description: "",
      industry: "",
      participants: [],
      project_views: 0,
      requests: [],
      required_roles: [],
      required_stacks: [],
      title: "",
      workspace: {
        name: "Slack",
        url: "",
      },
    },
  });

  const title = watch("title");
  const description = watch("description");

  const { mutateAsync, status, error } = useMutation({
    mutationKey: ["post-project"],
    mutationFn: async (data: PostProjectFormType) => {
      const { error } = await supabase.from("Projects").insert(data).single();

      if (error) {
        errorToast('An error occurred', 'Please try again.');
        throw new Error(error?.message);
      }
      successToast(`${data?.title}`, "Project created successfully")
      setShow(false);
    },
  });

  const validateWorkspaceUrl = (url: string): boolean => {
    return validateUrl(url);
  };

  const validate = async (
    data: PostProjectFormType,
    otherData: {
      workspace: WorkSpaceType;
      roles: string[];
      stacks: string[];
    }
  ) => {
    if (
      otherData.roles.length != 0 &&
      otherData.stacks.length != 0 &&
      !otherData.workspace
    ) {
      return false;
    } else if (otherData.stacks.length <= 3) {
      errorToast('error', 'Stack must be more than 3');
      console.log("Stack must be more than 3");
      return false;
    } else if (otherData.roles.length <= 3) {
      errorToast('error', 'Roles must be more than 3');
      console.log("Roles must be more than 3");
      return false;
    } else if (!validateWorkspaceUrl(data.workspace.url)) {
      errorToast('error', 'Invalid workspace URL');
      console.log("Invalid workspace URL");
      return false;
    } else {
      data.created_by = user.data.user?.id;
      data.workspace.name = otherData.workspace;
      data.required_roles = otherData.roles;
      data.required_stacks = otherData.stacks;

      await mutateAsync(data);
      return true;
    }
  };

  return { validate, status, error, register, handleSubmit, reset, errors, title, description};
};

export default usePostProject;