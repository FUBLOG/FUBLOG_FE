import { extractTime, fromNow } from "@/utils";
import { Avatar, List } from "antd";
import * as S from "../style";
import { useState } from "react";
interface FriendRequest {
    id: number;
    title: string;
    avatar: string;
    createdAt: Date;
    link: string;

}

const FriendTab = () => {
    const [acceptedFriends, setAcceptedFriends] = useState<FriendRequest[]>([]);
    const [rejectedRequests, setRejectedRequests] = useState<number[]>([]);
    const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([
        { id: 1, title: 'Jos Phan Ái muốn gửi cho bạn lời mời kết bạn', avatar: '/jos2.jpg', createdAt: new Date(), link: '/profile/1' },
        { id: 2, title: 'Thu Phương đã gửi cho bạn lời mời kết bạn', avatar: 'thuphuong.png', createdAt: new Date(Date.now() - 3600 * 1000), link: '/profile/2' },
        { id: 3, title: 'Pam Yêu đã gửi cho bạn lời mời kết bạn', avatar: 'pam.png', createdAt: new Date(Date.now() - 7200 * 1000), link: '/profile/3' },
        { id: 4, title: 'Thanh Thủy đã gửi cho bạn lời mời kết bạn', avatar: 'thanhthuy.png', createdAt: new Date(Date.now() - 10800 * 1000), link: '/profile/4' },
        { id: 5, title: 'Minh Quân đã gửi cho bạn lời mời kết bạn', avatar: 'minhquan.png', createdAt: new Date(Date.now() - 14400 * 1000), link: '/profile/5' },
        { id: 6, title: 'Văn Mạnh đã gửi cho bạn lời mời kết bạn', avatar: 'vanmanh.png', createdAt: new Date(Date.now() - 18000 * 1000), link: '/profile/6' },
      ]);
    const renderTimeAgo = (date: Date) => {
        return fromNow(date);
    };
    const handleReject = (requestId: number, event: React.MouseEvent) => {
        event.stopPropagation();
        updateFriendRequestTitle(requestId, `Bạn đã gỡ lời mời kết bạn từ ${getRequestName(requestId)}`);
        setRejectedRequests(prevRejected => [...prevRejected, requestId]);
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
    const removeRequest = (requestId: number) => {
        setFriendRequests(prevRequests => prevRequests.filter(request => request.id !== requestId));
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

    return (<List
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
                            {!rejectedRequests.includes(item.id) && friendRequests.some(request => request.id === item.id) && (
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
    />);
}

export default FriendTab;