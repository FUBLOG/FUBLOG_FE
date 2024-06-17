"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { InputWrapper, SearchIcon, StyledInput } from "./style";
import SearchInfo from "../SearchInfo";
import { getSearchUser } from "@/api/Search/getSearch";

interface SearchContentProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setShowModalGuest: Dispatch<SetStateAction<boolean>>;
}

const SearchContent: React.FC<SearchContentProps> = ({
  value,
  setValue,
  setShowModalGuest,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getSearchUser(e?.target?.value);
  };
  const [list, setList] = useState([]);
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
      />
    </>
  );
};
export default SearchContent;
