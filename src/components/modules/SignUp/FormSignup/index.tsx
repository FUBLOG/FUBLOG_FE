"use client";

import { LockOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import { DatePicker, Dropdown, Form, List, MenuProps, message, Space } from "antd";
import FormItem from "antd/es/form/FormItem";
import Modal from "antd/es/modal/Modal";
import useModal from "@/hooks/useModal";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

import Input from "@/components/core/common/form/Input";
import InputPassword from "@/components/core/common/form/InputPassword";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";
import { authEndpoint } from "@/services/endpoint";
import { postRequest } from "@/services/request";
import * as S from "./styles";
import useThemeStore from "@/hooks/useTheme";

interface PageProps {
  readonly setNextStep: Dispatch<SetStateAction<string>>;
  readonly setFormData: Dispatch<SetStateAction<any>>;
  readonly formData: any;
  readonly setEmail: Dispatch<SetStateAction<string>>;
}
function FormSignUp(props: PageProps) {
  const [validatePassword, setValidatePassword] = useState<boolean | null>(null);
  const modalState = useModal();
  const [sex, setSex] = useState("Nam");
  const [signal, setSignal] = useState(false);
  const items: MenuProps["items"] = [
    {
      label: "Nam",
      key: "0",
      onClick: () => {
        setSex("Nam");
      },
    },
    {
      label: "Nữ",
      key: "1",
      onClick: () => {
        setSex("Nữ  ");
      },
    },
    {
      label: "Khác",
      key: "2",
      onClick: () => {
        setSex("Khác");
      },
    },
  ];
  const data = [
    "Mạng xã hội HaS chỉ dành cho những người từ 16 tuổi trở lên để đảm bảo tính phù hợp với nội dung và môi trường của cộng đồng.",
    "Nội dung phù hợp: Mọi bài đăng phải tuân thủ các nguyên tắc đạo đức và pháp luật. Bất kỳ nội dung nào bạo lực, đồi trụy, kích động, hoặc vi phạm bản quyền sẽ bị xóa và người đăng có thể bị khóa tài khoản.",
    "Chia sẻ thông tin cá nhân: Người dùng không nên chia sẻ thông tin cá nhân nhạy cảm hoặc riêng tư của bản thân hoặc người khác trên các bài đăng mà không có sự đồng ý của họ.",
    "Bảo vệ quyền riêng tư: Trước khi đăng bài với hình ảnh hoặc thông tin về người khác, người đăng cần có sự đồng ý rõ ràng từ họ.",
    "Mạng xã hội HaS khuyến khích việc chia sẻ những trải nghiệm tích cực, lời khuyên hữu ích và hỗ trợ tinh thần cho cộng đồng.",
    "Tôn trọng và đồng cảm: Mọi thành viên được khuyến khích đối xử với nhau với sự tôn trọng và đồng cảm. Hành vi xúc phạm, phân biệt đối xử, hoặc quấy rối sẽ không được chấp nhận.",
    "Bảo mật thông tin: HaS cam kết bảo vệ thông tin cá nhân của người dùng. Thông tin cá nhân chỉ được sử dụng cho mục đích nội dung và liên lạc trong cộng đồng và sẽ không được chia sẻ với bên thứ ba mà không có sự đồng ý của người dùng.",
    "Nội dung phù hợp: Mọi nội dung được chia sẻ trên HaS phải tuân thủ các nguyên tắc đạo đức và pháp luật. Nội dung bạo lực, đồi trụy, kích động, hay vi phạm bản quyền sẽ bị xóa và người đăng có thể bị khóa tài khoản.",
    "HaS không chấp nhận bất kỳ hình thức kích động hoặc chủ trương cụ thể nào, bao gồm cả sự phân biệt đối xử dựa trên tôn giáo, chủng tộc, giới tính, hoặc quốc gia.",
  ];
  const validateAge = (_: any, value: any) => {
    if (!value) {
      return Promise.reject(new Error("Vui lòng nhập ngày tháng năm sinh"));
    }

    if (2024 - value.$y < 16) {
      return Promise.reject(new Error("Bạn phải từ 16 tuổi trở lên!"));
    }
    return Promise.resolve();
  };
  const handleValidatePassword = (value: any) => {
    const regrex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;
    if (!regrex.test(value)) setValidatePassword(false);
    else setValidatePassword(true);
    console.log(validatePassword);
  };
  const onFinish = async (values: any) => {
    if (validatePassword) {
      try {
        props.setEmail(values?.email);
        const data = {
          firstName: values?.firstName!,
          lastName: values?.lastName!,
          email: values?.email!,
          password: values?.password!,
          dateOfBirth: values?.dateOfBirth!,
          sex: sex!,
        };
        props.setFormData(data);

        await postRequest(authEndpoint.SIGN_UP, {
          data: data,
          security: true,
        });
        props.setNextStep("verification");
      } catch (error) {}
    } else{
      message.info("Mật khẩu phải bao gồm từ 8 đến 32 kí tự, 1 chữ viết hoa, 1 kí tự đặc biệt.");
    }
  };
  const darkMode = useThemeStore((state) => state.darkMode);
  return (
    <>
      <Modal
        wrapClassName="modalWrap"
        width={"60%"}
        open={modalState.visible}
        onCancel={modalState.closeModal}
        footer={null}
      >
        <S.Modal>
          <Typography variant="h4" color="#352F44" align="center">
            ĐIỀU KHOẢN HAS - HEALING AND SHARING
          </Typography>
          <List
            size="small"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item style={{ color: "#352F44" }} key={index}>
                {index + 1}. {item}
              </List.Item>
            )}
          />
        </S.Modal>
      </Modal>

      <S.HomeWrapper>
        <S.TitleLogin>
          <Typography
            variant="h1"
            color={darkMode ? "#F7D600" : "#000"}
            fontSize="x-large"
            align="center"
            margin="0 0  0 0"
          >
            ĐĂNG KÝ
          </Typography>
        </S.TitleLogin>

        <Form
          name="basic"
          style={{ width: "100%" }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <FormItem
              name="firstName"
              rules={[{ required: true, message: "Không để trống ô này" }]}
              style={{ width: "100%" }}
              initialValue={props?.formData?.firstName}
            >
              <Input
                placeholder="Nhập họ"
                prefix={<UserOutlined style={{ color: "#000" }} />}
                isRequired
                label="Họ"
                colorLabel={darkMode ? "#F7D600" : "#000"}
              />
            </FormItem>
            <FormItem
              name="lastName"
              rules={[{ required: true, message: "Không để trống ô này" }]}
              style={{ width: "100%" }}
              initialValue={props?.formData?.firstName}
            >
              <Input
                placeholder="Nhập tên"
                prefix={<UserOutlined style={{ color: "#000" }} />}
                isRequired
                label="Tên"
                colorLabel={darkMode ? "#F7D600" : "#000"}
              />
            </FormItem>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div style={{ width: "100%" }}>
              <Typography
                padding="0 0 8px 0"
                variant="caption-small"
                color={darkMode ? "#F7D600" : "#000"}
              >
                Ngày tháng năm sinh <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormItem
                name="dateOfBirth"
                rules={[
                  {
                    validator: validateAge,
                  },
                ]}
                initialValue={props?.formData?.dateOfBirth}
              >
                <DatePicker format="YYYY-MM-DD" placeholder="Nhập ngày" />
              </FormItem>
            </div>
            <div style={{ width: "100%" }}>
              <Typography
                padding="0 0 8px 0"
                variant="caption-small"
                color={darkMode ? "#F7D600" : "#000"}
              >
                Giới tính <span style={{ color: "red" }}>*</span>
              </Typography>
              <FormItem name="sex">
                <Button
                  $color="#000"
                  $padding="12px 16px !important"
                  $backgroundColor="white"
                  $hoverBackgroundColor="white"
                  type="primary"
                  style={{
                    width: "80px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Dropdown menu={{ items }} trigger={["click"]}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <Space>
                        {sex}
                        <DownOutlined style={{ color: "#000" }} />
                      </Space>
                    </a>
                  </Dropdown>
                </Button>
              </FormItem>
            </div>
          </div>
          <FormItem
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email" }]}
            initialValue={props?.formData?.email}
          >
            <Input
              placeholder="Nhập email"
              prefix={<UserOutlined style={{ color: "#000" }} />}
              isRequired
              label="Email"
              colorLabel={darkMode ? "#F7D600" : "#000"}
            />
          </FormItem>

          <FormItem
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            initialValue={props?.formData?.firstName}
          >
            <InputPassword
              placeholder="Nhập mật khẩu"
              prefix={<LockOutlined style={{ color: "#000" }} />}
              isRequired
              label="Mật khẩu"
              colorLabel={darkMode ? "#F7D600" : "#000"}
              onChange={(e) => handleValidatePassword(e.target.value)}
            />
          </FormItem>
          <div>
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "#F7D600" : "#000"}
              fontSize="xx-small"
            >
              Việc bạn nhấn vào đăng ký, bạn đồng ý với các{" "}
              <span
                onClick={() => {
                  return modalState.openModal();
                }}
                style={{
                  color: darkMode ? "#F7D600" : "#000",
                  fontSize: "xx-small",
                  textDecoration: "underline",
                }}
              >
                Điều khoản
              </span>{" "}
              của HaS - mạng xã hội dành cho người Việt
            </Typography>
          </div>
          <FormItem
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            initialValue={props?.formData?.firstName}
          >
            <Button
              htmlType="submit"
              className="ButtonWrapper"
              type="default"
              $color={darkMode ? "#fff" : "#352f44"}
              $hoverColor={darkMode ? "#000" : "#fff"}
              $borderColor={darkMode ? "#fff" : "#352f44"}
              $hoverBackgroundColor={darkMode ? "#F7D600" : "#000"}
              $margin="30px 0 0 0"
              $width={"100px"}
            >
              ĐĂNG KÝ
            </Button>
          </FormItem>

          <S.Typography>
            <Typography
              variant="body-text-small-normal"
              color={darkMode ? "#F7D600" : "#000"}
              fontSize="xx-small"
            >
              Đã có tài khoản?
            </Typography>
            <Link href="/sign-in">
              <Typography
                variant="caption-small"
                color={darkMode ? "#F7D600" : "#000"}
                fontSize="xx-small"
                textDecoration="underline"
              >
                Đăng nhập
              </Typography>
            </Link>
          </S.Typography>
        </Form>
      </S.HomeWrapper>
    </>
  );
}

export default FormSignUp;
