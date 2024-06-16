"use client";
import React from "react";
import * as S from "./styles";
import FormSignIn from "../SignIn/FormSignin";
interface PageProps {
  readonly showModalGuest: boolean;
  readonly handleCancel: () => void;
}

const ModalGuest = ({ showModalGuest, handleCancel }: PageProps) => {
  return (
    <S.ModalWrap
      wrapClassName="modalWrap"
      min-width={"30%"}
      open={showModalGuest}
      onCancel={handleCancel}
      footer={null}
    >
      <S.ModalContent>
        <FormSignIn />
      </S.ModalContent>
    </S.ModalWrap>
  );
};

export default ModalGuest;
