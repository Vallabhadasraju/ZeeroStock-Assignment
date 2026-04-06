import { Search } from 'lucide-react';
import useProductStore from '../store/useProductStore';

function SearchBar(){

    const { filterProducts } = useProductStore();

    return(
        <div className="flex flex-1 gap-5 items-center px-3 sm:px-5 py-3 rounded-xl bg-(--neutral-100) w-full h-full sm:w-fit overflow-hidden">
            <div  className="w-5 h-5 sm:w-6 sm:h-6"><Search/></div>
            <input type="text" placeholder="Search By Name" className="w-10/12 text-sm sm:text-md md:w-80 font-bold outline-none overflow-hidden" onChange={(e) => filterProducts(e.target.value)}/>
        </div>
    )
}

export default SearchBar;