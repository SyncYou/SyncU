import React from "react";
import Button from "../../Reuseables/Button";
import Overlay from "../../Reuseables/Overlay";
import useModalView from "../../../hooks/useModalView";
import { RequestInvites } from "./RequestInvites";
import { PersonProfile } from "./PersonProfile";
export function RequesterProfile() {
  const { modal, handleModal } = useModalView();

  return (
    <>
      <Button onClick={handleModal}>Requests and Invites</Button>
      {modal && (
        <Overlay blur="2px">
          <RequestInvites handleModal={handleModal} />
        </Overlay>
      )}
    </>
  );
}
