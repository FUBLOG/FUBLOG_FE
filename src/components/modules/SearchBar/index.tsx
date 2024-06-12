"use client";
import React, { useState } from "react";
import { InputWrapper, SearchIcon, StyledInput } from "./style";
import SearchInfo from "./Content";

interface SearchContentProps {
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchContent: React.FC<SearchContentProps> = ({ onPressEnter }) => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <InputWrapper>
        <SearchIcon />
        <StyledInput
          placeholder="Tìm Kiếm..."
          value={value}
          onChange={handleChange}
          onPressEnter={onPressEnter}
        />
      </InputWrapper>
      <SearchInfo value={value} />
    </div>
  );
};
export default SearchContent;
