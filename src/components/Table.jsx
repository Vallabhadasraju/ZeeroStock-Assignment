import useProductStore from '../store/useProductStore';
import usePaginationStore from '../store/usePaginationStore';
import LinkButton from './LinkButton';
import PaginationBar from './PaginationBar';
import Button from './Button';
import { Trash } from 'lucide-react';
import { SquarePen } from 'lucide-react';


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function TableDemo(){

    const { products, loading, error, deleteProduct, sort} = useProductStore();
    const { products: paginationProducts } = usePaginationStore();    

    const productsRef = products;
    const shownProducts = productsRef.slice(paginationProducts.startIndex, paginationProducts.endIndex);
    if(sort === "name-asc"){
        productsRef.sort();
    } else if(sort === "name-desc"){
        productsRef.sort().reverse();
    } else if(sort === "price-asc"){
        productsRef.sort((a, b) => (a.price * (1 - a.discount / 100) * (1 + a.tax / 100)) - (b.price * (1 - b.discount / 100) * (1 + b.tax / 100)));
    } else if(sort === "price-desc"){
        productsRef.sort((a, b) => (b.price * (1 - b.discount / 100) * (1 + b.tax / 100)) - (a.price * (1 - a.discount / 100) * (1 + a.tax / 100)));
    }

    return(
        <>
            {loading && 
                <div className="w-full flex justify-center items-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span  className="absolute m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                </div>        
            }
            {error && 
                <span className="text-center text-red-500">{error}</span>
            }
            {!loading && !error && products.length === 0 && 
                <span className="py-5 text-center">No Products Found</span>
            }
            {products.length > 0 &&
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Image</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="w-25 text-center">Description</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="w-20">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {shownProducts.map((product) => (
                                <TableRow key={product.id} className="text-left">
                                    <TableCell className="flex justify-center font-medium">
                                        {
                                            product.image ?
                                                <img src={product.image} alt={product.name} className="w-10 h-10 object-cover" />
                                            :
                                                <span className="text-sm text-gray-500">No Image</span>
                                        }
                                    </TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell className="w-25">{product.description}</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                    <TableCell>${Number(product.price * (1 - product.discount / 100) * (1 + product.tax / 100)).toFixed(2)}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <LinkButton to={`/edit-product/${product.id}`} className="flex items-center gap-1">
                                            <SquarePen className="w-4 h-4 mr-1"/>
                                            Edit
                                        </LinkButton>
                                        <Button variant="danger" onClick={() => deleteProduct(product.id)} className="flex items-center justify-center"><Trash className="w-4 h-4"/></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <PaginationBar/>
                </div>
            }
        </>
    )
}

export default TableDemo;

