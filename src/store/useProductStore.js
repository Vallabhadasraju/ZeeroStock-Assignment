import { create } from 'zustand';
import axios from 'axios';
import Swal from 'sweetalert2';
import usePaginationStore from './usePaginationStore';

const API_URL = 'https://69b04c16c63dd197febbee02.mockapi.io/api/v1';

const useProductStore = create((set, get) => ({
    products: [],
    allProducts: [],
    productsCount: 0,
    inventoryCount: 0,
    lowStockCount: 0,
    recentlyAdded: 0,
    loading: true,
    error: null,
    currentProduct: null,
    lastAction: null,
    sort: "name-desc",
    isImageSizeValid: true,

    fetchProducts: async () => {
        try{
            const response = await axios.get(`${API_URL}/products`);
            set({
                products: response.data,
                allProducts: response.data,
                loading: false
            });
            set({
                productsCount: response.data.reduce((total) => total + 1, 0),
                inventoryCount: response.data.reduce((total, product) => total + Number(product.quantity), 0),
                lowStockCount: response.data.reduce((total, product) => Number(product.quantity) < 10 ? total + 1 : total, 0),
            });
        }catch(err){
            set({loading: false, error: err.message});
        }finally{
            set({loading: false});
        }
    },
    deleteProduct: (id) => {

        const swalWithTailwindButtons = Swal.mixin({
            buttonsStyling: false,
            customClass: {
                popup: "rounded-xl",
                title: "text-xl font-semibold",
                htmlContainer: "text-gray-600",
                confirmButton:
                "text-neutral-100 font-bold py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 bg-(--red-100)",
                cancelButton:
                "text-neutral-100 font-bold py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 bg-(--green-100) mr-5",
            },
        });

        swalWithTailwindButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {

            const deleteConfirmed = async () => {
                try{
                    await axios.delete(`${API_URL}/products/${id}`);
                    set((state) => {
                        const newProducts = state.allProducts.filter((product) => product.id !== id);
                        const newProductsCount = newProducts.reduce((total) => total + 1, 0);
                        const newInventoryCount = newProducts.reduce((total, product) => total + Number(product.quantity), 0);
                        const newLowStockCount = newProducts.reduce((total, product) => Number(product.quantity) < 10 ? total + 1 : total, 0);
                        return {
                            products: newProducts,
                            allProducts: newProducts,
                            productsCount: newProductsCount,
                            inventoryCount: newInventoryCount,
                            lowStockCount: newLowStockCount,
                            lastAction: `Deleted a Product`,
                        };
                    })
                }catch(err){
                    console.log(`Failed to Delete Product, ${err.message}`);
                }
            }

            deleteConfirmed();

            swalWithTailwindButtons.fire({
            title: "Deleted!",
            text: "Your Product has been deleted.",
            icon: "success"
            });
        }
        });
    },
    filterProducts: (value) => {
        const { allProducts } = get();
        const filtered = allProducts.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
        set({products: filtered});
        usePaginationStore.getState().resetPagination();
    },
    addProduct: async (product) => {
        const date = new Date().toLocaleString();
        try{
            const response = await axios.post(`${API_URL}/products`, {...product, date: date});
            set((state) => {
                const updatedProducts = response.data;
                return {
                    ...state,
                    products: [...state.products, updatedProducts],
                    allProducts: [...state.allProducts, updatedProducts],
                    productsCount: state.productsCount + 1,
                    inventoryCount: state.inventoryCount + Number(product.quantity),
                    lowStockCount: product.quantity > 10 ? state.lowStockCount + 1 : state.lowStockCount,
                    recentlyAdded: state.recentlyAdded + 1,
                    lastAction: `Added ${product.name}`,
                };
            });
            Swal.fire({
                title: "Product added successfully!",
                icon: "success",
                draggable: true
            });
        }catch(err){
            Swal.fire({
                title: "Failed to add product",
                text: err.message,
                icon: "error",
                draggable: true
            });
        };
    },
    updateProduct: async (id, updatedProduct, isImageRemoved) =>{
        try{
            const date = new Date().toLocaleString();
            const response = await axios.put((`${API_URL}/products/${id}`), {
                date, 
                ...updatedProduct,
                ...(isImageRemoved && {image: null}),
            });
            set((state) => {
                const newList = state.allProducts.map((product) => 
                    product.id === id ? response.data : product
                );
            
                const newProductsCount = newList.reduce((total) => total + 1, 0);
                const newInventoryCount = newList.reduce((total, product) => total + Number(product.quantity), 0);
                const newLowStockCount = newList.reduce((total, product) => Number(product.quantity) < 10 ? total + 1 : total, 0);
                return {
                    ...state,
                    products: newList,
                    allProducts: newList,
                    productsCount: newProductsCount,
                    inventoryCount: newInventoryCount,
                    lowStockCount: newLowStockCount,
                    lastAction: `Updated ${updatedProduct.name}`,
                };
            });
            Swal.fire({
                title: "Product updated successfully!",
                icon: "success",
                draggable: true
            });
        }
        catch(err){
            Swal.fire({
                title: "Failed to update product",
                text: err.message,
                icon: "error",
                draggable: true
            });
        };
    },
    getProductById: async (id) => {
        const response = axios.get(`${API_URL}/products/${id}`);
        const product = (await response).data;
        set({currentProduct: product});
    },
    setCurrentProduct: (product) => set({currentProduct: product}),
    setSort: (value) => set({sort: value}),
    setIsImageSizeValid: (value) => set({isImageSizeValid: value}),
}));

export default useProductStore;