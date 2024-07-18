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
              ? "#352F44"
              : "black"
            : activeTags === "Tất Cả"
            ? "#060607"
            : "white"
        }
        type="default"
        $hoverBackgroundColor={darkMode ? "#FAF0E6" : "#cedaff"}
        $hoverColor={darkMode ? "#352F44" : "#352F44"}
        $width={"84px"}
        onClick={() => handleClickTag("Tất Cả")}
        $backgroundColor={
          darkMode
            ? activeTags === "Tất Cả"
              ? "#FAF0E6 "
              : "transparent"
            : activeTags === "Tất Cả"
            ? "#cedaff "
            : "transparent"
        }
      >
        Tất Cả
      </Button>
      {tags?.map((tag: any, index: number) => (
        <Button
          $color={
            !darkMode
              ? activeTags === tag.postTagContent
                ? "#352F44"
                : "black"
              : activeTags === tag.postTagContent
              ? "#060607"
              : "white"
          }
          key={index}
          type="default"
          $hoverBackgroundColor={darkMode ? "#FAF0E6" : "#cedaff"}
          $hoverColor={darkMode ? "#352F44" : "#352F44"}
          $width={"84px"}
          onClick={() => handleClickTag(tag.postTagContent)}
          $backgroundColor={
            darkMode
              ? activeTags === tag.postTagContent
                ? "#FAF0E6 "
                : "transparent"
              : activeTags === tag.postTagContent
              ? "#cedaff "
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
