import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import Button from './Button';
import { useUserStore } from '../../../store/UseUserStore';

export default function Nav_Btn({ navTo, btn_Style, disabled }) {
    const navigate = useNavigate();

    const { currentStep, setCurrentStep } = useUserStore();

    function handleNext() {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        navigate(`${navTo}`);
    }
    function handlePrev() {
        const prevStep = currentStep - 1;
        setCurrentStep(prevStep);
        navigate(-1);
    }

    return (
        <span className="gap-6 items-center flex w-full">
            <Button onClick={handlePrev} style='rounded-full py-[12px] px-[12px] bg-white shadow-xs'>
                <BsArrowLeft />
            </Button>
            <Button style={`w-[30%] ${btn_Style}`} disabled={disabled} onClick={handleNext}>Next</Button>
        </span >
    )
}
