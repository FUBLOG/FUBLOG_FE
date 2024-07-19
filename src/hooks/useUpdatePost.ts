import { create } from "zustand";

interface PostUpdateProps {
  showSpinnerUpdate: boolean;
  setShowSpinnerUpdate: (showSpinnerUpdate: boolean) => void;
  post: any;
  setPost: (post: any) => void;
}

const useUpdatePost = create<PostUpdateProps>((set) => ({
  showSpinnerUpdate: false,
  setShowSpinnerUpdate: (showSpinnerUpdate) => set({ showSpinnerUpdate }),
  post: null,
  setPost: (post) => set({ post }),
}));



export default useUpdatePost;
