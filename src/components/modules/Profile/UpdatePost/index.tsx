import React from "react"
import { PostContent } from "./content";

interface CreateContentProps {
    onSuccess: () => void; // Prop callback để thông báo tạo bài viết thành công
  }
  

export const CreateContent: React.FC<CreateContentProps> = ({onSuccess})=> {
    return(
        <PostContent nSuccess={onSuccess}/>
    )
}