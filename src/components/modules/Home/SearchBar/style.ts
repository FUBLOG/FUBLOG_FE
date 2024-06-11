import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styled from "styled-components";

interface CloseIconProps {
  visible: boolean;
}
export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;
export const StyledInput = styled(Input)`
  padding-right: 30px; /* space for the close icon */
  box-shadow: -6px 13px 44px 0px rgba(22,22,22,0.56);
-webkit-box-shadow: -6px 13px 44px 0px rgba(22,22,22,0.56);
-moz-box-shadow: -6px 13px 44px 0px rgba(22,22,22,0.56);
  
`;
export const SearchIcon = styled(SearchOutlined)`
  position: absolute;
  top: 33px;
  left: 14px;
  z-index:10;
`;
export const CloseIcon = styled(CloseOutlined)<CloseIconProps>`
  position: absolute;
  right: 11px;
  top: 33px;
  color:  #FAF0E6 ;
  cursor: pointer;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};

`;