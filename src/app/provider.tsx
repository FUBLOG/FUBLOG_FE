"use client";
import { ThemeProvider } from "styled-components";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { themes } from "@/style/themes";
import GlobalStyle from "@/style/global";
import StyledComponentsRegistry from "@/services/base/styledComponentsRegistry";

type Props = {
  children: React.ReactNode;
};
const ProviderComponents = ({ children }: Props) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={themes.default}>
          <AuthProvider>
            <GlobalStyle />
            <AntdRegistry>{children}</AntdRegistry>
          </AuthProvider>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};

export default ProviderComponents;
