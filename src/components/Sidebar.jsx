import useSettingStore from '../store/useSettingStore';

import { Link } from "react-router-dom";
import { Package } from 'lucide-react';
import { ListTree } from 'lucide-react';
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { X } from 'lucide-react';

function Sidebar(){

    const { isNavOpen, setIsNavOpen } = useSettingStore();

    return(
        <>
            <div className={`${isNavOpen && `translate-x-0 z-2`} md:translate-x-0 -translate-x-full select-none md:fixed absolute z-2 2            02.md:left-0 h-screen md:h-screen md:w-20 bg-(--black-200) gap-2 pt-20 py-10 px-3 flex flex-col transition-transform md:transition-all duration-300 ease-in-out group hover:md:w-64`}>
                <div className="absolute top-5 left-5 md:hidden" onClick={() => setIsNavOpen()}>
                    <X className="w-6 h-6 text-(--neutral-100) cursor-pointer"/>
                </div>
                <Link to="/" className="flex gap-5 font-medium text-(--neutral-100) text-lg items-center py-2 px-2 hover:bg-(--neutral-100) hover:text-(--black-200) rounded-lg transition-all duration-150">
                    <div className="w-6 h-6 flex items-center justify-center"><Package/></div>
                    <span className="max-w-xs md:group-hover:max-w-xs overflow-hidden transition-all duration-300">Products</span>
                </Link>
                <Link to="/" className="flex gap-5 font-medium text-(--neutral-100) text-lg items-center py-2 px-2 hover:bg-(--neutral-100) hover:text-(--black-200) rounded-lg transition-all duration-150">
                    <div className="w-6 h-6 flex items-center justify-center"><ListTree/></div>
                    <span className="max-w-xs group-hover:max-w-xs overflow-hidden transition-all duration-300">Categories</span>
                </Link>
                <Link to="/" className="flex gap-5 font-medium text-(--neutral-100) text-lg items-center py-2 px-2 hover:bg-(--neutral-100) hover:text-(--black-200) rounded-lg transition-all duration-150">
                    <div className="w-6 h-6 flex items-center justify-center"><Users/></div>
                    <span className="max-w-xs group-hover:max-w-xs overflow-hidden transition-all duration-300">Users</span>
                </Link>
                <Link to="/" className="flex gap-5 font-medium text-(--neutral-100) text-lg items-center py-2 px-2 hover:bg-(--neutral-100) hover:text-(--black-200) rounded-lg transition-all duration-150">
                    <div className="w-6 h-6 flex items-center justify-center"><Settings/></div>
                    <span className="max-w-xs group-hover:max-w-xs overflow-hidden transition-all duration-300">Settings</span>
                </Link>
                <Link to="/" className="mt-auto flex gap-5 font-medium text-(--neutral-100) text-lg items-center py-2 px-2 hover:bg-(--neutral-100) hover:text-(--black-200) rounded-lg transition-all duration-150">
                    <div className="w-6 h-6 flex items-center justify-center"><LogOut/></div>
                    <span className="max-w-xs whitespace-nowrap group-hover:max-w-xs overflow-hidden transition-all duration-300">Log Out</span>
                </Link>
            </div>
            <div className={`${!isNavOpen && `hidden`} absolute inset-0 bg-black/50`}></div>
        </>
    )
}

export default Sidebar;