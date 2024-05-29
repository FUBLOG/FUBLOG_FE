"use client";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import * as S from "./styles";

function Sidebar() {
  const friends = [
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    
  ];

  return (
    <S.SidebarWrapper>
      <S.SidebarTitle>Bạn bè</S.SidebarTitle>
      <div style={{ background: 'transparent' }}>
        {friends.map((friend) => (
          <S.Friend key={friend.name}>
            <S.FriendImageContainer>
              <S.FriendImage src={friend.image} alt={friend.name} />
            </S.FriendImageContainer>
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
