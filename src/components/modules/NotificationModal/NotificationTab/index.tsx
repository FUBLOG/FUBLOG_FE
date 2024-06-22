import { useState, useEffect } from 'react';
import { List, Avatar, Skeleton, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { fromNow } from '@/utils';
import { useGetNotification } from '@/hooks/useNotification';
import { markNotificationAsRead, markAllNotificationsAsRead } from '@/services/api/notification';
import * as S from '../style';

const NotificationTab = () => {
  const { loading, notifications } = useGetNotification();
  const [localNotifications, setLocalNotifications] = useState<any[]>([]);

  useEffect(() => {
    setLocalNotifications(notifications);
  }, [notifications]);

  const handleMarkRead = async (notificationId: string) => {
    try {
      await markNotificationAsRead(notificationId);
      setLocalNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification._id === notificationId 
            ? { ...notification, isRead: true }
            : notification
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const handleAllMarkRead = async () => {
    try {
      await markAllNotificationsAsRead();
      setLocalNotifications((prevNotifications) =>
        prevNotifications.map((notification) => ({
          ...notification,
          isRead: true,
        }))
      );
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <S.NotificationContainer>
      <S.MarkButton>
        <Button
          type="primary"
          icon={<CheckOutlined />}
          onClick={handleAllMarkRead}
        >
          Đánh dấu tất cả đã đọc
        </Button>
      </S.MarkButton>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item: any) => (
          <List.Item
            key={item.id}
            className={`notification-item ${item.isRead ? 'read' : 'unread'}`}
            onClick={() => handleMarkRead(item._id)}
          >
            <List.Item.Meta
              avatar={<Avatar src={item?.image[0]} />}
              title={<span>{item.title}</span>}
              description={<span>{fromNow(new Date(item.createdAt))}</span>}
            />
          </List.Item>
        )}
      />
    </S.NotificationContainer>
  );
};

const Loading = () => {
  return <Skeleton active round avatar title />;
};

export default NotificationTab;
