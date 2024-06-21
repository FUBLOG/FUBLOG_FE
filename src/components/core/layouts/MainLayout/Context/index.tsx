import { getRequest } from "@/services/request";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
import {postEndpoint, tagEndpoint} from "@/services/endpoint";

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
  
  // useEffect(() => {
  //   const setup = async() => {
  //     try {
  //       const res: any = await getRequest(postEndpoint.GET_POSTS);
  //       const datas = res?.metadata;
  //       console.log(datas)
  //       const aposts: Post[] = await Promise.all(datas.map(async (data: any) => {
  //         const tag = await getRequest(tagEndpoint.GET_TAG+  "/6675335386b8e0d65db9368d" );
  //         const apost: Post = {
  //           id: data.post._id,
  //           user: data.userId.displayName,
  //           avatar: data.userId.userInfo.avatar,
  //           content: data.post.postContent,
  //           images: data.post.postLinkToImages,
  //           initialComments: 0,
  //           initialCommentsData: [],
  //           initialLikes: 0,
  //           tag: "hehe"
  //         };
  //         console.log(tag);
          
  //         return apost;
  //       }));

  //       setPosts(aposts);
  //       console.log(aposts);

  //     } catch (error) {
  //       console.error("Error fetching posts or tags", error);
  //     }
  //   }
  //   setup(); 
  // }, []);
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
