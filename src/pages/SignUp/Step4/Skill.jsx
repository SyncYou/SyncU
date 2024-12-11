import React from 'react'
import { FiPlus } from "react-icons/fi";

export function Skill({ id, stack, checked, setChecked, handleAreaClick }) {
    const clicked = id === checked;

    return (
        <>
            <p onClick={() => { setChecked(clicked ? null : id); handleAreaClick(stack) }} className={`${clicked ? "bg-gray-100" : ""}`}>{stack} <FiPlus /></p>
        </>
    )
}
