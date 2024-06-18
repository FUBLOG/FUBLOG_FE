import { fromNow } from "@/utils";
import { Avatar, List, Skeleton } from "antd";
import * as S from "../style";
import Button from "@/components/core/common/Button";
import { useEffect, useState } from "react";
import useNotification, { useGetFriendRequest } from "@/hooks/useNotification";
import { acceptFriendRequest, rejectFriendRequest } from "@/services/api/friend";

interface FriendRequest {
    id: number;
    sourceID: {
        _id: number;
        displayName: string;
        userInfo: {
            avatar: string;
        };
    };
    createdAt: Date;
    link: string;
}

const FriendTab = () => {
    const { loading, friendRequest } = useGetFriendRequest();
    const [acceptList, setAcceptList] = useState<number[]>([]);
    const { setFriendRequest } = useNotification();
    const [loadingButtons, setLoadingButtons] = useState<boolean[]>([]);

    useEffect(() => {
        if (friendRequest.length > 0) {
            setLoadingButtons(new Array(friendRequest.length).fill(false));
        }
    }, [friendRequest]);

    const setLoadingButton = (index: number) => {
        setLoadingButtons(prev => {
            const newLoadingButtons = [...prev];
            newLoadingButtons[index] = !newLoadingButtons[index];
            return newLoadingButtons;
        });
    }

    const handleAccept = async (requestId: number, event: React.MouseEvent, index: number) => {
        setLoadingButton(index);
        event.stopPropagation();
        const data = {
            targetID: requestId
        }
        await acceptFriendRequest(data);
        setLoadingButton(index);
        setAcceptList([...acceptList, requestId]);
        const newLists = friendRequest.map((item: FriendRequest) => {
            if (item.sourceID._id === requestId) {
                return {
                    ...item,
                    title: `Bạn và ${item?.sourceID?.displayName} đã là bạn bè`,
                };
            }
            return item;
        });
        setFriendRequest(newLists);
    };

    const handleReject = async (requestId: number, event: React.MouseEvent) => {
        event.stopPropagation();
        await rejectFriendRequest({ targetID: requestId });
        const newLists = friendRequest.filter((item: FriendRequest) => item.sourceID._id !== requestId);
        setFriendRequest(newLists);
    };

    const getRequestName = (requestId: number) => {
        const request = friendRequest.find((req: FriendRequest) => req.sourceID._id === requestId);
        return request ? request.sourceID.displayName : '';
    };

    return loading ? (<Loading />) : (
        <List
            itemLayout="horizontal"
            dataSource={friendRequest}
            renderItem={(item: FriendRequest, index) => (
                <List.Item
                    key={item.id}
                    className="friend-item"
                    onClick={() => window.location.href = item?.link}
                >
                    <List.Item.Meta
                        avatar={
                            <div
                                onClick={() => window.location.href = item?.link}
                                style={{ cursor: 'pointer' }}
                            >
                                <Avatar src={item?.sourceID?.userInfo?.avatar === "" ? "./default-avatar.png" : item?.sourceID?.userInfo?.avatar} />
                            </div>
                        }
                        title={
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span
                                    style={{ fontWeight: 'bold', cursor: 'pointer' }}
                                    onClick={() => window.location.href = item?.link}
                                >
                                    {getRequestName(item.sourceID._id)}
                                </span>
                                <span style={{ marginLeft: '4px' }}>
                                    {"đã gửi cho bạn lời mời kết bạn"}
                                </span>
                            </div>
                        }
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <span style={{ color: '#888', fontSize: '12px', marginBottom: '8px' }}>
                            {fromNow(new Date(item.createdAt))}
                        </span>
                        {!acceptList.includes(item.sourceID._id) && (
                            <S.ActionButtons>
                                <Button $backgroundColor={"red"} $padding={"0px px"}  $color={"#fff"} onClick={(event) => handleReject(item.sourceID._id, event)}>Hủy</Button>
                                <Button $padding={"0px"}  $backgroundColor={"#B9B4C7"}   $color={"#000"} loading={loadingButtons[index]} onClick={(event) => handleAccept(item.sourceID._id, event, index)}>Xác nhận</Button>
                            </S.ActionButtons>
                        )}
                    </div>
                </List.Item>
            )}
        />
    );
}

const Loading = () => {
    return <Skeleton active round avatar title />;
}

export default FriendTab;
