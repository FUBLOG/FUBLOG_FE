import styled from 'styled-components';
import { Modal, DatePicker } from "antd";
import Typography from "@/components/core/common/Typography";

export const CustomModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 24px;
    display: flex;
    justify-content: center;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #FAF0E6;
  border-radius: 30px;
  width: 100%;
  max-width: 600px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #FAF0E6;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #FAF0E6;
  width: 100%;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  .ant-picker-input > input {
    background-color: #FAF0E6;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #FAF0E6;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
`;

export const CenteredTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
`;
