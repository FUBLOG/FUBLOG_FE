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
  const [posts, setPosts] = useState<Post[]>([]);
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
