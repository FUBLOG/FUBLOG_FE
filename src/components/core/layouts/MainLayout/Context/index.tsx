import React, { createContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid"; 

// Định nghĩa các interface và types cho Post và Comment
interface PostContextProps {
  posts: Post[];
  addPost: (newPost: Post) => void;
  showSpinner: boolean;
  setShowSpinner: (value: boolean) => void;
}

interface PostProviderProps {
  children: React.ReactNode;
}

export const PostContext = createContext<PostContextProps>({
  posts: [],
  addPost: () => {},
  showSpinner: false,
  setShowSpinner: () => {},
});

// Định nghĩa các interface cho Comment và Post
export interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
}

export interface Post {
  id: string;
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
      id: uuidv4(),
      user: "Thanh Thủy",
      avatar: "/thanhthuy.png",
      content: "Hôm nay tôi học bài ...",
      images: ["post.jpg"],
      tag: "Học Tập",
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

  const [showSpinner, setShowSpinner] = useState(false);

  const addPost = (newPost: Post) => {
    const postWithId = { ...newPost, id: uuidv4() };
    setPosts([postWithId, ...posts]);
    setShowSpinner(true);
    };

  const contextValue = useMemo(
    () => ({ posts, addPost, showSpinner, setShowSpinner }),
    [posts, showSpinner]
  );

  return (
    <PostContext.Provider value={contextValue}>
      {children}
    </PostContext.Provider>
  );
};
