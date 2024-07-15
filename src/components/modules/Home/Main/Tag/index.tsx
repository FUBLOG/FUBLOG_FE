import Button from "@/components/core/common/Button";
import { useEffect, useState } from "react";
import * as S from "../styles";
import useThemeStore from "@/hooks/useTheme";
import useTags, { useGetAllTags } from "@/hooks/useTags";

const TagRender = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const { activeTag, setActiveTag } = useTags();
  const { tags } = useGetAllTags();
  return (
    <S.TagsContainer>
      {tags.map((tag: any, index: number) => (
        <Button
          $color={
            !darkMode
              ? activeTag === tag?._id
                ? "white"
                : "black"
              : activeTag === tag?._id
                ? "#060607"
                : "#B8B3C6"
          }
          key={tag?._id}
          type="default"
          $hoverBackgroundColor={darkMode ? "#FAF0E6" : "#352F44"}
          $hoverColor={darkMode ? "#352F44" : "#FAF0E6"}
          $width={"84px"}
          onClick={() => setActiveTag(tag?._id)}
          $backgroundColor={
            darkMode
              ? activeTag === tag?._id
                ? "#FAF0E6 "
                : "transparent"
              : activeTag === tag?._id
                ? "#352F44 "
                : "transparent"
          }
        >
          {tag?.postTagContent}
        </Button>
      ))}
    </S.TagsContainer>
  );
};

export default TagRender;
