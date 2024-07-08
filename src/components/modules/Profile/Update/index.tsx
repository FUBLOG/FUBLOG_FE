import React, { useState, ChangeEvent, useEffect } from "react";
import { Modal, DatePicker, Form as AntForm, message } from "antd";
import moment from "moment";
import { useProfile } from "@/hooks/useProfile";
import * as S from "./styles";
import styled from "styled-components";
import {
  HeartOutlined,
  WomanOutlined,
  CalendarOutlined,
  BookOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import { patchRequest } from "@/services/request";
import { profileEndpoint } from "@/services/endpoint";

const { TextArea } = S;

const CustomInput = styled(S.Input)`
  background: transparent !important;
  border: 1.5px solid #000 !important;
  border-radius: 4px !important;
  padding: 6px 10px !important;
  width: 100%;
`;

const CustomTextArea = styled(TextArea)`
  background: transparent !important;
  border: 1.5px solid #000 !important;
  border-radius: 4px !important;
  width: 100% !important;
  height: 72px !important;
  padding: 6px 10px;
`;

const CustomSelect = styled.select`
  background: transparent !important;
  border: 1.5px solid #000 !important;
  border-radius: 4px !important;
  width: 100%;
  padding: 6px 10px;

  &:focus {
    outline: none;
  }

  option {
    background:#FAF0E6;
    color: #000;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 4px;
  }

  option:hover {
    background: #352F44 !important;
    color: #FAF0E6 !important;
  }

  option:checked {
    background-color: #352F44 !important;
    color: #FAF0E6 !important;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  .ant-picker.ant-picker-outlined {
    background: transparent !important;
    border: 1.5px solid #000 !important;
    border-radius: 4px !important;
    padding: 6px 10px !important;
  }
  .ant-picker-input > input {
    background: transparent !important;
  }
`;

interface ProfileData {
  displayName: string;
  dateOfBirth: string;
  sex: string;
  relationship: string;
  bio: string;
  education: string;
  avatar: string;
}

interface UpdateProfileProps {
  visible: boolean;
  handleCancel: () => void;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({
  visible,
  handleCancel,
}) => {
  const { profile } = useProfile();
  const format = "YYYY-MM-DD";
  const initialFormData: ProfileData = {
    displayName: profile?.user?.displayName || "",
    dateOfBirth: profile?.user?.dateOfBirth
      ? moment(profile?.user?.dateOfBirth).format(format)
      : "",
    sex: profile?.user?.sex || "",
    relationship: profile?.info?.relationship || "single",
    bio: profile?.info?.bio || "",
    education: profile?.info?.education || "",
    avatar: profile?.info?.avatar || "",
  };

  const [formData, setFormData] = useState<ProfileData>(initialFormData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      const updatedFormData: ProfileData = {
        displayName: profile.user?.displayName || "",
        dateOfBirth: profile.user?.dateOfBirth
          ? moment(profile.user.dateOfBirth).format(format)
          : "",
        sex: profile.user?.sex || "",
        relationship: profile.info?.relationship || "single",
        bio: profile.info?.bio || "",
        education: profile.info?.education || "",
        avatar: profile.info?.avatar || "",
      };
      setFormData(updatedFormData);
    }
  }, [profile]);

  const onFinish = async (values: any): Promise<void> => {
    const data = {
      displayName: values.displayName,
      dateOfBirth: values.dateOfBirth ? values.dateOfBirth.format(format) : "",
      sex: values.sex,
      relationship: values.relationship,
      bio: values.bio,
      education: values.education,
    };
    
    setLoading(true);
    console.log(data);

    await patchRequest(profileEndpoint.CHANGE_PROFILE, {
      data,
      security: true,
    })
      .then(() => {
        message.success("Cập nhật hồ sơ thành công");
        setLoading(false);
        handleCancel();
      })
      .catch((error) => {
        console.error("Failed to update profile", error);
        message.error("Cập nhật hồ sơ thất bại");
        setLoading(false);
      });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: moment.Moment | null, dateString: string) => {
    setFormData({ ...formData, dateOfBirth: dateString });
  };

  return (
    <S.CustomModal
      title={null}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <S.ModalContent>
        <S.TitleContainer>
          <S.CenteredTitle variant="h5" fontSize="24px">
            Chỉnh sửa thông tin cá nhân
          </S.CenteredTitle>
        </S.TitleContainer>
        {formData.avatar && (
          <S.UserAvatar src={formData.avatar} alt="User Avatar" />
        )}
        <AntForm onFinish={onFinish}>
          <S.GridContainer>
            <S.GridItem>
              <S.Label>
                <UserOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="18px">
                  Tên người dùng
                </Typography>
              </S.Label>
              <AntForm.Item
                name="displayName"
                rules={[{ required: true, message: "Vui lòng nhập tên người dùng" }]}
              >
                <CustomInput
                  placeholder="Tên người dùng"
                />
              </AntForm.Item>
            </S.GridItem>

            <S.GridItem>
              <S.Label>
                <CalendarOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="18px">
                  Ngày tháng năm sinh
                </Typography>
              </S.Label>
              <AntForm.Item
                name="dateOfBirth"
                rules={[{ required: true, message: "Vui lòng nhập ngày tháng năm sinh" }]}
              >
                <CustomDatePicker
                  suffixIcon={<CalendarOutlined style={{ color: 'black', fontSize: '18px' }} />}
                  style={{ background: "transparent", border: "1.5px solid #000", padding: "3px 6px",}}
                  format={format}
                  value={
                    formData.dateOfBirth
                      ? moment(formData.dateOfBirth, format)
                      : null
                  }
                  onChange={handleDateChange as any}
                  placeholder="Ngày tháng năm sinh"
                />
              </AntForm.Item>
            </S.GridItem>

            <S.GridItem>
              <S.Label>
                <WomanOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="18px">
                  Giới tính
                </Typography>
              </S.Label>
              <AntForm.Item
                name="sex"
                rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
              >
                <CustomSelect
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </CustomSelect>
              </AntForm.Item>
            </S.GridItem>

            <S.GridItem>
              <S.Label>
                <HeartOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="18px">
                  Tình trạng hôn nhân
                </Typography>
              </S.Label>
              <AntForm.Item
                name="relationship"
                rules={[{ required: true, message: "Vui lòng chọn tình trạng hôn nhân" }]}
              >
                <CustomSelect
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                >
                  <option value="single">Độc thân</option>
                  <option value="married">Đã kết hôn</option>
                  <option value="divorced">Đã ly hôn</option>
                  <option value="complicated">Có mối quan hệ phức tạp</option>
                  <option value="in a relationship">Đang hẹn hò</option>
                </CustomSelect>
              </AntForm.Item>
            </S.GridItem>

            <S.GridItem>
              <S.Label>
                <BookOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="18px">
                  Giáo dục
                </Typography>
              </S.Label>
              <AntForm.Item
                name="education"
                rules={[{ required: true, message: "Vui lòng nhập giáo dục" }]}
              >
                <CustomInput
                  placeholder="Giáo dục"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                />
              </AntForm.Item>
            </S.GridItem>

            <S.GridItem>
              <S.Label>
                <FileTextOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="18px">
                  Tiểu sử
                </Typography>
              </S.Label>
              <AntForm.Item
                name="bio"
                rules={[{ required: true, message: "Vui lòng nhập tiểu sử" }]}
              >
                <CustomTextArea
                  placeholder="Tiểu sử"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                />
              </AntForm.Item>
            </S.GridItem>
          </S.GridContainer>

          <S.ButtonContainer>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              <Typography
                variant="body-text-small-bold"
                fontSize="18px"
                color="#fff"
              >
                Lưu
              </Typography>
            </Button>
          </S.ButtonContainer>
        </AntForm>
      </S.ModalContent>
    </S.CustomModal>
  );
};

export default UpdateProfile;
