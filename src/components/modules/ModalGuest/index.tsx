"use client";
import React, { Dispatch, SetStateAction } from "react";
import * as S from "./styles";
import FormSignIn from "../SignIn/FormSignin";
interface PageProps {
  readonly showModalGuest: boolean;
  readonly handleCancel?: () => void;
  readonly setShowModalGuest: Dispatch<SetStateAction<boolean>>;
}

const ModalGuest = ({
  setShowModalGuest,
  showModalGuest,
  handleCancel,
}: PageProps) => {
  return (
    <S.ModalWrap
      wrapClassName="modalWrap"
      min-width={"30%"}
      open={showModalGuest}
      onCancel={handleCancel}
      destroyOnClose={true}
      footer={null}
    >
      <S.ModalContent>
        <FormSignIn showModalGuest={showModalGuest} />
      </S.ModalContent>
    </S.ModalWrap>
  );
};

export default ModalGuest;
