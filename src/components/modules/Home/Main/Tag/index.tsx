import Button from "@/components/core/common/Button";
import { useState } from "react";
import * as S from "../styles";
const TagRender = () => {
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
                    key={index}
                    type="default"
                    $hoverBackgroundColor = "#FAF0E6"
                    $hoverColor="#352F44"
                    $width={"84px"}
                    onClick={() => setActiveTag(tag)}
                    $backgroundColor={
                        activeTag === tag ? "#FAF0E6 " : "transparent"
                    }
                >
                    {tag}
                </Button>
            ))}
        </S.TagsContainer>
    );
}

export default TagRender;