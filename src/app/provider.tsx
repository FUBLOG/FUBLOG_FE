"use client";
import { ThemeProvider } from "styled-components";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { themes } from "@/style/themes";
import GlobalStyle from "@/style/global";
import StyledComponentsRegistry from "@/services/base/styledComponentsRegistry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: React.ReactNode;
};
const ProviderComponents = ({ children }: Props) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={themes.default}>
          <GlobalStyle />
          <AntdRegistry>{children}</AntdRegistry>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};

export default ProviderComponents;
