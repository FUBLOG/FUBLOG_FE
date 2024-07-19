import React, { useState, ChangeEvent, useEffect } from "react";
import {  DatePicker, Form as AntForm, message } from "antd";
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
import useThemeStore from "@/hooks/useTheme";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
const { TextArea } = S;
const dateFormat = 'YYYY-MM-DD';
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
    background: #faf0e6;
    color: #000;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 4px;
  }

  option:hover {
    background: #352f44 !important;
    color: #faf0e6 !important;
  }

  option:checked {
    background-color: #352f44 !important;
    color: #faf0e6 !important;
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
  dateOfBirth: any;
  sex: string;
  relationship: string;
  bio: string;
  education: string;
  avatar: string;
}

interface UpdateProfileProps {
  visible: boolean;
  handleCancel: () => void;
  onProfileUpdate: (updatedProfile: any) => void;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({
  visible,
  handleCancel,
  onProfileUpdate,
}) => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const { profile, setProfile } = useProfile();
  const format = "YYYY-MM-DD";
  const [form] = AntForm.useForm();
  const initialFormData: ProfileData = {
    displayName: profile?.user?.displayName || "",
    dateOfBirth: profile?.user?.dateOfBirth
      ? (profile?.user?.dateOfBirth)
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
        dateOfBirth: dayjs(profile.user?.dateOfBirth, dateFormat).add(1, "day"),
        sex: profile.user?.sex || "",
        relationship: profile.info?.relationship || "single",
        bio: profile.info?.bio || "",
        education: profile.info?.education || "",
        avatar: profile.info?.avatar || "",
      };
      setFormData(updatedFormData);
      form.setFieldsValue({
        ...updatedFormData,
      });
    }
    
  }, [profile, form]);

  const onFinish = async (values: any) => {
    const data = {
      displayName: values.displayName,
      dateOfBirth: values.dateOfBirth,
      sex: values.sex,
      relationship: values.relationship,
      bio: values.bio,
      education: values.education,
      avatar: formData.avatar,
    };

    setLoading(true);

    await patchRequest(profileEndpoint.CHANGE_PROFILE, {
      data,
      security: true,
    })
      .then(() => {
        message.success("Cập nhật hồ sơ thành công");
        const updatedProfile = {
          ...profile,
          user: {
            ...profile.user,
            displayName: data.displayName,
            dateOfBirth: data.dateOfBirth,
            sex: data.sex,
          },
          info: {
            ...profile.info,
            relationship: data.relationship,
            bio: data.bio,
            education: data.education,
            avatar: data.avatar,
          },
        };
        setProfile(updatedProfile);
        onProfileUpdate(updatedProfile);
        setFormData(data);
        form.setFieldsValue({
          ...data,
          dateOfBirth: data.dateOfBirth ? moment(data.dateOfBirth) : null,
        });
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
    form.setFieldsValue({ [name]: value });
  };

  const handleDateChange = (date: Date) => {
      setFormData({ ...formData, dateOfBirth: new Date(date)  });
  };

  const validateAge = (_: any, value: moment.Moment | null) => {
    if (value && moment().year() - value.year() < 16) {
      return Promise.reject(new Error("Tuổi phải lớn hơn hoặc bằng 16"));
    }
    return Promise.resolve();
  };

  return (
    <S.CustomModal
      title={null}
      visible={visible}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <S.ModalContent className={darkMode ? "theme-dark" : "theme-light"}>
        <S.TitleContainer className={darkMode ? "theme-dark" : "theme-light"}>
          <S.CenteredTitle variant="body-text-small-bold" fontSize="24px">
            Chỉnh sửa thông tin cá nhân
          </S.CenteredTitle>
        </S.TitleContainer>
        {formData.avatar && (
          <S.UserAvatar src={formData.avatar} alt="User Avatar" />
        )}
        <AntForm form={form} onFinish={onFinish}>
          <S.GridContainer>
            <S.GridItem>
              <S.Label>
                <UserOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="16px">
                  Tên người dùng
                </Typography>
              </S.Label>
              <AntForm.Item name="displayName">
                <CustomInput
                  placeholder="Tên người dùng"
                  value={formData.displayName}
                  onChange={handleChange}
                />
              </AntForm.Item>
            </S.GridItem>

            <S.GridItem>
              <S.Label>
                <CalendarOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="16px">
                  Ngày tháng năm sinh
                </Typography>
              </S.Label>
              <AntForm.Item
                name="dateOfBirth"
                rules={[{ validator: validateAge }]}
              >
                <CustomDatePicker
                  suffixIcon={
                    <CalendarOutlined
                      style={{ color: "black", fontSize: "18px" }}
                    />
                  }
                  style={{
                    background: "transparent",
                    border: "1.5px solid #000",
                    padding: "3px 12px",
                    width: "100%",
                    fontSize: "20px",
                  }}
                  format={format}
                  onChange={(date) => handleDateChange(date as Date)}
                  placeholder="Ngày tháng năm sinh"
                  
                />
              </AntForm.Item>
            </S.GridItem>

            <S.GridItem>
              <S.Label>
                <WomanOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="16px">
                  Giới tính
                </Typography>
              </S.Label>
              <AntForm.Item name="sex">
                <CustomSelect
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                >
                  <option value="Nam">{formData.sex}</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </CustomSelect>
              </AntForm.Item>
            </S.GridItem>

            <S.GridItem>
              <S.Label>
                <HeartOutlined style={{ marginRight: "8px" }} />
                <Typography variant="body-text-small-bold" fontSize="16px">
                  Tình trạng hôn nhân
                </Typography>
              </S.Label>
              <AntForm.Item name="relationship">
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
                <Typography variant="body-text-small-bold" fontSize="16px">
                  Giáo dục
                </Typography>
              </S.Label>
              <AntForm.Item name="education">
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
                <Typography variant="body-text-small-bold" fontSize="16px">
                  Tiểu sử
                </Typography>
              </S.Label>
              <AntForm.Item name="bio">
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
              disabled={loading}
              $color={"#fff"}
              $backgroundColor="#000"
              $hoverColor={"#000"}
              $hoverBackgroundColor={"#45410a"}
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
