import styled from "styled-components";
import { Flex } from "antd";
import Typography from "@/components/core/common/Typography";

export const Wrapper = styled(Flex)`
  &.theme-dark {
  }
  flex-direction: column;
  gap: 20px;
  width: 100%;

`;

export const Title = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const ViewAllButton = styled.div`
  cursor: pointer;
  color: #fff;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;

export const FriendContainer = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 20px;
  background-color: transparent;
  width: 300px;
  justify-content: space-between;
`;

export const Friend = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 80px;
`;

export const FriendImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

export const FriendName = styled(Typography)`
  font-weight: normal;
  font-size: 14px;
  padding: 10px;
`;
