"use client";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import Image from "next/legacy/image";
import Typography from "@/components/core/common/Typography";
import * as S from "./styles";
import { useUser } from "@/hooks/useUser";

function Sidebar() {
  const { user } = useUser();

  const friends = [
    { id: 1, name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { id: 2, name: "Thu Phương", image: "/thuphuong.png" },
    { id: 3, name: "Văn Mạnh", image: "/vanmanh.png" },
    { id: 4, name: "Thanh Thủy", image: "/thanhthuy.png" },
    { id: 5, name: "Minh Quân", image: "/minhquan.png" },
  ];

  return (
    <S.SidebarWrapper style={{ display: user === null ? "none" : "block" }}>
      <Typography variant="h3" color="#B9B4C7">
        Bạn bè
      </Typography>
      <S.FriendContainer style={{ background: "transparent" }}>
        {friends.map((friend) => (
          <S.Friend key={friend.id}>
            <S.FriendImageContainer>
              <Image
                alt={friend.name}
                src={friend.image}
                width={50}
                height={50}
                objectFit="cover"
              />
            </S.FriendImageContainer>
            <S.FriendInfo>
              <Typography variant="caption-normal" color="#B9B4C7">
                {friend.name}
              </Typography>
              <Typography variant="caption-small" color="#B9B4C7">
                101 bạn bè
              </Typography>
            </S.FriendInfo>
            <S.FriendActions>
              <UserOutlined />
              <MessageOutlined />
            </S.FriendActions>
          </S.Friend>
        ))}
      </S.FriendContainer>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
