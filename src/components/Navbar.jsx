import { Menu } from 'lucide-react';
import useSettingStore from '../store/useSettingStore';

function Navbar(){

    const { setIsNavOpen } = useSettingStore();

    return(
        <div className="px-10 py-5 bg-(--black-200) w-full md:hidden">
            <div className="cursor-pointer w-fit" onClick={() => setIsNavOpen()}><Menu color="var(--neutral-100)"/></div>
        </div>
    )
}

export default Navbar;