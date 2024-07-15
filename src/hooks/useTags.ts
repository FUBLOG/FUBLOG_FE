import { getAllTags } from "@/services/api/post";
import { useEffect } from "react";
import { create } from "zustand";

interface TagsProps {
  tags: any[];
  setTags: (tags: any[]) => void;
  activeTag: string | null;
  setActiveTag: (tag: string) => void;
}
const useTags = create<TagsProps>((set) => ({
  tags: [],
  setTags: (tags) => set({ tags }),
  activeTag: null,
  setActiveTag: (tag) => set({ activeTag: tag }),
}));

const useGetAllTags = () => {
  const { setTags, tags } = useTags();
  const asyncGetAllTags = async () => {
    const res = await getAllTags();
    setTags([
      {
        _id: null,
        postTagContent: "Tất cả",
      },
      ...res.metadata,
    ]);

  };
  useEffect(() => {
    asyncGetAllTags();
  }, []);
  return { tags };
};

export { useGetAllTags };

export default useTags;
