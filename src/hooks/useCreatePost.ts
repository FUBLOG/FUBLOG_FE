import { create } from "zustand";

interface PostCreateProps {
  showSpinner: boolean;
  setShowSpinner: (showSpinner: boolean) => void;
  post: any;
  setPost: (post: any) => void;
}

const useCreatePost = create<PostCreateProps>((set) => ({
  showSpinner: false,
  setShowSpinner: (showSpinner) => set({ showSpinner }),
  post: null,
  setPost: (post) => set({ post }),
}));



export default useCreatePost;
