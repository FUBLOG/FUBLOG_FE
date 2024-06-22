import React from "react"
import { PostContent } from "./Content"
import {user1} from "./test";

interface CreateContentProps {
    onSuccess: () => void; // Prop callback để thông báo tạo bài viết thành công
  }
  

export const CreateContent: React.FC<CreateContentProps> = ({onSuccess})=> {
    return(
        <PostContent user = {user1} onSuccess={onSuccess}/>
    )
}