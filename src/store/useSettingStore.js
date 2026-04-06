import { create } from 'zustand';

const useSettingStore = create((set, get) => ({
    isNavOpen: false,

    setIsNavOpen: () => {
        const { isNavOpen } = get();
        set({isNavOpen: isNavOpen === false ? true : false});
        console.log(isNavOpen);
    }
}));

export default useSettingStore;