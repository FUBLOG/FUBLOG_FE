import styled from "styled-components";

export const MyStyledDiv = styled.div`
  min-width: 400px;
  max-height: 300px;
  min-height: 390px;

  margin-top: 20px;
  padding: 0 20px 20px 20px;
  border-radius: 5px;
  overflow-y: auto; /* Add vertical scroll bar when content overflows */
  overflow-x: hidden; /* Hide horizontal scroll bar if not needed */
  background-color:  #FAF0E6;
  border-radius: 9px;
  

  .searchHeader{
      top: 0;
      height: 50px;
      
  }
  h3 {
    color: #352F44;
    margin-bottom: 10px;
      margin-top:20px

  }

  ul {
    list-style-type: none;
    padding: 0 25px 0 25px;

    li {
      margin: 5px 0;
      
    }
  }
`;
