import React, { useContext, useEffect, useState } from "react";
import { AudienceModal, ContentStyleDiv, TagModal } from "./style";
import Image, { StaticImageData } from "next/legacy/image";
import {
  SettingOutlined,
  TagOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import Button from "@/components/core/common/Button";
import { Radio, Upload} from "antd";
import type { GetProp, RadioChangeEvent, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";
import { PostContext } from "@/components/core/layouts/MainLayout/Context";
import { v4 as uuidv4 } from "uuid";
import { getRequest, postRequest } from "@/services/request";
import { postEndpoint, tagEndpoint } from "@/services/endpoint";
import { useAuthContext } from "@/contexts/AuthContext";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface PostContent {
  user: {
    name: string;
    avatar: StaticImageData;
  };
  onSuccess: () => void;
}

export const PostContent: React.FC<PostContent> = ({ user, onSuccess }) => {
  const { setShowSpinner } = useContext(PostContext);

  const [postContent, setPostContent] = useState("");

  const { addPost } = useContext(PostContext);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [tagValue, setTagValue] = useState("Khác");

  const [openTag, setOpenTag] = useState(false);

  const [tags, setTags] = useState<any[]>([]);

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
  const handleTextChange = (e: RadioChangeEvent) => {
    setTagValue(e.target.value);
  };
  // const handleAudience =

  const [audienceValue, setAudienceValue] = useState("Công Khai");
  const [openAudience, setOpenAudience] = useState(false);
  const handleOpenAudience = () => {
    setOpenAudience(true);
  };
  const handleAudienceChange = (e: RadioChangeEvent) => {
    setAudienceValue(e.target.value);
  };

  const { userInfo} = useAuthContext();

  const CreatePost = async () => {
    try {
      const formData = new FormData();
      fileList.map((file) => {
        if (file.originFileObj) {
          const blob = file.originFileObj as Blob;
          formData.append("image", blob);
        }
      });
      formData.append("content", postContent);
      formData.append("tagId", "66739c62f5ceba09bfa40b81");
      const res: any = await postRequest(
        postEndpoint.POST_POST,
        {
          data: formData,
          security: true, // Nếu cần bảo mật
        },
        true
      );
      const getres: any = await getRequest(postEndpoint.GET_POSTS);
      console.log(getres?.metadata);
      
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }

    // Create form data
    // console.log(userInfo);

    setShowSpinner(true);
    setTimeout(() => {
      addPost({
        id: uuidv4(),
        user: userInfo.profileHash,
        avatar: userInfo.userInfo.avatar,
        content: postContent,
        images: fileList.map((file) => file.thumbUrl as string),
        tag: tagValue,
        initialLikes: 0,
        initialComments: 0,
        initialCommentsData: [],
      });
      setShowSpinner(false);
    }, 4000);
    setPostContent("");
    setFileList([]);
    setTagValue("Khác");
    setAudienceValue("Công Khai");

    // Đóng các modal
    setOpenTag(false);
    setOpenAudience(false);
    onSuccess();

    // Chỉ gọi lại useEffect khi showSpinner thay đổi
  };
  useEffect(() => {
    const setup = async () => {
      const res: any = await getRequest(tagEndpoint.GET_TAG);
      setTags(res?.metadata);
    };
    setup();
  }, []);

  return (
    <ContentStyleDiv>
      <h2>Bài Viết Mới</h2>
      <div className="contentHeader">
        <div className="user-wrapper">
          <div className="image-wrapper">
            <Image src={userInfo.userInfo.avatar} width={40} height={40} />
          </div>
          <div className="des">
            <span>{userInfo.profileHash}</span>
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
            <Upload
              multiple={true}
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && "+ Upload"}
            </Upload>
          </ImgCrop>
          <div className="display-Tag" style={{ display: "flex", gap: "12px" }}>
            <TagOutlined />
            <p>{tagValue}</p>
          </div>
          <div className="create-btn">
            <Button $width={"100px"} onClick={CreatePost}>
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
              value={tagValue}
              onChange={handleTextChange}
            >
              <h3>Chọn Thẻ</h3>
              {tags.map((tag) => (
                <Radio value={tag?.postTagContent as string} key={tag?._id}>
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
