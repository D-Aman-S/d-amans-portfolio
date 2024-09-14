// stores/usePageStore.ts
import { create } from 'zustand';
import { PagesEnum } from './pageEnums';


type State = {
  selectedPage:  PagesEnum;
};

type Action = {
  setSelectedPage: (page:  PagesEnum) => void;
};

const usePageStore = create<State & Action>((set) => ({
  selectedPage: PagesEnum.PROFESSIONAL_INFO,
  setSelectedPage: (page) => set(() => ({ selectedPage: page })),
}));

export default usePageStore;
