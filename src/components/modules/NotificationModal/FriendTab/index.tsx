import { fromNow } from "@/utils";
import { Avatar, Button, List, Skeleton } from "antd";
import * as S from "../style";
import { useEffect, useState } from "react";
import useNotification, { useGetFriendRequest } from "@/hooks/useNotification";
import { acceptFriendRequest, rejectFriendRequest } from "@/services/api/friend";

const FriendTab = () => {
    const { loading, friendRequest } = useGetFriendRequest();
    const [acceptList, setAcceptList] = useState<any[]>([]);
    const { setFriendRequest } = useNotification();
    const [loadingButtons, setLoadingButtons] = useState<boolean[]>([]);

    useEffect(() => {
        if (Array.isArray(friendRequest)) {
            setLoadingButtons(new Array(friendRequest.length).fill(false));
        }
    }, [friendRequest]);

    const setLoadingButton = async (index: number) => {
        setLoadingButtons((prev: boolean[]) => {
            const newLoadingButtons = [...prev];
            newLoadingButtons[index] = !newLoadingButtons[index];
            return newLoadingButtons;
        });
    }

    const handleAccept = async (requestId: number, event: React.MouseEvent, index: number) => {
        setLoadingButton(index);
        event.stopPropagation();
        const data = { targetID: requestId };
        await acceptFriendRequest(data);

        setLoadingButton(index);
        setAcceptList([...acceptList, requestId]);
        const newLists = friendRequest.map((item: any) => {
            if (item.sourceID._id === requestId) {
                return {
                    ...item,
                    title: `Bạn và ${item?.sourceID?.displayName} đã trở thành bạn bè`,
                    seen: true, // Đánh dấu là đã chấp nhận
                };
            }
            return item;
        });
        setFriendRequest(newLists);
    };

    const handleReject = async (requestId: number, event: React.MouseEvent) => {
        event.stopPropagation();
        await rejectFriendRequest({ targetID: requestId });
        const newLists = friendRequest.filter((item: any) => item.sourceID._id !== requestId);
        setFriendRequest(newLists);
    };

    return loading ? (<Loading />) : (
        <List
            itemLayout="horizontal"
            dataSource={friendRequest}
            renderItem={(item: any, index: number) => (
                <List.Item
                    key={item?._id}
                    className={`friend-item ${acceptList.includes(item.sourceID._id) ? 'read' : 'unread'}`}
                    onClick={() => window.location.href = item?.link}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item?.sourceID?.userInfo?.avatar || "./default-avatar.png"} />}
                        title={
                          <span
                            onClick={() => window.location.href = item.link}
                            style={{ fontWeight: acceptList.includes(item.sourceID._id) ? 'normal' : 'bold', cursor: 'pointer' }}
                          >
                            {item.title}
                          </span>
                        }
                        description={
                            <>
                                {fromNow(new Date(item.createdAt))}
                                {!acceptList.includes(item?.sourceID?._id) && <S.ActionButtons>
                                    <Button onClick={(event) => handleReject(item?.sourceID?._id, event)}>Hủy</Button>
                                    <Button loading={loadingButtons[index]} onClick={(event) => handleAccept(item?.sourceID?._id, event, index)}>Xác nhận</Button>
                                </S.ActionButtons>}
                            </>
                        }
                    />
                </List.Item>
            )}
        />
    );
}

const Loading = () => {
    return <Skeleton active round avatar title />;
}
export default FriendTab;
