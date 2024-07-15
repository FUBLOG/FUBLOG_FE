import Button from "@/components/core/common/Button";
import { useEffect, useState } from "react";
import * as S from "../styles";
import useThemeStore from "@/hooks/useTheme";
import { getAllTags } from "@/services/api/post";
import useTagStageStore from "@/hooks/useTags";

const TagRender = () => {
  const darkMode = useThemeStore((state) => state.darkMode);

  // const [activeTag, setActiveTag] = useState("Tất cả");
  const [tags, setTags] = useState([]);
  const activeTags = useTagStageStore((state) => state.tagValue);
  const setTagValue = useTagStageStore((state) => state.setTagValue);

  useEffect(() => {
    const getTags = async () => {
      const res = await getAllTags();
      setTags(res?.metadata);
    };
    getTags();
  }, [activeTags]);

  const handleClickTag = (tag: string) => {
    setTagValue(tag);
    console.log(activeTags);
    
  };

  return (
    <S.TagsContainer>
      <Button
        $color={
          !darkMode
            ? activeTags === "Tất Cả"
              ? "#B9B4C7"
              : "black"
            : activeTags === "Tất Cả"
            ? "#060607"
            : "#B8B3C6"
        }
        type="default"
        $hoverBackgroundColor={darkMode ? "#FAF0E6" : "#352F44"}
        $hoverColor={darkMode ? "#352F44" : "#FAF0E6"}
        $width={"84px"}
        onClick={() => handleClickTag("Tất Cả")}
        $backgroundColor={
          darkMode
            ? activeTags === "Tất Cả"
              ? "#FAF0E6 "
              : "transparent"
            : activeTags === "Tất Cả"
            ? "#352F44 "
            : "transparent"
        }
      >
        Tất Cả
      </Button>
      {tags.map((tag: any, index: number) => (
        <Button
          $color={
            !darkMode
              ? activeTags === tag.postTagContent
                ? "white"
                : "black"
              : activeTags === tag.postTagContent
              ? "#060607"
              : "#B8B3C6"
          }
          key={index}
          type="default"
          $hoverBackgroundColor={darkMode ? "#FAF0E6" : "#352F44"}
          $hoverColor={darkMode ? "#352F44" : "#FAF0E6"}
          $width={"84px"}
          onClick={() => handleClickTag(tag.postTagContent)}
          $backgroundColor={
            darkMode
              ? activeTags === tag.postTagContent
                ? "#FAF0E6 "
                : "transparent"
              : activeTags === tag.postTagContent
              ? "#352F44 "
              : "transparent"
          }
        >
          {tag.postTagContent}
        </Button>
      ))}
    </S.TagsContainer>
  );
};

export default TagRender;
