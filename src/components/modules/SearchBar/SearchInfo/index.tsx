import React, { Dispatch, SetStateAction } from "react";
import { SearchUser } from "../SearchedUser";
import * as S from "./style";
import { useAuthContext } from "@/contexts/AuthContext";

interface SearchInfoProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setShowModalGuest: Dispatch<SetStateAction<boolean>>;
  setSearchVisible: Dispatch<SetStateAction<boolean>>;
  list:
    | {
        avatar: string;
        displayName: string;
        friendCount: number;
        profileHash: string;
        _id: string;
      }[]
    | undefined;
}

const SearchInfo: React.FC<SearchInfoProps> = ({
  setValue,
  setShowModalGuest,
  setSearchVisible,
  list,
}) => {
  const { userInfo } = useAuthContext();

  return (
    <S.MyStyledDiv>
      <div className="searchContent">
        <ul className="list">
          {list
            ?.filter((friend) => friend.profileHash !== userInfo?.profileHash)
            .map((friend) => (
              <li key={friend._id} className="listItem">
                <SearchUser
                  setShowModalGuest={setShowModalGuest}
                  setValue={setValue}
                  setSearchVisible={setSearchVisible}
                  name={friend.displayName}
                  friends={friend.friendCount}
                  avatar={friend.avatar}
                  profileHash={friend.profileHash}
                  id={friend._id}
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
