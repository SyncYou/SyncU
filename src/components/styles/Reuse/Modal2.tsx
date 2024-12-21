import React, { useState } from 'react'
export function Modal2({ handleSkillClick, filteredSkills }) {

    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <>
            <span className="flex items-start  justify-between py-2 px-3 border border-solid border-gray-200 bg-white w-[62%] rounded-lg shadow-rightShadow absolute z-10  h-[18vh] overflow-y-scroll">
                <div className="flex flex-col h-auto">
                    {filteredSkills.length > 0 ? (
                        <ul className="flex items-center justify-center flex-col gap-[10px] w-full *:h-auto ">
                            {filteredSkills.map((skill, index) => (
                                <li key={index} onClick={() => {
                                    handleSkillClick(skill);
                                }
                                } className={`text-gray-800 text-base font-medium cursor-pointer w-full py-1 pl-3 rounded-[4px] 
                                    ${hoveredSkill === index ? "bg-gray-100" : ""} 
                                    ${skill.selected ? "bg-blue-500 text-white" : ""}`} onMouseEnter={() => setHoveredSkill(index)} onMouseLeave={() => setHoveredSkill(null)}>{skill.skill}</li>
                            ))}

                        </ul>
                    ) : (
                        <p>No skills found</p>
                    )}

                </div>
            </span>
        </>
    )
}
