import { useState, useEffect } from "react";
import { List, Avatar, Skeleton, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { fromNow } from "@/utils";
import { useGetNotification } from "@/hooks/useNotification";
import {
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "@/services/api/notification";
import * as S from "../style";
import Link from "next/link";
import useSidebarBadge from "@/hooks/useSidebarBadge";

const NotificationTab = ({ onClose }: any) => {
  const { loading, notifications, setNotifications } = useGetNotification();
  const { setNotificationCount, notificationCount } = useSidebarBadge();
  const notificationLink: { [key: string]: (noti: any) => JSX.Element } = {
    like: (noti: any) => <LikeItem src={noti} />,
    comment: (noti: any) => <CommentItem src={noti} />,
    friend: (noti: any) => <FriendItem src={noti} />
  }

  const LikeItem = ({ src }: any) => {
    return (<Link href={`/?ptId=${src?.payload?.postId}`} onClick={handleClick}>
      <List.Item
        key={src?._id}
        className={` ${src?.isRead
          ? "notification-read .ant-list-item-meta "
          : "notification-unread .ant-list-item-meta"
          }`}
        onClick={() => {
          handleMarkRead(src?._id);
        }}
      >
        <List.Item.Meta
          avatar={<Avatar src={src?.image[0]} />}
          title={<span>{src?.title}</span>}
          description={
            <span>{fromNow(new Date(src?.updatedAt))}</span>
          }
        />
      </List.Item>
    </Link>)
  }

  const CommentItem = ({ src }: any) => {
    return (<Link href={`/?ptId=${src?.payload?.postId}&ctId=${src?.payload?.commentId}`} onClick={handleClick}>
      <List.Item
        key={src?._id}
        className={` ${src?.isRead
          ? "notification-read .ant-list-item-meta "
          : "notification-unread .ant-list-item-meta"
          }`}
        onClick={() => {
          handleMarkRead(src?._id);
        }}
      >
        <List.Item.Meta
          avatar={<Avatar src={src?.image[0]} />}
          title={<span>{src?.title}</span>}
          description={
            <span>{fromNow(new Date(src?.updatedAt))}</span>
          }
        />
      </List.Item>
    </Link>)
  }

  const FriendItem = ({ src }: any) => {
    return (<Link
      href={`/profile?pId=${src?.payload?.profileHash}`}
      onClick={handleClick}
    >
      <List.Item
        key={src?._id}
        className={` ${src.isRead
          ? "notification-read .ant-list-item-meta "
          : "notification-unread .ant-list-item-meta"
          }`}
        onClick={() => {
          handleMarkRead(src._id);
        }}
      >
        <List.Item.Meta
          avatar={<Avatar src={src?.image[0]} />}
          title={<span>{src?.title}</span>}
          description={
            <span>{fromNow(new Date(src?.updatedAt))}</span>
          }
        />
      </List.Item>
    </Link>)
  }


  const handleMarkRead = async (notificationId: string) => {
    try {
      await markNotificationAsRead(notificationId);
      const newNotifications = notifications.map((noti: any) => {
        if (noti._id === notificationId) {
          return { ...noti, isRead: true };
        }
        return noti;
      });
      setNotificationCount(notificationCount - 1);
      setNotifications(newNotifications);
    } catch (error) {
      console.error("Error ", error);
    }
  };

  const handleAllMarkRead = async () => {
    try {
      await markAllNotificationsAsRead()
        .then(() => {
          const newNotifications = notifications.map((noti: any) => ({
            ...noti,
            isRead: true,
          }));
          setNotificationCount(0);
          setNotifications(newNotifications);
        })
    } catch (error) { }
  };

  const generateLink = (noti: any) => {
    const type = noti?.type;
    return notificationLink[type](noti);
  }

  function handleClick() {
    onClose();
  }

  return loading ? (
    <Loading />
  ) : (
    <S.NotificationContainer>
      <S.MarkButton>
        <Button
          type="primary"
          icon={<CheckOutlined />}
          onClick={() => handleAllMarkRead()}
        >
          Đánh dấu tất cả đã đọc
        </Button>
      </S.MarkButton>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={(item: any) => {
          return generateLink(item);
        }}
      />
    </S.NotificationContainer>
  );
};

const Loading = () => {
  return <Skeleton active round avatar title />;
};




export default NotificationTab;
