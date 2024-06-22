"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { InputWrapper, SearchIcon, StyledInput } from "./style";
import SearchInfo from "../SearchInfo";
import { getSearchUser } from "@/services/api/Search/getSearch";
import { ProfileRequestResponseList } from "@/model/response";
import { useAuthContext } from "@/contexts/AuthContext";

interface SearchContentProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setShowModalGuest: Dispatch<SetStateAction<boolean>>;
  setSearchVisible: Dispatch<SetStateAction<boolean>>;
}

const SearchContent: React.FC<SearchContentProps> = ({
  value,
  setValue,
  setShowModalGuest,
  setSearchVisible,
}) => {
  const { userInfo } = useAuthContext();

  const [list, setList] = useState<ProfileRequestResponseList["metadata"]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (newValue.trim()) {
      try {
        const searchResults = await getSearchUser(
          userInfo?.profileHash,
          newValue
        );
        setList(searchResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setList([]);
      }
    } else {
      setList([]);
    }
  };

  return (
    <>
      <InputWrapper>
        <SearchIcon />
        <StyledInput
          placeholder="Tìm Kiếm..."
          value={value}
          onChange={handleChange}
        />
      </InputWrapper>
      <SearchInfo
        list={list}
        value={value}
        setValue={setValue}
        setShowModalGuest={setShowModalGuest}
        setSearchVisible={setSearchVisible}
      />
    </>
  );
};

export default SearchContent;
