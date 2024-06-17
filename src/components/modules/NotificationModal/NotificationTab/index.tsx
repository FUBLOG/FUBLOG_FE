import { List, Avatar } from 'antd';
import TabPane from "antd/es/tabs/TabPane";
import * as S from '../style';
import { extractTime } from '@/utils';
import { useState } from 'react';
interface Notification {
    id: number;
    title: string;
    avatar: string;
    createdAt: Date;
    link: string;
}

const NotificationTab = () => {
    const [notifications] = useState<Notification[]>([
        { id: 1, title: 'Vĩnh Trung đã trả lời bình luận của bạn', avatar: '/vinhtrung.png', createdAt: new Date(), link: '/notifications/1' },
        { id: 2, title: 'Thanh Thủy đã bình luận về bài viết của bạn', avatar: '/thanhthuy.png', createdAt: new Date(Date.now() - 3600 * 1000), link: '/notifications/2' },
        { id: 3, title: 'Văn Mạnh đã thả tym bài viết của bạn', avatar: '/vanmanh.png', createdAt: new Date(Date.now() - 7200 * 1000), link: '/notifications/3' },
        { id: 4, title: 'Jos Phan Ái đã thả tym bài viết của bạn', avatar: '/jos2.jpg', createdAt: new Date(Date.now() - 10800 * 1000), link: '/notifications/4' },
        { id: 5, title: 'Thu Phương đã thả tym bài viết của bạn', avatar: 'thuphuong.png', createdAt: new Date(Date.now() - 14400 * 1000), link: '/notifications/5' },
        { id: 6, title: 'Vĩnh Trung đã phản hồi bình luận của bạn', avatar: '/vinhtrung.png', createdAt: new Date(Date.now() - 18000 * 1000), link: '/notifications/6' },
    ]);
    const renderTimeAgo = (date: Date) => {
        return extractTime(date);
    };
    return (
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
        />);
}

export default NotificationTab;