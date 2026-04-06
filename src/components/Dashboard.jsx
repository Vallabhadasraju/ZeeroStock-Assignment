import useProductStore from '../store/useProductStore';
import usePaginationStore from '@/store/usePaginationStore';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowBigDown } from 'lucide-react';
import { PackagePlus } from 'lucide-react';
import { Package } from 'lucide-react';
import { CircleDot } from 'lucide-react';
import { RotateCcw } from 'lucide-react';
import { Boxes } from 'lucide-react';
import { Grid3x2 } from 'lucide-react';


function Dashboard() {
    const { products } = usePaginationStore();
    const { productsCount, inventoryCount, lowStockCount, recentlyAdded, lastAction, error, loading } = useProductStore();
    const [totalInventory, setTotalInventory] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [lowStock, setLowStock] = useState(0);
    const [counterDots, setCounterDots] = useState(1);
    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCounterDots( prev => prev === 3 ? 1 : (prev + 1) )
        }, 500);

        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
        const handleCounting = (prev, countRef) => {
            if(prev < countRef){
                return prev + 1
            }else if(prev > countRef){
                return prev - 1
            }
            return prev;
        }

        const productsInterval = setInterval(()=>{
            setTotalProducts(prev => handleCounting(prev, productsCount))
        }, 1);
        const totalInventoryInterval = setInterval(()=>{
            setTotalInventory(prev => handleCounting(prev, inventoryCount))
        }, 1);
        const lowStockInterval = setInterval(()=>{
            setLowStock(prev => handleCounting(prev, lowStockCount))
        }, 1);
        return () => {
            clearInterval(productsInterval);
            clearInterval(totalInventoryInterval);
            clearInterval(lowStockInterval);
        };
    }, [productsCount, inventoryCount, lowStockCount]);

    return (
        <div className="bg-linear-to-l from-(--black-100) to-(--black-700) py-10 px-8 md:px-10 rounded-lg flex flex-col lg:flex-row gap-5 justify-between items-center">
                <div className="flex flex-col gap-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-(--neutral-100) cursor-pointer" onClick={() => navigate('/')}>Product Management System</h1>
                    <div className="flex flex-col md:gap-7 gap-10">
                        <div className="upper flex flex-col sm:flex-row gap-2 sm:gap-10 justify-center md:justify-start items-start">
                            <div className="flex gap-4">
                                <div className="flex">
                                    {loading && 
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex rounded-full"><CircleDot color="var(--yellow-500)"/></div>
                                            <span className="font-medium text-(--yellow-700) whitespace-nowrap">Connecting {". ".repeat(counterDots)}</span>
                                        </div>
                                    }
                                    {error && 
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex rounded-full"><CircleDot color="var(--red-500)"/></div>
                                            <span className="font-medium text-red-500">Failed to Connect</span>
                                        </div>
                                    }
                                    {!error && !loading && 
                                        <div className="flex items-center gap-2">
                                            <div className="inline-flex rounded-full"><CircleDot className="text-(--green-400)"/></div>
                                            <span className="font-medium text-blue-500">Connected</span>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="text-(--neutral-150) flex flex-col gap-2 justify-center md:justify-start whitespace-nowrap">
                            <div className="flex items-center gap-2">
                                <Grid3x2 color="var(--neutral-300)"/>
                                <span>{`Showing ${products.numOfRows} of ${productsCount} products`}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <RotateCcw color="var(--neutral-300)"/>
                                <div className="flex gap-2">
                                    <span>Last Action:</span>
                                    <span className="text-(--neutral-100)">{lastAction || 'No actions yet'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-fit grid grid-cols-1 md:grid-cols-2 gap-5 whitespace-nowrap">
                    <div className="w-full max-w-75 h-full flex flex-col justify-center gap-1 bg-blue-200 px-10 py-3 rounded-xl">
                        <span className="font-bold text-2xl text-wrap">Total Products</span>
                        <div className="flex items-center gap-2">
                            <Package/>
                            <span className="font-bold text-3xl">{totalProducts}</span>
                        </div>
                    </div>
                    <div className="w-full max-w-75 h-full flex flex-col justify-center gap-1 bg-green-200 px-10 py-3 rounded-xl">
                        <span className="font-bold text-2xl text-wrap">Total Inventory Value</span>
                        <div className="flex items-center gap-2">
                            <Boxes/>
                            <span className="font-bold text-3xl">{totalInventory}</span>
                        </div>
                    </div>
                    <div className="w-full max-w-75 h-full flex flex-col justify-center gap-1 bg-red-200 px-10 py-3 rounded-xl">
                        <span className="font-bold text-2xl text-wrap">Low Stock Items</span>
                        <div className="flex items-center gap-2">
                            <ArrowBigDown/>
                            <span className="font-bold text-3xl">{lowStock}</span>
                        </div>
                    </div>
                    <div className="w-full max-w-75 h-full flex flex-col justify-center gap-1 bg-violet-200 px-10 py-3 rounded-xl">
                        <span className="font-bold text-2xl text-wrap">Recently Added Products</span>
                        <div className="flex items-center gap-2">
                            <PackagePlus/>
                            <span className="font-bold text-3xl">{recentlyAdded}</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Dashboard;