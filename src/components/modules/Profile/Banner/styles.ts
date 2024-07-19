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
export const CoverImage = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 12px;
   position: relative;
`;



export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 18px;
  display: none;
  transition: opacity 0.3s ease;
  
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
  object-position: center; 
    &:hover .overlay {
    opacity: 0.5;
  }
  &:hover .text {
    opacity: 1;
  }
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
export const ImageModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ImageModalContent = styled.div`
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
