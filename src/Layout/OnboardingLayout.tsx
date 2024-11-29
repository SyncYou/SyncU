import React, { useState } from 'react'
import Signup from '../components/Auth/Signup'
import Step1 from '../components/Onboarding/Step1'
import Step2 from '../components/Onboarding/Step2'

const OnboardingLayout: React.FC = () => {
    const [step, setStep] = useState(0)

    const handleNextStep = () => {
        if(step === 1){
            setStep(0)
        }
        setStep((prevStep) => prevStep + 1)
    }

    const handlePrevStep = () => {
        if(step === 0){
            setStep(1)
        }
        setStep((prevStep) => prevStep - 1)
    }

    const switchLayout = () => {
        switch (step) {
            case 0:
                return <Step1 handlePrevStep={handlePrevStep} handleNextStep={handleNextStep} />
                break;
            case 1:
                return <Step2 handlePrevStep={handlePrevStep} handleNextStep={handleNextStep}  />
                break;
            case 2:
            default:
                return <Step1 handlePrevStep={handlePrevStep} handleNextStep={handleNextStep}  />
                break;
        }
    }
  return (
    <section className='flex w-full h-[100vh] overflow-hidden'>
    <div className='w-full flex-1 hidden md:block'>
        <Signup />
    </div>
    <div className='w-full flex-1'>
        {switchLayout()}
    </div>
   </section>
  )
}

export default OnboardingLayout