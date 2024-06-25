"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { InputWrapper, SearchIcon, StyledInput } from "./style";
import SearchInfo from "../SearchInfo";
import { getSearchUser } from "@/services/api/Search/getSearch";
import { ProfileRequestResponseList } from "@/model/response";

interface SearchContentProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  list:
    | {
        avatar: string;
        displayName: string;
        friendCount: number;
        profileHash: string;
        _id: string;
      }[]
    | undefined;
  setList: Dispatch<
    SetStateAction<
      | {
          avatar: string;
          displayName: string;
          friendCount: number;
          profileHash: string;
          _id: string;
        }[]
      | undefined
    >
  >;
  setShowModalGuest: Dispatch<SetStateAction<boolean>>;
  setSearchVisible: Dispatch<SetStateAction<boolean>>;
}

const SearchContent: React.FC<SearchContentProps> = ({
  value,
  setValue,
  setList,
  list,
  setShowModalGuest,
  setSearchVisible,
}) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(false);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (newValue.trim()) {
      try {
        setLoading(true);
        const searchResults = await getSearchUser(newValue);
        setList(searchResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setList([]);
      }
      setLoading(false);
    } else {
      setLoading(false);

      setList([]);
    }
  };
  const handleClose = () => {
    setSearchVisible(false);
    setValue("");
    setList([]);
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
        loading={loading}
        list={list}
        value={value}
        setValue={setValue}
        setShowModalGuest={setShowModalGuest}
        handleClose={handleClose}
      />
    </>
  );
};

export default SearchContent;
