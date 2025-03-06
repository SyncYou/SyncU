import { useState } from "react";

type ReturnValue = {
  modal: boolean;
  handleModal: () => void;
};

// Handle Modal
const useModalView = (): ReturnValue => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((m) => !m);
  };

  return { modal, handleModal };
};

export default useModalView;
