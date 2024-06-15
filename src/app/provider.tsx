"use client";
import { ThemeProvider } from "styled-components";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { themes } from "@/style/themes";
import GlobalStyle from "@/style/global";
import StyledComponentsRegistry from "@/services/base/styledComponentsRegistry";
import { AuthProvider } from "@/contexts/AuthContext";
import { SocketProvider } from "@/contexts/SocketContext";
import { ProfileProvider } from "@/contexts/ProfileContext";

type Props = {
  children: React.ReactNode;
};

const ProviderComponents: React.FC<Props> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={themes.default}>
        <GlobalStyle />
        <AntdRegistry>
          <AuthProvider>
            <ProfileProvider>
              <SocketProvider>{children}</SocketProvider>
            </ProfileProvider>
          </AuthProvider>
        </AntdRegistry>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default ProviderComponents;
