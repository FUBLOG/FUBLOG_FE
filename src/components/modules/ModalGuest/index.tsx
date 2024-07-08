"use client";
import React, { Dispatch, SetStateAction } from "react";
import * as S from "./styles";
import FormSignIn from "../SignIn/FormSignin";
import useThemeStore from "@/hooks/useTheme";
interface PageProps {
  readonly showModalGuest: boolean;
  readonly handleCancel?: () => void;
}

const ModalGuest = ({ showModalGuest, handleCancel }: PageProps) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <S.ModalWrap
      className={darkMode ? "theme-dark" : "theme-light" }
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
