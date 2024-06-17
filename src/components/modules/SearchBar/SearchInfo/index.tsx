import React, { Dispatch, SetStateAction, useState } from "react";

import { SearchUser } from "../SearchedUser";

import * as S from "./style";

interface SearchInfoProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setShowModalGuest: Dispatch<SetStateAction<boolean>>;
  list: {
    userId: string;
    displayName: string;
    friend: number;
    avatar: string;
  }[];
}

const SearchInfo: React.FC<SearchInfoProps> = ({
  value,
  setValue,
  setShowModalGuest,
  list,
}) => {
  return (
    <S.MyStyledDiv>
      <div className="searchContent">
        <ul className="list">
          {list
            .filter((friend) =>
              friend.displayName.toLowerCase().includes(value)
            )
            .map((friend) => (
              <li key={friend.userId} className="listItem">
                <SearchUser
                  setShowModalGuest={setShowModalGuest}
                  setValue={setValue}
                  role="Friend"
                  name={friend.displayName}
                  friends={friend.friend}
                  avatar={friend.avatar}
                />
                <hr />
              </li>
            ))}
        </ul>
      </div>
    </S.MyStyledDiv>
  );
};

export default SearchInfo;
