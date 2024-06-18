import { List, Avatar, Skeleton } from 'antd';
import { fromNow } from '@/utils';
import { useGetNotification } from '@/hooks/useNotification';

const NotificationTab = () => {
    const { loading, notifications } = useGetNotification();

    return loading ? (<Loading />) : (
        <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={(item: any) => (
                <List.Item
                    key={item.id}
                    className="notification-item"
                    onClick={() => window.location.href = item.link}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
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