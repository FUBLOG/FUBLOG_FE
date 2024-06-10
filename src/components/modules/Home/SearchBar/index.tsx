import { Input } from "antd";
import React, { useState } from "react";
import SearchInfo from "./content";
import { CloseIcon, InputWrapper, SearchIcon, StyledInput } from "./style";

interface SearchContentProps {
  onPressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const searchContent: React.FC<SearchContentProps> = ({ onPressEnter }) => {
    const [value,setValue] = useState("");
    const handleClear = ()=>{
        setValue("");
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setValue(e.target.value)
    }
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
        <CloseIcon visible={!!value} onClick={handleClear} />   
      </InputWrapper>
      <SearchInfo value={value}/>
    </div>
  );
};
export default searchContent;
