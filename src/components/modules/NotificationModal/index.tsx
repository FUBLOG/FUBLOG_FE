import React, { useState } from "react";
import { Modal, Tabs } from "antd";
import * as S from "./style";
import NotificationTab from "./NotificationTab";
import FriendTab from "./FriendTab";

const { TabPane } = Tabs;

interface Notification {
  id: number;
  title: string;
  avatar: string;
  createdAt: Date;
  link: string;
}

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  visible,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      destroyOnClose={true}
      footer={null}
      bodyStyle={{
        padding: 0,
      }}
      centered
    >
      <S.NotificationContainer>
        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          centered
          tabBarStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#352F44",
          }}
          className="custom-tabs"
        >
          <TabPane tab="Thông báo" key="1">
            <S.TabContent>
              <NotificationTab onClose />
            </S.TabContent>
          </TabPane>
          <TabPane tab="Bạn bè" key="2">
            <S.TabContent>
              <FriendTab onClose />
            </S.TabContent>
          </TabPane>
        </Tabs>
      </S.NotificationContainer>
    </Modal>
  );
};

export default NotificationModal;
