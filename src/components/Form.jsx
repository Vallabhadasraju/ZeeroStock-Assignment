import Input from './Input';
import Button from './Button';
import useProductStore from '../store/useProductStore';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { Plus } from 'lucide-react';
import { Check } from 'lucide-react';
import { ImagePlus } from 'lucide-react';
import { ImageMinus } from 'lucide-react';
import { CircleAlert } from 'lucide-react';

function Form(){
    const methods = useForm();
    const { handleSubmit, register, reset } = methods;
    const { addProduct, currentProduct, updateProduct, isImageSizeValid, setIsImageSizeValid } = useProductStore();
    const [image, setImage] = useState(null);
    const [isImageRemoved, setIsImageRemoved] = useState(false);
    const navigate = useNavigate();

    const MAX_SIZE_KB = 100;
    const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

    useEffect(() => {
        currentProduct && reset(currentProduct);
        setImage(currentProduct?.image || null);
        setIsImageRemoved(false);
    }, [currentProduct, reset]);

    const imageHandler = (e) => {
        const file = e.target.files[0];
        if(file){
            if(file.size > MAX_SIZE_BYTES){
                setIsImageSizeValid(false);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setIsImageRemoved(false);
                setIsImageSizeValid(true);
            }

            reader.readAsDataURL(file);
        }
    }

    const submitHandler = (data) => {
        const imageToSubmit = isImageRemoved ? null : image;
        const submittedData = { ...data, image: imageToSubmit };
        if(currentProduct){
            updateProduct(currentProduct.id, submittedData, isImageRemoved);
        }else{
            addProduct(submittedData);
        }

        navigate('/');
    }

    const removeImage = () => {
        if(image){
            setImage(null);
            setIsImageRemoved(true);
        }
    }

    return(
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submitHandler)} className="w-fit grid grid-cols-1 lg:grid-cols-2  gap-8">
                <Input label="Product Name" {...register("name", { required: "Product name is required" })} placeholder="Enter Product Name"/>
                <Input label="Description" {...register("description", { required: "Product description is required" })} placeholder="Enter Product Description"/>
                <div className="w-full col-span-full flex flex-col lg:flex-row gap-5">
                    <Input label="Price" {...register("price", { required: "Product price is required" })} type="number" placeholder="Enter Price"/>
                    <Input label="Discount" {...register("discount", { required: "Discount Percentage is required" })} type="number" placeholder="Enter Discount Percentage"/>
                    <Input label="Tax" {...register("tax", { required: "Tax Percentage is required"})} type="number" placeholder="Enter Tax Percentage"/>
                </div>
                <Input label="Quantity" {...register("quantity", { required: "Product quantity is required" })} type="number" placeholder="Enter Quantity"/>
                <div className="flex items-end col-span-full">
                    <input id="fileInput"type="file" accept="image/*"  onChange={imageHandler} className="px-5 py-3 rounded-b-lg bg-amber-100 hidden" />
                    <div>
                        <div className="flex flex-col md:flex-row gap-3">
                            <label htmlFor="fileInput" className="flex gap-5 cursor-pointer px-5 py-3 bg-blue-950 text-white rounded-lg hover:bg-blue-900">
                            { image ? <div className="flex items-center gap-5"><ImagePlus/><span>Change Image</span></div> : <div className="flex items-center gap-5"><ImagePlus/><span>Choose Image</span></div> }
                            </label>
                            <Button type="button" variant="danger" onClick={removeImage} className="flex items-center gap-5">
                                <ImageMinus /> Remove Image
                            </Button>
                        </div>
                        {image && <img src={image} alt="Image" className="mt-2 w-40 h-40 object-cover rounded"/>}
                        {isImageSizeValid === false &&
                            <div className={`flex items-center gap-2 text-red-500 pt-3`}>
                                <CircleAlert size={16}/>
                                <span>{`Image size exceeds ${MAX_SIZE_KB}KB limit. Please choose a smaller Image.`}</span>
                            </div>
                        }
                    </div>
                </div>
                <Button type="submit" variant="success" className="col-span-full justify-center">
                    {
                        currentProduct ? 
                            <>
                                <Check /> Update Product
                            </>
                        :
                            <>
                                <Plus /> Add Product
                            </>
                    }
                </Button>
            </form>
        </FormProvider>
    )
}

export default Form;