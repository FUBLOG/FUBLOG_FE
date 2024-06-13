"use client";

import Typography from "@/components/core/common/Typography";

import Image from "next/legacy/image";
import * as S from "./styles";
import { useUser } from "@/hooks/useUser";

function Sidebar() {
  const { userInfo } = useUser();

  const friends = [
    { id: 1, name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { id: 2, name: "Thu Phương", image: "/thuphuong.png" },
    { id: 3, name: "Văn Mạnh", image: "/vanmanh.png" },
    { id: 4, name: "Thanh Thủy", image: "/thanhthuy.png" },
    { id: 5, name: "Minh Quân", image: "/minhquan.png" },
  ];

  return (
    <S.SidebarWrapper style={{ display: userInfo === null ? "none" : "block" }}>
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
              <S.FriendName variant="caption-normal">
                {friend.name}
              </S.FriendName>
              
            </S.FriendInfo>
          </S.Friend>
        ))}
      </S.FriendContainer>
    </S.SidebarWrapper>
  );
}

export default Sidebar;