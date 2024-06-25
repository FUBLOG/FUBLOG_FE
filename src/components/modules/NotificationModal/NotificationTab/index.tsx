import { useState, useEffect } from "react";
import { List, Avatar, Skeleton, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { fromNow } from "@/utils";
import { useGetNotification } from "@/hooks/useNotification";
import {
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "@/services/api/notification";
import * as S from "../style";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotificationTab = ({ onclose }: any) => {
  const { loading, notifications, setNotifications } = useGetNotification();
  const [localNotifications, setLocalNotifications] = useState<any[]>([]);

  useEffect(() => {
    setLocalNotifications(notifications);
  }, [notifications]);
  const router = useRouter();
  const handleMarkRead = async (notificationId: string) => {
    try {
      await markNotificationAsRead(notificationId);
      router.refresh();
      setLocalNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      );
      setNotifications(localNotifications);
    } catch (error) {
      router.refresh();
      console.error("Error ", error);
    }
  };

  const handleAllMarkRead = async () => {
    try {
      await markAllNotificationsAsRead()
        .then((res) => {
          console.log("resAll noti", res);
          router.refresh();

          setLocalNotifications((prevNotifications) =>
            prevNotifications.map((notification) => ({
              ...notification,
              isRead: true,
            }))
          );
          setNotifications(localNotifications);
          console.log("localNotifications", localNotifications);
        })
        .catch((error) => router.refresh());
    } catch (error) {}
  };
  function handleClick() {
    onclose();
  }
  return loading ? (
    <Loading />
  ) : (
    <S.NotificationContainer>
      <S.MarkButton>
        <Button
          type="primary"
          icon={<CheckOutlined />}
          onClick={() => handleAllMarkRead()}
        >
          Đánh dấu tất cả đã đọc
        </Button>
      </S.MarkButton>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item: any) => (
          <Link href={item?.link} onClick={handleClick}>
            <List.Item
              key={item.id}
              className={` ${
                item.isRead
                  ? "notification-read .ant-list-item-meta "
                  : "notification-unread .ant-list-item-meta"
              }`}
              onClick={() => handleMarkRead(item._id)}
            >
              <List.Item.Meta
                avatar={<Avatar src={item?.image[0]} />}
                title={<span>{item.title}</span>}
                description={<span>{fromNow(new Date(item.createdAt))}</span>}
              />
            </List.Item>
          </Link>
        )}
      />
    </S.NotificationContainer>
  );
};

const Loading = () => {
  return <Skeleton active round avatar title />;
};

export default NotificationTab;
