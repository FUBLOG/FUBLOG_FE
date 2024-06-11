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
    border-radius: 50%; // Add border-radius here
    overflow: hidden; // Ensure the border-radius is applied correctly
    width: 40px; // Ensure the wrapper is the same size as the image
    height: 40px; // Ensure the wrapper is the same size as the image
  }
  .user-wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    .des {
      color: color: #352F44;
      p{
        font-weight: 700;
      }
    }
  }
`;
