import React from "react";
import * as S from "./style";
import { Users, Friends } from "@/components/modules/Home/SearchBar/SearchedUser/test";
import { SearchUser } from "../SearchedUser";

interface SearchInfoProps {
  value: string;
}

const SearchInfo: React.FC<SearchInfoProps> = ({ value }) => {
  return (
    <S.MyStyledDiv>
      <div className="searchContent">
        <ul className="list">
          {Friends.filter((friend) => friend.name.toLowerCase().includes(value)).map(
            (friend) => (
              <li key={friend.id} className="listItem">
                <SearchUser
                  role = "Friend"
                  name={friend.name}
                  friends={friend.friend}
                  avatar={friend.imagelink}
                />
                {/* <div className="line"></div> */}
                <hr/>
              </li>
            )
          )}
        </ul>
        <ul className="list">
          {Users.filter((user) => user.name.toLowerCase().includes(value)).map(
            (user) => (
              <li key={user.id} className="listItem">
                <SearchUser
                  role = "Stranger" 
                  name={user.name}
                  friends={user.friend}
                  avatar={user.imagelink}
                />
                <hr/>
              </li>
            )
          )}
        </ul>
      </div>
    </S.MyStyledDiv>
  );
};

export default SearchInfo;
