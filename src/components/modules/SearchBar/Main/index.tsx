"use client";

import React, {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useCallback,
} from "react";
import { InputWrapper, SearchIcon, StyledInput } from "./style";
import SearchInfo from "../SearchInfo";
import { getSearchUser } from "@/services/api/Search/getSearch";

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
  const [list, setList] = useState([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(async () => {
      if (newValue.trim()) {
        try {
          const searchResults = await getSearchUser(newValue);
          setList(searchResults);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setList([]);
        }
      } else {
        setList([]);
      }
    }, 500);

    setTimeoutId(newTimeoutId);
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
