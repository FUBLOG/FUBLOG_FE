import styled from "styled-components";

export const MyStyledDiv = styled.div`
  min-width: 400px;
  max-height: 300px;
  min-height: 400px;

  margin-top: 20px;
  padding: 0 20px 20px 20px;
  border-radius: 5px;
  overflow-y: auto; /* Add vertical scroll bar when content overflows */
  overflow-x: hidden; /* Hide horizontal scroll bar if not needed */
  background-color: rgb(92, 84, 112);
  border-radius: 9px;
  
  .searchHeader{
      background-color: #5C5470;
      top: 0;
      height: 50px;
      
  }
  h3 {
    color: #fff;
    margin-bottom: 10px;
      margin-top:20px

  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin: 5px 0;
      color: #fff;
    }
  }
    .line{
    width: 100;
    height: 1px;
    background-color: white
    }
`;
