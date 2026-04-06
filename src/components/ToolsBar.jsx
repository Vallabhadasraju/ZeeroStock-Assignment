import SearchBar from './SearchBar';
import LinkButton from './LinkButton';
import DropdownMenu from './DropdownMenu';
import useProductStore from '../store/useProductStore';
import usePaginationStore from '../store/usePaginationStore';
import { PackagePlus } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ArrowDownAZ } from 'lucide-react';
import { ArrowUpZA } from 'lucide-react';
import { ArrowDown10 } from 'lucide-react';
import { ArrowUp01 } from 'lucide-react';

function ToolsBar(){

    const { setNumOfRows } = usePaginationStore();
    const { setCurrentProduct, setSort, sort } = useProductStore();

    return(
        <div className="bg-(--neutral-200) w-full px-10 py-3 rounded-md flex flex-col lg:flex-row gap-2 justify-between items-center">
            <div className="flex gap-2">
                <LinkButton to="/add-product" onClick={() => setCurrentProduct(null)} className=""><PackagePlus className="mr-2" /> Add Product</LinkButton>
                <DropdownMenu label="Rows per page" onChange={(e) => setNumOfRows(e.target.value)} className="bg-neutral-100 text-zinc-900">
                    <ChevronDown size={18} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-black"/>
                </DropdownMenu>
            </div>
            <div className="flex gap-2">
                <div className="relative bg-neutral-100 rounded-lg w-15 cursor-pointer hover:shadow-lg transition-all duration-200">
                    <select name="" id="" className="w-full h-full text-transparent appearance-none outline-none cursor-pointer" onChange={(e) => setSort(e.target.value)}>
                        <option value="name-asc" className="text-black">Name (A → Z)</option>
                        <option value="name-desc" className="text-black">Name (Z → A)</option>
                        <option value="price-asc" className="text-black">Price (Low → High)</option>
                        <option value="price-desc" className="text-black">Price (High → Low)</option>
                    </select>
                    {sort === "name-asc" && <ArrowDownAZ className="absolute pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>}
                    {sort === "name-desc" && <ArrowUpZA className="absolute pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>}
                    {sort === "price-asc" && <ArrowDown10 className="absolute pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>}
                    {sort === "price-desc" && <ArrowUp01 className="absolute pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>}
                </div>
                <SearchBar/>
            </div>
        </div>
    )
}

export default ToolsBar;