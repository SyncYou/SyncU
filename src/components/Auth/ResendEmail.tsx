import React from 'react';

interface ResendEmailProps {
  handleResendEmail: () => void;
}

const ResendEmail: React.FC<ResendEmailProps> = ({ handleResendEmail }) => {
  return (
    <div className="flex items-center justify-center gap-2 my-10">
      <p className="leading-6 text-[16px] font-normal text-center text-[#5C5C66]">
        Haven’t received the code?
      </p>
      <small
        onClick={handleResendEmail}
        className="text-primary font-medium leading-6 text-[16px] cursor-pointer"
      >
        Resend email
      </small>
    </div>
  );
};

export default ResendEmail;
