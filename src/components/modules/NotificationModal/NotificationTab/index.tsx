import { List, Avatar, Skeleton } from 'antd';
import { fromNow } from '@/utils';
import { useGetNotification } from '@/hooks/useNotification';
import Link from 'next/link';

const NotificationTab = ({onclose}:any) => {
    const { loading, notifications } = useGetNotification();
    const handleClick = () => {
        onclose()
    }
    return loading ? (<Loading />) : (
        <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={(item: any) => (
                <Link href={item?.link} onClick={handleClick} >
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
                </Link >
            )}
        />)
}
const Loading = () => {
    return <Skeleton active round avatar title />;
}
export default NotificationTab;