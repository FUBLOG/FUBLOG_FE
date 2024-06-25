import { fromNow } from "@/utils";
import { Avatar, Button, List, Skeleton } from "antd";
import * as S from "../style";
import { useEffect, useState } from "react";
import useNotification, { useGetFriendRequest } from "@/hooks/useNotification";
import {
  acceptFriendRequest,
  rejectFriendRequest,
} from "@/services/api/friend";

const FriendTab = () => {
  const { loading, friendRequest } = useGetFriendRequest();
  const [acceptList, setAcceptList] = useState<any>([]);
  const { setFriendRequest } = useNotification();
  const [loadingButtons, setLoadingButtons] = useState<boolean[]>([]);
  useEffect(() => {
    if (friendRequest.length > 0) {
      setLoadingButtons(new Array(friendRequest.length).fill(false));
    }
  }, []);
  const setLoadingButton = async (index: number) => {
    setLoadingButtons((prev) => {
      const newLoadingButtons = [...prev];
      newLoadingButtons[index] = !newLoadingButtons[index];
      return newLoadingButtons;
    });
  };
  const handleAccept = async (requestId: any, event: any, index: number) => {
    setLoadingButton(index);
    event.stopPropagation();
    const res: any = await acceptFriendRequest(requestId);
    setLoadingButton(index);
    setAcceptList([...acceptList, requestId]);
    const newLists = friendRequest.map((item: any) => {
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
    const res: any = await rejectFriendRequest({ targetID: requestId });
    const newLists = friendRequest.filter(
      (item: any) => item.sourceID._id !== requestId
    );
    setFriendRequest(newLists);
  };

  return loading ? (
    <Loading />
  ) : (
    <List
      itemLayout="horizontal"
      dataSource={friendRequest}
      renderItem={(item: any, index) => (
        <List.Item
          key={item?._id}
          className="friend-item"
          onClick={() => (window.location.href = item?.link)}
        >
          <List.Item.Meta
            avatar={
              <Avatar
                src={
                  item?.sourceID?.userInfo?.avatar === ""
                    ? "./default-avatar.png"
                    : item?.sourceID?.userInfo?.avatar
                }
              />
            }
            title={<span>{item.title}</span>}
            description={
              <>
                {fromNow(new Date(item.createdAt))}
                {acceptList.includes(item?.sourceID?._id) ? (
                  <></>
                ) : (
                  <S.ActionButtons>
                    <Button
                      onClick={(event) =>
                        handleReject(item?.sourceID?._id, event)
                      }
                    >
                      Hủy
                    </Button>
                    <Button
                      loading={loadingButtons[index]}
                      onClick={(event) =>
                        handleAccept(item?.sourceID?._id, event, index)
                      }
                    >
                      Xác nhận
                    </Button>
                  </S.ActionButtons>
                )}
              </>
            }
          />
        </List.Item>
      )}
    />
  );
};
const Loading = () => {
  return <Skeleton active round avatar title />;
};
export default FriendTab;
