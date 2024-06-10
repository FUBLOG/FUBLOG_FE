import React from "react";
import * as S from "./style";
import { Users } from "@/components/modules/Home/SearchBar/SearchedUser/test";
import { SearchUser } from "../SearchedUser";

interface SearchInfoProps {
  value: string;
}

const SearchInfo: React.FC<SearchInfoProps> = ({ value }) => {
  return (
    <S.MyStyledDiv>
      <div className="searchHeader">
        <h3>Top Searching</h3>
        <div className="line"></div>
      </div>
      <div className="searchContent">
        <ul className="list">
          {Users.filter((user) => user.name.toLowerCase().includes(value)).map(
            (user) => (
              <li key={user.id} className="listItem">
                <SearchUser name={user.name} friends={user.friend} avatar={user.imagelink}/>
              </li>
            )
          )}
        </ul>
        
      </div>
    </S.MyStyledDiv>
  );
};

export default SearchInfo;
