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

                    
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item?.image[0]} />}
                        title={<span>{item.title}</span>}
                        description={<span>{fromNow(new Date(item.createdAt))}</span>}
                    />
                </List.Item>
            )}
        />)
}

const Loading = () => {
    return <Skeleton active round avatar title />;
}

export default NotificationTab;
