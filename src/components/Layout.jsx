import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import useProductStore from '../store/useProductStore';
import Dashboard from './Dashboard.jsx';

const Layout = () => {

    const { fetchProducts } = useProductStore();
    useEffect(()=>{
        fetchProducts();
    }, [fetchProducts])

    return(
        <div className="relative flex h-screen md:flex-row flex-col">
            <div className={`flex-1 flex flex-col gap-5 overflow-y-auto ${/* md:ml-20 */ null} px-5 md:px-15 py-10`}>
                <Dashboard/>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;