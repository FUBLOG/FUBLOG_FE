import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import { SettingOutlined, TagOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import Button from "@/components/core/common/Button";
import { Radio, Upload } from "antd";
import type { GetProp, RadioChangeEvent, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { postRequest } from "@/services/request";
import { postEndpoint } from "@/services/endpoint";
import { useAuthContext } from "@/contexts/AuthContext";
import useCreatePost from "@/hooks/useCreatePost";
import {
  AudienceModal,
  ContentStyleDiv,
  TagModal,
  CustomUploadStyled,
} from "./style";
import { createPost, getAllTags } from "@/services/api/post";
import useThemeStore from "@/hooks/useTheme";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface PostContent {
  onSuccess: () => void;
}

export const PostContent: React.FC<PostContent> = ({ onSuccess }) => {
  const darkMode = useThemeStore((state) => state.darkMode);

  const { setShowSpinner, setPost } = useCreatePost();
  const { userInfo } = useAuthContext();
  const [postContent, setPostContent] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [tagValue, setTagValue] = useState<any>({});
  const [openTag, setOpenTag] = useState(false);
  const [tags] = useState<any[]>([]);
  const [audienceValue, setAudienceValue] = useState("Công Khai");
  const [openAudience, setOpenAudience] = useState(false);
  const audiance: { [key: string]: string } = {
    "Công Khai": "public",
    "Riêng Tư": "private",
    "Bạn Bè": "friend",
  };
  useEffect(() => {
    const getTags = async () => {
      const res: any = await getAllTags();
      res?.metadata?.map((tag: any) => {
        tags.push(tag);
      });
      setTagValue(tags[0]);
    };
    getTags();
  }, []);

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const img = document.createElement("img");
    img.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(img.outerHTML);
  };

  const handleOpenTag = () => {
    setOpenTag(true);
  };
  const handleOk = () => {
    setOpenTag(true);
  };
  const handleCancel = () => {
    setOpenTag(false);
    setOpenAudience(false);
  };
  const handleTextChange = (tag: any) => {
    setTagValue(tag);
  };
  // const handleAudience =

  const handleOpenAudience = () => {
    setOpenAudience(true);
  };
  const handleAudienceChange = (e: RadioChangeEvent) => {
    setAudienceValue(e.target.value);
  };

  const CreatePost = async () => {
    setOpenTag(false);
    setOpenAudience(false);
    setShowSpinner(true);
    onSuccess();
    try {
      const formData = new FormData();
      fileList.map((file) => {
        if (file.originFileObj) {
          const blob = file.originFileObj as Blob;
          formData.append("image", blob);
        }
      });
      formData.append("content", postContent);
      formData.append("tagId", tagValue._id);
      formData.append("status", audiance[audienceValue]);
      const res: any = await createPost(formData);
      setTimeout(() => {
        setPost(res?.metadata);
        setShowSpinner(false);
      }, 3000);
      setPostContent("");
      setFileList([]);
      setTagValue(tags[0]);
      setAudienceValue("Công Khai");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContentStyleDiv>
      <h2>Bài Viết Mới</h2>
      <div className="contentHeader">
        <div className="user-wrapper">
          <div className="image-wrapper">
            <Image src={userInfo?.userInfo.avatar} width={40} height={40} />
          </div>
          <div className="des">
            <span>{userInfo?.displayName}</span>
            <div className="display-audience">
              <p>{audienceValue}</p>
            </div>
          </div>
        </div>
        <div className="userAction">
          <button onClick={handleOpenTag}>
            <TagOutlined />
          </button>
          <button onClick={handleOpenAudience}>
            <SettingOutlined />
          </button>
        </div>
      </div>
      <div className="user-input">
        <div>
          <TextArea
            maxLength={2000}
            variant={"filled"}
            rows={5}
            cols={10}
            value={postContent}
            placeholder="Hôm nay bạn thế nào..."
            onChange={handleContent}
            style={{
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
              resize: "none",
            }}
          />

          <ImgCrop modalTitle="Chỉnh sửa" rotationSlider>
            <CustomUploadStyled
              multiple={true}
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && "+ Upload"}
            </CustomUploadStyled>
          </ImgCrop>
          <div className="display-Tag" style={{ display: "flex", gap: "12px" }}>
            <TagOutlined />
            <p>{tagValue?.postTagContent}</p>
          </div>
          <div className="create-btn">
            <Button
              $width={"100px"}
              $color={darkMode ? "#fff" : "#352f44"}
              $hoverColor={darkMode ? "#000" : "#fff"}
              $borderColor={darkMode ? "#fff" : "#352f44"}
              $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
              $backgroundColor={darkMode ? "#000  " : "transparent" }
              onClick={CreatePost}
            >
              Đăng
            </Button>
          </div>
          <TagModal
            open={openTag}
            onOk={handleOk}
            onCancel={handleCancel}
            className="createModal"
            footer={null}
          >
            <Radio.Group
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
              value={tagValue?.postTagContent}
            >
              <h3>Chọn Thẻ</h3>
              {tags.map((tag) => (
                <Radio
                  value={tag?.postTagContent as string}
                  key={tag?._id}
                  onClick={() => handleTextChange(tag)}
                >
                  {tag?.postTagContent}
                </Radio>
              ))}
            </Radio.Group>
          </TagModal>
          <AudienceModal
            open={openAudience}
            onOk={handleOk}
            onCancel={handleCancel}
            className="createModal"
            footer={null}
          >
            <Radio.Group
              onChange={handleAudienceChange}
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
              value={audienceValue}
            >
              <h3>Ai có thể xem bài viết của bạn ?</h3>
              <h5 style={{ fontWeight: "400" }}>
                Bài đăng của bạn sẽ hiển thị trong Feed, trang cá nhân và trong
                kết quả tìm kiếm
              </h5>
              <h5 style={{ fontWeight: "400" }}>
                Bạn có thể thay đổi đối tượng có thể xem bài đăng dưới đây
              </h5>
              <Radio value={"Công Khai"}>Công Khai</Radio>
              <Radio value={"Riêng Tư"}>Riêng Tư</Radio>
              <Radio value={"Bạn Bè"}>Bạn Bè</Radio>
            </Radio.Group>
          </AudienceModal>
        </div>
      </div>
    </ContentStyleDiv>
  );
};
