import React from "react";
import {
  Users,
  Friends,
} from "@/components/modules/SearchBar/SearchedUser/test";
import { SearchUser } from "../SearchedUser";

import * as S from "./style";

interface SearchInfoProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInfo: React.FC<SearchInfoProps> = ({ value, setValue }) => {
  return (
    <S.MyStyledDiv>
      <div className="searchContent">
        <ul className="list">
          {Friends.filter((friend) =>
            friend.name.toLowerCase().includes(value.toLowerCase())
          ).map((friend) => (
            <li key={friend.id} className="listItem">
              <SearchUser
                setValue={setValue}
                role="Friend"
                name={friend.name}
                friends={friend.friend}
                avatar={friend.imagelink}
              />
              <hr />
            </li>
          ))}
        </ul>
        <ul className="list">
          {Users.filter((user) => user.name.toLowerCase().includes(value)).map(
            (user) => (
              <li key={user.id} className="listItem">
                <SearchUser
                  role="Stranger"
                  name={user.name}
                  friends={user.friend}
                  avatar={user.imagelink}
                  setValue={setValue}
                />
                <hr />
              </li>
            )
          )}
        </ul>
      </div>
    </S.MyStyledDiv>
  );
};

export default SearchInfo;
