import usePaginationStore from '@/store/usePaginationStore';

export default function DropdownMenu(props) {

    const { products } = usePaginationStore();

    return (
    <div className={`${props.className} h-full w-fit flex flex-col md:flex-row text-center items-center gap-2 text-neutral-300 font-bold py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 `}>
        <label htmlFor="rows">{props.label}</label>
        <div className="relative">
            <select value={products.numOfRows} name="rows" id="rows" onChange={props.onChange} className="appearance-none outline-none bg-neutral-300 w-fit flex items-center gap-2 font-bold py-1 px-4 pr-6 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200">
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            {props.children}
        </div>
    </div>
    )
}

// export default function DropdownMenu(props) {
//   return (
//     <div className={`${props.className} flex items-center gap-2`}>
//         <label htmlFor="rows" className="text-neutral-300 font-bold">Number of Rows</label>
//         <div className="relative">
//             <select name="rows" id="rows" className="appearance-none outline-none bg-neutral-300 w-fit flex items-center gap-2 font-bold py-1 px-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200">
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//             </select>
//             <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black"/>
//         </div>
//     </div>
//   )
// }
