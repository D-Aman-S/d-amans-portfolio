// stores/usePageStore.ts
import { create } from 'zustand';
import { PagesEnum } from './pageEnums';
import { SubPagesEnum } from './subPageEnums';


type State = {
  selectedPage:  PagesEnum;
  selectedSubPage: SubPagesEnum;
};

type Action = {
  setSelectedPage: (page:  PagesEnum) => void;
  setSelectedSubPage: (subPage: SubPagesEnum) => void;
};

const usePageStore = create<State & Action>((set) => ({
  selectedPage: PagesEnum.PROFESSIONAL_INFO,
  setSelectedPage: (page) => set(() => ({ selectedPage: page })),
  selectedSubPage: SubPagesEnum.experience,
  setSelectedSubPage: (subPage) => set(() => ({ selectedSubPage: subPage })),
}));

export default usePageStore;
