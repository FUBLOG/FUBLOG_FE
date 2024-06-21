import React from 'react';
import { List, Avatar } from 'antd';
import { useGetNotification, useMarkNotificationAsRead } from '@/hooks/useNotification';

const NotificationTab: React.FC = () => {
  const { notifications, loading } = useGetNotification();
  const { markAsRead } = useMarkNotificationAsRead();

  return (
    <List
      loading={loading}
      itemLayout="horizontal"
      dataSource={notifications}
      renderItem={(item: any) => (
        <List.Item
          className={`notification-item ${item.seen ? 'read' : 'unread'}`}
          onClick={() => markAsRead(item.id)}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar || "./default-avatar.png"} />}
            title={
              <span
                style={{ fontWeight: item.seen ? 'normal' : 'bold', cursor: 'pointer' }}
                onClick={() => window.location.href = item.link}
              >
                {item.title}
              </span>
            }
            description={new Date(item.createdAt).toLocaleString()}
          />
        </List.Item>
      )}
    />
  );
};

export default NotificationTab;
