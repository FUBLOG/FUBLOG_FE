import { Flex } from "antd";

import styled from "styled-components";

export const Header = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const HeaderMain = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  position: relative;
  top: 40px;

  width: 74%;
  height: 250px;

  background-color: #d9d9d9;

  border-radius: 12px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
`;
export const CoverImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 12px;

  object-fit: cover;
  cursor: pointer;
`;
export const BannerUser = styled(Flex)`
  position: absolute;
  bottom: -24%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 20px;
  cursor: pointer;
  align-items: flex-end;
`;

export const Avatar = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

export const UserAvatar = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 50%;

  border: 5px solid white;

  background-color: #d9d9d9;
`;

export const BoxUser = styled(Flex)`
  gap: 20px;
  align-items: flex-end;
`;
export const Typography = styled(Flex)`
  gap: 8px;
  flex-direction: column;
`;

export const ButtonUser = styled(Flex)`
  align-items: flex-end;
  gap: 10px;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
