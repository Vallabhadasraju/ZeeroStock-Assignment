import Form from './Form';
import useProductStore from '../store/useProductStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditProduct(){
    const { getProductById } = useProductStore();
    const { id } = useParams();
    useEffect(() => {
        id && getProductById(id)
    }, [id, getProductById]);

    return(
        <div className="w-full min-h-full flex flex-col items-center xl:items-start gap-5 bg-(--neutral-100) px-5 md:px-15 snap-x">
            <div className="px-3 md:px-10 py-5 flex flex-col items-center xl:items-start gap-10">
                <h1 className="text-3xl font-bold ">Edit Product</h1>
                <Form/>
            </div>
        </div>
    )
}

export default EditProduct;