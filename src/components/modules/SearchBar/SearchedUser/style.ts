import styled from "styled-components";

export const Usersearch = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  .image-wrapper {
    margin-right: 10px;
    border: 2px solid white;
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    height: 40px;
  }
  .user-wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    .des {
      color: #352f44;
      p {
        font-weight: 700;
      }
    }
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
