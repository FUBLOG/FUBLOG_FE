import { Flex } from "antd";
import styled from "styled-components";
import Typography from "@/components/core/common/Typography";

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
  overflow: scroll;
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

export const Name = styled.p``;
export const Icon = styled.div``;
export const Prestige = styled.span``;
export const PrestigeScore = styled.span``;

export const ButtonUser = styled(Flex)`
  align-items: flex-end;
  gap: 10px;
  span {
    color: #352f44 !important;
  }
  .ant-btn-default:hover {
    span {
      color: #faf0e6 !important;
    }
  }
`;

export const SidebarWrapper = styled.div`
  width: 250px;
  background-color: transparent;
  position: absolute;
  top: 10%;
  left: 0;
  margin-left: 10px;
`;

export const SidebarTitle = styled(Typography)`
  color: #b9b4c7;
`;

export const FriendContainer = styled.div`
  height: calc(100% - 100px);
  overflow-y: auto;
  max-height: 400px;
`;

export const Friend = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, font-weight 0.3s;
  &:hover {
    background-color: #faf0e6;
    color: #5c5470;
    font-weight: bold;
  }
`;

export const FriendImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.5px solid #b9b4c7;
  overflow: hidden;
`;

export const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #5c5470;
  font-size: 16px;
  gap: 10px;
  margin-left: 20px;
  transition: color 0.3s, font-weight 0.3s;
`;

export const FriendName = styled(Typography)`
  color: #b9b4c7;
  font-weight: normal;
  transition: color 0.3s, font-weight 0.3s;

  ${Friend}:hover & {
    color: #5c5470;
    font-weight: bold;
  }
`;

export const FriendDetails = styled(Typography)`
  color: #b9b4c7;
  font-size: 12px;
  transition: color 0.3s, font-weight 0.3s;
  ${Friend}:hover & {
    color: #5c5470;
    font-weight: bold;
  }
`;
