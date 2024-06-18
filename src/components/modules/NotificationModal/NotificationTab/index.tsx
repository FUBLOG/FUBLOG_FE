import { List, Avatar, Skeleton } from 'antd';
import { fromNow } from '@/utils';
import { useGetNotification } from '@/hooks/useNotification';

interface Notification {
    id: number;
    title: string;
    avatar: string;
    createdAt: Date;
    link: string;
}

const NotificationTab = () => {
    const { loading, notifications } = useGetNotification();

    return loading ? (<Loading />) : (
        <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={(item: Notification) => (
                <List.Item
                    key={item.id}
                    className="notification-item"
                    onClick={() => window.location.href = item.link}
                >
                    <List.Item.Meta
                        avatar={
                            <div
                                onClick={() => window.location.href = item.link}
                                style={{ cursor: 'pointer' }}
                            >
                                <Avatar src={item.avatar} />
                            </div>
                        }
                        title={
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span
                                    style={{ fontWeight: 'bold', cursor: 'pointer' }}
                                    onClick={() => window.location.href = item.link}
                                >
                                    {item.title.split(' ')[0]}
                                </span>
                                <span style={{ marginLeft: '4px' }}>
                                    {item.title.replace(item.title.split(' ')[0], '')}
                                </span>
                            </div>
                        }
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <span style={{ color: '#888', fontSize: '16px', margin:'0px'}}>
                            {fromNow(new Date(item.createdAt))}
                        </span>
                    </div>
                </List.Item>
            )}
        />)
}

const Loading = () => {
    return <Skeleton active round avatar title />;
}

export default NotificationTab;
