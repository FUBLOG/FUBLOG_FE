// PostProvider.tsx
import React, { createContext, useState } from "react";

// Định nghĩa các interface và types cho Post và Comment
interface PostContextProps {
  posts: Post[];
  addPost: (newPost: Post) => void;
}

interface PostProviderProps {
  children: React.ReactNode; // Thêm children vào các props của PostProvider
}

export const PostContext = createContext<PostContextProps>({
    posts: [], // Giá trị mặc định, bạn có thể thay đổi tùy theo yêu cầu của dự án
    addPost: () => {}
});

// Định nghĩa các interface cho Comment và Post
export interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
}

export interface Post {
  user: string;
  avatar: string;
  content: string;
  images: string[];
  tag: string;
  initialLikes: number;
  initialComments: number;
  initialCommentsData: Comment[];
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      user: "Thanh Thủy",
      avatar: "/thanhthuy.png",
      content: "Hôm nay tôi học bài ...",
      images: ["post.jpg"],
      tag: "Học tập",
      initialLikes: 10,
      initialComments: 5,
      initialCommentsData: [
        {
          id: 1,
          user: "Thu Phương",
          avatar: "/thuphuong.png",
          content: "giỏi quá c ơi",
        },
        {
          id: 2,
          user: "Vĩnh Trung",
          avatar: "./vinhtrung.png",
          content: "Cho học với",
        },
        {
          id: 3,
          user: "Văn Mạnh",
          avatar: "./vanmanh.png",
          content: "Đi ăn kem",
        },
      ],
    },
  ]);

  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children} {/* Đảm bảo rằng bạn truyền children vào đây */}
    </PostContext.Provider>
  );
};
