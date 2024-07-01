import React, { useState } from "react";
import { Badge, Modal, Tabs } from "antd";
import * as S from "./style";
import NotificationTab from "./NotificationTab";
import FriendTab from "./FriendTab";
import useSidebarBadge from "@/hooks/useSidebarBadge";

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
  const {friendRequestCount,notificationCount} = useSidebarBadge();
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
          <TabPane
            tab={<Badge count={notificationCount} offset={[10, 0]}>
              Thông Báo
            </Badge>}
            key="1" destroyInactiveTabPane={true}>
            <S.TabContent >
              <NotificationTab onClose />
            </S.TabContent>
          </TabPane>
          <TabPane tab={
            <Badge count={friendRequestCount} offset={[10, 0]}>
              Bạn bè
            </Badge>
          } key="2" destroyInactiveTabPane={true}>
            <S.TabContent>
              <FriendTab onClose />
            </S.TabContent>
          </TabPane>
        </Tabs>
      </S.NotificationContainer>
    </Modal >
  );
};

export default NotificationModal;
