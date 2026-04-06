import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import usePaginationStore from '../store/usePaginationStore';
import useProductStore from '../store/useProductStore';
import { useEffect } from 'react';

const PaginationBar = () => {

    const { products } = useProductStore();
    const { products: paginationProducts, ButtonsState, currentPage, moveForward, moveBackward, jumpToPage, setLastPage } = usePaginationStore();

    const numOfPages = Math.ceil(products.length / paginationProducts.numOfRows)
    
    useEffect(() => {
        setLastPage(numOfPages);
    }, [numOfPages, setLastPage]);

    return(
        <div className="flex justify-between items-center w-full px-10 py-2 bg-(--neutral-200) rounded-md">
            <div className="flex gap-3">
                <button
                    onClick={moveBackward}
                    disabled={ButtonsState.isBackwardDisabled}
                    className={`py-1 px-2 rounded-lg bg-(--neutral-100) cursor-pointer ${ButtonsState.isBackwardDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <ArrowLeft />
                </button>
                <button
                    onClick={moveForward}
                    disabled={ButtonsState.isForwardDisabled}
                    className={`py-1 px-2 rounded-lg bg-(--neutral-100) cursor-pointer ${ButtonsState.isForwardDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <ArrowRight />
                </button>
            </div>
            <div className="flex items-center gap-3">
                {[...Array(numOfPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => jumpToPage(i)}
                        className={`py-1 px-3 rounded-lg bg-(--neutral-100) cursor-pointer hover:shadow-lg transition-all duration-300 ${currentPage === i + 1 ? 'opacity-50' : ''}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default PaginationBar;