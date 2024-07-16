
import {create} from 'zustand';

interface TagStage {
  tagValue : string;
  setTagValue: (value: string) => void;
}

export const useTagStageStore = create<TagStage>((set) => ({
    tagValue: 'Tất Cả',
    setTagValue: (value) => set({ tagValue: value }),   
  }));

export default useTagStageStore;
