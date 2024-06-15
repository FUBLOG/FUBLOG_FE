import React, { useState } from 'react';
import { Modal, Tabs, List, Avatar } from 'antd';
import * as S from './style';

const { TabPane } = Tabs;

interface NotificationModalProps {
  visible: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ visible, onClose }) => {
  const [activeTab, setActiveTab] = useState('1');
  const [notifications] = useState([
    { id: 1, title: 'Vĩnh Trung đã trả lời bình luận của bạn', avatar: '/vinhtrung.png' },
    { id: 2, title: 'Thanh Thủy đã bình luận về bài viết của bạn', avatar: '/thanhthuy.png' },
    { id: 3, title: 'Văn Mạnh đã thả tym bài viết của bạn', avatar: '/vanmanh.png' },
    { id: 4, title: 'Jos Phan Ái đã thả tym bài viết của bạn', avatar: '/jos2.jpg' },
    { id: 5, title: 'Thu Phương đã thả tym bài viết của bạn', avatar: 'thuphuong.png' },
    { id: 6, title: 'Vĩnh Trung đã phản hồi bình luận của bạn', avatar: '/vinhtrung.png' },
  ]);

  const [friendRequests, setFriendRequests] = useState([
    { id: 1, title: 'Jos Phan Ái muốn gửi cho bạn lời mời kết bạn', avatar: '/jos2.jpg' },
    { id: 2, title: 'Thu Phương đã gửi cho bạn lời mời kết bạn', avatar: 'thuphuong.png' },
    { id: 3, title: 'Pam Yêu đã gửi cho bạn lời mời kết bạn', avatar: 'pam.png' },
    { id: 4, title: 'Thanh Thủy đã gửi cho bạn lời mời kết bạn', avatar: 'thanhthuy.png' },
    { id: 5, title: 'Minh Quân đã gửi cho bạn lời mời kết bạn', avatar: 'minhquan.png' },
    { id: 6, title: 'Văn Mạnh đã gửi cho bạn lời mời kết bạn', avatar: 'vanmanh.png' },
  ]);

  const [acceptedFriends, setAcceptedFriends] = useState<
    { id: number; title: string; avatar: string }[]
  >([]);

  const handleReject = (requestId: number) => {
    setFriendRequests(friendRequests.filter(request => request.id !== requestId));
  };

  const handleAccept = (requestId: number) => {
    const acceptedRequest = friendRequests.find(request => request.id === requestId);
    if (acceptedRequest) {
      setFriendRequests(friendRequests.filter(request => request.id !== requestId));
      setAcceptedFriends([acceptedRequest, ...acceptedFriends]);
    }
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
          tabBarStyle={{ fontWeight: 'bold', fontSize: '20px', color:'#352F44' }}
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
                    onClick={() => console.log(`Clicked notification: ${item.title}`)}
                    className="notification-item"
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={item.title}
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
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={item.title}
                      description={
                        friendRequests.some(request => request.id === item.id) ? (
                          <S.ActionButtons>
                            <button onClick={() => handleReject(item.id)}>Hủy</button>
                            <button onClick={() => handleAccept(item.id)}>Xác nhận</button>
                          </S.ActionButtons>
                        ) : (
                          <span>Bạn và {item.title.split(' ')[0]} đã trở thành bạn bè</span>
                        )
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
