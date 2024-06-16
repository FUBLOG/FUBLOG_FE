import React, { useState } from 'react';
import { Modal, Tabs, List, Avatar } from 'antd';
import * as S from './style';
import { extractTime } from '@/utils';

const { TabPane } = Tabs;

interface Notification {
  id: number;
  title: string;
  avatar: string;
  createdAt: Date;
  link: string;
}

interface FriendRequest extends Notification {}

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ visible, onClose }) => {
  const [activeTab, setActiveTab] = useState('1');
  const [notifications] = useState<Notification[]>([
    { id: 1, title: 'Vĩnh Trung đã trả lời bình luận của bạn', avatar: '/vinhtrung.png', createdAt: new Date(), link: '/notifications/1' },
    { id: 2, title: 'Thanh Thủy đã bình luận về bài viết của bạn', avatar: '/thanhthuy.png', createdAt: new Date(Date.now() - 3600 * 1000), link: '/notifications/2' },
    { id: 3, title: 'Văn Mạnh đã thả tym bài viết của bạn', avatar: '/vanmanh.png', createdAt: new Date(Date.now() - 7200 * 1000), link: '/notifications/3' },
    { id: 4, title: 'Jos Phan Ái đã thả tym bài viết của bạn', avatar: '/jos2.jpg', createdAt: new Date(Date.now() - 10800 * 1000), link: '/notifications/4' },
    { id: 5, title: 'Thu Phương đã thả tym bài viết của bạn', avatar: 'thuphuong.png', createdAt: new Date(Date.now() - 14400 * 1000), link: '/notifications/5' },
    { id: 6, title: 'Vĩnh Trung đã phản hồi bình luận của bạn', avatar: '/vinhtrung.png', createdAt: new Date(Date.now() - 18000 * 1000), link: '/notifications/6' },
  ]);

  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([
    { id: 1, title: 'Jos Phan Ái muốn gửi cho bạn lời mời kết bạn', avatar: '/jos2.jpg', createdAt: new Date(), link: '/profile/1' },
    { id: 2, title: 'Thu Phương đã gửi cho bạn lời mời kết bạn', avatar: 'thuphuong.png', createdAt: new Date(Date.now() - 3600 * 1000), link: '/profile/2' },
    { id: 3, title: 'Pam Yêu đã gửi cho bạn lời mời kết bạn', avatar: 'pam.png', createdAt: new Date(Date.now() - 7200 * 1000), link: '/profile/3' },
    { id: 4, title: 'Thanh Thủy đã gửi cho bạn lời mời kết bạn', avatar: 'thanhthuy.png', createdAt: new Date(Date.now() - 10800 * 1000), link: '/profile/4' },
    { id: 5, title: 'Minh Quân đã gửi cho bạn lời mời kết bạn', avatar: 'minhquan.png', createdAt: new Date(Date.now() - 14400 * 1000), link: '/profile/5' },
    { id: 6, title: 'Văn Mạnh đã gửi cho bạn lời mời kết bạn', avatar: 'vanmanh.png', createdAt: new Date(Date.now() - 18000 * 1000), link: '/profile/6' },
  ]);

  const [acceptedFriends, setAcceptedFriends] = useState<Notification[]>([]);

  const removeRequest = (requestId: number) => {
    setFriendRequests(prevRequests => prevRequests.filter(request => request.id !== requestId));
  };

  const handleReject = (requestId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    updateFriendRequestTitle(requestId, `Bạn đã gỡ lời mời kết bạn từ ${getRequestName(requestId)}`);
    setTimeout(() => removeRequest(requestId), 3000);
  };

  const handleAccept = (requestId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    const acceptedRequest = friendRequests.find(request => request.id === requestId);
    if (acceptedRequest) {
      setAcceptedFriends(prevFriends => [
        { ...acceptedRequest, title: `Bạn đã chấp nhận lời mời kết bạn từ ${getRequestName(requestId)}` },
        ...prevFriends,
      ]);
      removeRequest(requestId);
    }
  };

  const getRequestName = (requestId: number) => {
    const request = friendRequests.find(request => request.id === requestId);
    return request ? request.title.split(' ')[0] : '';
  };

  const updateFriendRequestTitle = (requestId: number, newTitle: string) => {
    setFriendRequests(prevRequests => prevRequests.map(request =>
      request.id === requestId ? { ...request, title: newTitle } : request
    ));
  };

  const renderTimeAgo = (date: Date) => {
    return extractTime(date);
  };

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      bodyStyle={{ padding: 0 }}
      centered
    >
      <S.NotificationContainer>
        <Tabs
          activeKey={activeTab}
          onChange={key => setActiveTab(key)}
          centered
          tabBarStyle={{ fontWeight: 'bold', fontSize: '20px', color: '#352F44' }}
          className="custom-tabs"
        >
          <TabPane tab="Thông báo" key="1">
            <S.TabContent>
              <List
                itemLayout="horizontal"
                dataSource={notifications}
                renderItem={item => (
                  <List.Item
                    key={item.id}
                    className="notification-item"
                    onClick={() => window.location.href = item.link}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<span>{item.title}</span>}
                      description={<span>{renderTimeAgo(new Date(item.createdAt))}</span>}
                    />
                  </List.Item>
                )}
              />
            </S.TabContent>
          </TabPane>
          <TabPane tab="Bạn bè" key="2">
            <S.TabContent>
              <List
                itemLayout="horizontal"
                dataSource={[...acceptedFriends, ...friendRequests]}
                renderItem={item => (
                  <List.Item 
                    key={item.id} 
                    className="friend-item"
                    onClick={() => window.location.href = item.link}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<span>{item.title}</span>}
                      description={
                        <>
                          {renderTimeAgo(new Date(item.createdAt))}
                          {friendRequests.some(request => request.id === item.id) && (
                            <S.ActionButtons>
                              <button onClick={(event) => handleReject(item.id, event)}>Hủy</button>
                              <button onClick={(event) => handleAccept(item.id, event)}>Xác nhận</button>
                            </S.ActionButtons>
                          )}
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </S.TabContent>
          </TabPane>
        </Tabs>
      </S.NotificationContainer>
    </Modal>
  );
};

export default NotificationModal;
