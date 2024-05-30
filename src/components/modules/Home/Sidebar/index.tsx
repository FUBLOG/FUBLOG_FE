"use client";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";

import * as S from "./styles";
import Typography from "@/components/core/common/Typography";
import Image from "next/image";

interface PageProps {
  isGuest: boolean;
}

function Sidebar(isGuest: PageProps) {
  const friends = [
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
    { name: "Vĩnh Trung", image: "/vinhtrung.png" },
    { name: "Thu Phương", image: "/thuphuong.png" },
    { name: "Văn Mạnh", image: "/vanmanh.png" },
    { name: "Thanh Thủy", image: "/thanhthuy.png" },
    { name: "Minh Quân", image: "/minhquan.png" },
  ];

  return (
    <S.SidebarWrapper style={{ display: "block" }}>
      <Typography variant="h3" color="#B9B4C7">
        Bạn bè
      </Typography>
      <S.FriendContainer style={{ background: "transparent" }}>
        {friends.map((friend) => (
          <S.Friend key={friend.name}>
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
