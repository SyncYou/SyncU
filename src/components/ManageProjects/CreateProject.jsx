import React, { useLayoutEffect, useState } from "react";
import cancel from "/icons/cancel-dark.svg";
import arrowDown from "/icons/arrow-down.svg";
import refresh from "/icons/refresh.svg";
import addCircle from "/icons/add-circle.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import Spinner from "../BasicComponents/Spinner";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tagsArray, setTagsArray] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const [isMounted, setIsMounted] = useState(false);

  // useLayoutEffect(() => {
  //   setIsMounted(true);
  // }, []);
  const navigate = useNavigate();

  const handleCancelModal = () => {
    navigate(-1);
  };

  const handleAddTag = (tag) => {
    setTagsArray(prevTags => {
      // Use a unique identifier or property to check for duplicates
      if (prevTags.some(existingTag => existingTag.id === tag.id)) {
        return prevTags; // Return the current tags if the tag is already present
      }
      // Add the new tag and return the updated tags array
      return [...prevTags, tag];
    });
  };
  const handleRemoveTag = (tagId) => {
    setTagsArray(prevTags => prevTags.filter(tag => tag.id !== tagId));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const projectData = {
      title,
      category,
      description,
      tags: tagsArray,
    };

    try {
      const response = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        setTimeout(() => {
          navigate("/manage/"); 
          setIsLoading(false);
        }, 5000)
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Failed to submit form:", response.statusText);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setIsLoading(false);
    }
  };

  const {
    data: tags,
    isPending,
    error,
  } = useFetch("http://localhost:5000/tags");
  return (
    <div className="bg_overlay flex items-center justify-center overflow-y-scroll">
      <div className="bg-white rounded-lg w-3/5 mt-[250px]">
        <div className="flex items-center justify-between p-3 border-b border-[#E5E7EB]">
          <h1 className="text-[#1F2937] text-[24px] font-bold leading-[28px]">
            Create project
          </h1>
          <img
            className="cursor-pointer"
            onClick={handleCancelModal}
            src={cancel}
            alt=""
          />
        </div>

        <form onSubmit={handleSubmit} className="p-10">
          <div className="flex items-start justify-between gap-10 my-5">
            <label
              className="text-[#1F2937] font-medium leading-6 w-[200px]"
              htmlFor="title"
              sketch
            >
              Project title<sup>*</sup>
            </label>
            <div className="flex-1 flex flex-col items-end">
              <input
                maxLength={50}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-[#E8D8FC] focus:outline-none bg-[#F9FAFB] rounded p-2 w-full text-[#9CA3AF]"
                type="text"
                placeholder="Give your project a name..."
              />
              <small>0/50</small>
            </div>
          </div>

          <div className="flex items-start justify-between gap-10 my-5">
            <label
              className="text-[#1F2937] font-medium leading-6 w-[200px]"
              htmlFor="title"
            >
              Project category<sup>*</sup>
            </label>
            <div className="flex-1 flex items-center justify-between border border-[#E8D8FC] bg-[#F9FAFB] rounded p-2 w-full">
              <select
                className="appearance-none flex-1 bg-transparent focus:outline-none text-[#9CA3AF]"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select--</option>
              </select>
              <img src={arrowDown} alt="" />
            </div>
          </div>

          <div className="flex items-start justify-between gap-10 my-5">
            <label
              className="text-[#1F2937] font-medium leading-6 w-[200px]"
              htmlFor="title"
            >
              Project description<sup>*</sup>
            </label>
            <div className="flex-1 flex flex-col items-end">
              <textarea
                maxLength={1000}
                className="border border-[#E8D8FC] focus:outline-none bg-[#F9FAFB] rounded p-2 w-full text-[#9CA3AF]"
                rows={5}
                placeholder="Describe your project idea..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <small>0/1000</small>
            </div>
          </div>

          <div className="flex items-start justify-between gap-10 my-5">
            <label
              className="text-[#1F2937] font-medium leading-6 w-[295px]"
              htmlFor="title"
            >
              Required skills, tools & stacks<sup>*</sup>
            </label>
            <div className="w-full">
              <div className="flex-1 flex items-center justify-between border border-[#E8D8FC] bg-[#F9FAFB] rounded p-2 w-full">
             
                <div className="flex items-center gap-2 flex-wrap">
                  {tagsArray && tagsArray.map(tag => (
                    <div
                      key={tag.id}
                      className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full cursor-pointer bg-[#374151]"
                    >
                      <img src={tag.icon} alt="" />
                      <small className="text-[#FFFFFF] leading-5 text-[14px]">
                        {tag.name}
                      </small>
                      <img onClick={() => handleRemoveTag(tag.id)} className="w-[15px] cursor-pointer" src={cancel} alt="" />
                    </div>
                  ))}
                </div>
                <img src={arrowDown} alt="" />
              </div>
              <div>
                <p className="flex gap-2 items-center">
                  Suggested <img src={refresh} alt="" />
                </p>
                <small className="text-[#6B7280] text-[14px] leading-[21px]">
                  Select the skills and tools required for the project. (max 10
                  - Min 3)
                </small>
                <div>
                  <div className="flex items-center flex-wrap gap-3 w-full my-3 p-2">
                    { tags &&
                      tags.map((tag, idx) => (
                        <div onClick={() => handleAddTag(tag)} key={tag.id} className="flex items-center gap-2 text-nowrap border border-[#D1D5DB] p-2 rounded-full cursor-pointer">
                      <img src={tag.icon} alt="" />
                      <small className="text-[#1F2937] leading-5 text-[14px]">
                        {tag.name}
                      </small>
                      <img className="cursor-pointer" src={addCircle} alt="" />
                    </div>
                      ))
                    }
              
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="space-x-3">
              <small
                onClick={handleCancelModal}
                className="bg-white w-[150px] px-12 py-3 text-[#374151] rounded-md font-medium leading-6 capitalize cursor-pointer border border-[#E5E7EB]"
              >
                cancel
              </small>
              <button type="submit" className="bg-[#672A9F] w-[150px] px-5 py-2 text-[#F9FAFB] rounded-md font-medium leading-6 drop-shadow-md shadow-inner shadow-[#EEF0F340] drop-shadow-[#8D59BC80] capitalize cursor-pointer">
                {
                  isLoading? <Spinner/> : "create"
                }
               
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
