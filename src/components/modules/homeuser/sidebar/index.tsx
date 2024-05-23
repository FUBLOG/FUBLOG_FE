"use client";

import * as S from "./styles";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";

function Sidebar() {
  const friends = [
    { name: "Vinh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phuong", image: "/thuphuong.png" },
    { name: "Van Manh", image: "/vanmanh.png" },
    { name: "Thanh Thuy", image: "/thanhthuy.png" },
    { name: "Minh Quan", image: "/minhquan.png" },
  ];

  return (
    <S.SidebarWrapper>
      <S.SidebarTitle>Bạn bè</S.SidebarTitle>
      <div style={{ background: 'transparent'}}>
        {friends.map((friend, index) => (
          <S.Friend key={index}>
            <S.FriendImage src={friend.image} alt={friend.name} />
            <S.FriendInfo>
              <S.FriendName>{friend.name}</S.FriendName>
              <S.FriendStatus>101 bạn bè</S.FriendStatus>
            </S.FriendInfo>
            <S.FriendActions>
              <UserOutlined />
              <MessageOutlined />
            </S.FriendActions>
          </S.Friend>
        ))}
      </div>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
