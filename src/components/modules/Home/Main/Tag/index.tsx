import Button from "@/components/core/common/Button";
import { useState } from "react";
import * as S from "../styles";
import useThemeStore from "@/hooks/useTheme";

const TagRender = () => {
  const darkMode = useThemeStore((state) => state.darkMode);

  const [activeTag, setActiveTag] = useState("Tất cả");
  const tags = [
    "Tất cả",
    "Gia đình",
    "Bạn bè",
    "Học tập",
    "Công việc",
    "Tình cảm",
    "Khác",
  ];
  return (
    <S.TagsContainer>
      {tags.map((tag: any, index: number) => (
        <Button
          $color={
            !darkMode
              ? activeTag === tag
                ? "#B9B4C7"
                : "black"
              : activeTag === tag
              ? "#060607"
              : "#B8B3C6"
          }
          key={index}
          type="default"
          $hoverBackgroundColor={darkMode ? "#FAF0E6" : "#352F44"}
          $hoverColor={darkMode ? "#352F44" : "#FAF0E6"}
          $width={"84px"}
          onClick={() => setActiveTag(tag)}
          $backgroundColor={
            darkMode
              ? activeTag === tag
                ? "#FAF0E6 "
                : "transparent"
              : activeTag === tag
              ? "#352F44 "
              : "transparent"
          }
        >
          {tag}
        </Button>
      ))}
    </S.TagsContainer>
  );
};

export default TagRender;
