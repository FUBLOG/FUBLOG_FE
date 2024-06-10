import styled from "styled-components";

export const Usersearch = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
      color: white;
      p{
        font-weight: 700;
      }
    }
  }
`;
