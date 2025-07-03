import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../supabase/client";
import { PostProjectFormType, WorkSpaceType } from "../utils/types/Types";
import { useForm } from "react-hook-form";
import { errorToast, successToast } from "oasis-toast";
import useDisplayPostProjectForm from "../context/useDisplayPostProjectForm";
import { validateUrl } from "../utils/ValidateUrl";
import { useUserData } from "../context/useUserData";

const usePostProject = () => {
  const { setShow } = useDisplayPostProjectForm();
  const { user: userData } = useUserData();
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, watch,setValue, formState: { errors } } = useForm<PostProjectFormType>({
    defaultValues: {
      created_by: "",
      description: "",
      industry: "",
      project_views: 0,
      required_roles: [],
      required_stacks: [],
      title: "",
      workspace: {
        name: "Slack",
        url: "",
      },
      username: ""
    },
  });



  const { mutateAsync, status, error } = useMutation({
    mutationKey: ["post-project"],
    mutationFn: async (data: PostProjectFormType) => {
      const { error } = await supabase.from("Projects").insert(data).single();

      if (error) {
        errorToast('An error occurred', 'Please try again.');
        throw new Error(error?.message);
      }

      await queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
      
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
    
    if (!data.title) {
      errorToast('Error', 'Project title is required');
      return false;
    }
    
    if (!data.industry) {
      errorToast('Error', 'Industry is required');
      return false;
    }
    
    if (!data.description) {
      errorToast('Error', 'Description is required');
      return false;
    }
    
    if (data.description.length < 80) {
      errorToast('Error', 'Description must be at least 80 characters');
      return false;
    }

    
    if (otherData.roles.length < 3) {
      errorToast('Error', 'You need at least 3 roles');
      return false;
    }
    
    if (otherData.roles.length > 10) {
      errorToast('Error', 'Maximum of 10 roles allowed');
      return false;
    }
    
    if (otherData.stacks.length < 3) {
      errorToast('Error', 'You need at least 3 stacks/skills');
      return false;
    }
    
    if (otherData.stacks.length > 10) {
      errorToast('Error', 'Maximum of 10 stacks/skills allowed');
      return false;
    }

   
    if (!validateWorkspaceUrl(data.workspace.url)) {
      errorToast('Error', 'Invalid workspace URL');
      return false;
    }

   
    data.created_by = userData?.id;
    data.workspace.name = otherData.workspace;
    data.required_roles = otherData.roles;
    data.required_stacks = otherData.stacks;
    data.username = userData?.username;

    try {
      await mutateAsync(data);
      return true;
    } catch (error) {
      return false;
    }
  };
  

  return { validate, status, error, register, handleSubmit, reset, errors, title: watch("title"), description: watch("description"), setValue, watch };
};

export default usePostProject;