import { create } from 'zustand';

const usePaginationStore = create((set) => ({
    products: {
        startIndex: 0,
        endIndex: 6,
        numOfRows: 6,
    },
    ButtonsState: {
        isForwardDisabled: false,
        isBackwardDisabled: true,
    },
    currentPage: 1,
    lastPage: 0,
    moveForward: () => {
        set((state) => {
            if(state.ButtonsState.isForwardDisabled){
                return {
                    ...state,
                }
            }
            const newStartIndex = state.products.endIndex;
            const newEndIndex = state.products.endIndex + state.products.numOfRows;
            const newCurrentPage = state.currentPage + 1;
            return{
                products: {
                    ...state.products,
                    startIndex: newStartIndex,
                    endIndex: newEndIndex,
                },
                ButtonsState: {
                    isForwardDisabled: newCurrentPage >= state.lastPage,
                    isBackwardDisabled: false,
                },
                currentPage: newCurrentPage,
            }
        })
    },
    moveBackward: () => {
        set((state) => {
            if(state.ButtonsState.isBackwardDisabled){
                return {
                    ...state,
                }
            }
            const newStartIndex = state.products.startIndex - state.products.numOfRows;
            const newEndIndex = state.products.startIndex;
            const newCurrentPage = state.currentPage - 1;
            return{
                products: {
                    ...state.products,
                    startIndex: newStartIndex,
                    endIndex: newEndIndex,
                },
                ButtonsState: {
                    isForwardDisabled: false,
                    isBackwardDisabled: newCurrentPage <= 1,
                },
                currentPage: newCurrentPage,
            };
        });
    },
    jumpToPage: (pageNumber) => {
        set((state) => {
            const newStartIndex = (pageNumber) * state.products.numOfRows;
            const newEndIndex = (pageNumber + 1) * state.products.numOfRows;
            return{
                products: {
                    ...state.products,
                    startIndex: newStartIndex,
                    endIndex: newEndIndex,
                },
                ButtonsState: {
                    isForwardDisabled: pageNumber + 1 >= state.lastPage,
                    isBackwardDisabled: pageNumber + 1 <= 1,
                },
                currentPage: pageNumber + 1,
            }
        })
    },
    setNumOfRows: (num) => {
        set((state) => {
            return {
                products: {
                    ...state.products,
                    startIndex: 0,
                    endIndex: Number(num),
                    numOfRows: Number(num),
                }
            }
        });
    },
    setCurrentPage: (num) => {
        set((state) => ({
            currentPage: num,
            ButtonsState: {
                isForwardDisabled: num >= state.lastPage,
                isBackwardDisabled: num <= 1,
            }
        }));
    },
    setLastPage: (num) => {
        set((state) => ({
            lastPage: num,
            ButtonsState: {
                isForwardDisabled: state.currentPage >= num,
                isBackwardDisabled: state.currentPage <= 1,
            }
        }));
    },
    resetPagination: () => {
        set({
            products: {
                startIndex: 0,
                endIndex: 6,
                numOfRows: 6,
            },
            ButtonsState: {
                isForwardDisabled: false,
                isBackwardDisabled: true,
            },
            currentPage: 1,
            lastPage: 0,
        });
    },
}));
export default usePaginationStore;