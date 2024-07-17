import { create } from "zustand";

interface PostUpdateProps {
  showSpinner: boolean;
  setShowSpinner: (showSpinner: boolean) => void;
  post: any;
  setPost: (post: any) => void;
}

const useUpdatePost = create<PostUpdateProps>((set) => ({
  showSpinner: false,
  setShowSpinner: (showSpinner) => set({ showSpinner }),
  post: null,
  setPost: (post) => set({ post }),
}));



export default useUpdatePost;
