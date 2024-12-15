import React from 'react'
import { FiPlus } from "react-icons/fi";
import { useUserStore } from '../../../store/UseUserStore';
export function Skill({ skill, setIsSearching }) {
    const { userDetails, toggleSkill } = useUserStore()

    return (
        <>
            <p onClick={() => { toggleSkill(skill); setIsSearching(false) }} className={`${userDetails.stack.includes(skill) ? "bg-gray-100 text-white" : ""}`}>{skill} <FiPlus /></p>
        </>
    )
}
