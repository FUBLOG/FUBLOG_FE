"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, CheckboxProps, DatePicker, Form, List } from "antd";
import FormItem from "antd/es/form/FormItem";
import Modal from "antd/es/modal/Modal";

import Input from "@/components/core/common/form/Input";
import InputPassword from "@/components/core/common/form/InputPassword";
import Typography from "@/components/core/common/Typography";
import Button from "@/components/core/common/Button";

import useModal from "@/hooks/useModal";

import * as S from "./styles";

function FormSignUp() {
  const modalState = useModal();
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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

  return (
    <>
      <Modal
        wrapClassName="modalWrap"
        width={"70%"}
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
        <Typography
          variant="h1"
          color="#B9B4C7"
          fontSize="x-large"
          align="center"
        >
          ĐĂNG KÝ
        </Typography>

        <Form
          name="basic"
          style={{ width: "100%" }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <FormItem
            name="surname"
            rules={[{ required: true, message: "Không để trống ô này" }]}
          >
            <Input
              placeholder="Nhập họ"
              prefix={<UserOutlined />}
              isRequired
              label="Họ"
            />
          </FormItem>
          <FormItem
            name="name"
            rules={[{ required: true, message: "Không để trống ô này" }]}
          >
            <Input
              placeholder="Nhập tên"
              prefix={<UserOutlined />}
              isRequired
              label="Tên"
            />
          </FormItem>
          <FormItem
            name="mail"
            rules={[{ required: true, message: "Vui lòng nhập email" }]}
          >
            <Input
              placeholder="Nhập email"
              prefix={<UserOutlined />}
              isRequired
              label="Email"
            />
          </FormItem>
          <FormItem
            name="birthday"
            rules={[
              { required: true, message: "Vui lòng nhập ngày tháng năm sinh" },
            ]}
          >
            <Typography
              padding="0 0 8px 0"
              variant="caption-small"
              color="#B9B4C7"
            >
              Nhập ngày tháng năm sinh <span style={{ color: "red" }}>*</span>
            </Typography>

            <DatePicker format="YYYY-MM-DD" placeholder="Nhập ngày" />
          </FormItem>
          <FormItem
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <InputPassword
              placeholder="Nhập mật khẩu"
              prefix={<LockOutlined />}
              isRequired
              label="Mật khẩu"
            />
          </FormItem>
          <Checkbox onChange={onChange}>
            <Typography
              variant="body-text-small-normal"
              color="#B9B4C7"
              fontSize="xx-small"
            >
              Tôi đồng ý với các điều khoản của HaS?
            </Typography>
            <Button
              type="link"
              onClick={() => {
                return modalState.openModal();
              }}
              $padding="0px !important"
            >
              <Typography
                variant="caption-small"
                color="#B9B4C7"
                fontSize="xx-small"
                textDecoration="underline"
              >
                Điều khoản
              </Typography>
            </Button>
          </Checkbox>

          <FormItem
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              htmlType="submit"
              className="ButtonWrapper"
              type="default"
              $backgroundColor="#FAF0E6"
              $margin="30px 0 0 0"
              $width={"100px"}
            >
              ĐĂNG KÝ
            </Button>
          </FormItem>

          <S.Typography>
            <Typography
              variant="body-text-small-normal"
              color="#B9B4C7"
              fontSize="xx-small"
            >
              Đã có tài khoản?
            </Typography>
            <a href="/sign-in">
              <Typography
                variant="caption-small"
                color="#B9B4C7"
                fontSize="xx-small"
                textDecoration="underline"
              >
                Đăng nhập
              </Typography>
            </a>
          </S.Typography>
        </Form>
      </S.HomeWrapper>
    </>
  );
}

export default FormSignUp;
