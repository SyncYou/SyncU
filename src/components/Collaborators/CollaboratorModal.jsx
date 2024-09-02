import React from "react";
import ViewProfileCard from "../Profile/ViewProfileCard";

const CollaboratorModal = ({
  collaborator,
  id,
  handleShowProfileModal,
  activeModal,
}) => {
  return (
    <div className="relative">
      <img
        onClick={() => handleShowProfileModal(id)}
        onMouseOver={() => handleShowProfileModal(id)}
        onMouseOut={() => handleShowProfileModal(null)}
        src={collaborator?.img}
        alt=""
      />
      {activeModal === id && (
        <div className="absolute right-10 -top-28">
          <ViewProfileCard collaborator={collaborator} />
        </div>
      )}
    </div>
  );
};

export default CollaboratorModal;
