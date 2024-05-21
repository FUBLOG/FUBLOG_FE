import { styled } from "styled-components";

import { Input as InputAntd } from "antd";

export const WrapInput = styled.div``;

export const Input = styled(InputAntd)`
  width: 100%;
  height: 48px;
  box-shadow: none !important;
  border-color: none !important;

  border: 1px solid ${(props) => props.theme.colors.primaryDarker};

  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 24px;
  color: ${(props) => props.theme.colors.primaryDarker};

  &.ant-input-affix-wrapper-focused {
    border: 1px solid ${(props) => props.theme.colors.primary} !important;
  }

  &.ant-input-affix-wrapper {
    padding: 12px 16px;

    span {
      margin-right: 8px;
    }

    .ant-input {
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      font-size: ${({ theme }) => theme.fontSize.base};
      line-height: 24px;
      color: ${(props) => props.theme.colors.primaryDark};

      &::placeholder {
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        font-size: ${({ theme }) => theme.fontSize.base};
        line-height: 24px;
        color: ${(props) => props.theme.colors.secondaryDark};
      }

      &:disabled {
        opacity: 1.3 !important;

        font-weight: ${({ theme }) => theme.fontWeight.regular};
        font-size: ${({ theme }) => theme.fontSize.base};
        line-height: 24px;
        color: ${(props) => props.theme.colors.newtralLight};
      }
    }
  }

  &:not(:disabled):hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary} !important;
  }

  &:disabled {
    opacity: 1.3 !important;

    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 24px;
    color: ${(props) => props.theme.colors.newtralLight};
  }

  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 24px;
    color: ${(props) => props.theme.colors.newtralLight};
  }
`;
