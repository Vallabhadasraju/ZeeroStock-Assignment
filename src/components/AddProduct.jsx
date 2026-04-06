import Form from './Form';

function AddProduct(){
    return(
        <div className="w-full min-h-full flex flex-col gap-5 bg-(--neutral-100) px-5 md:px-15 snap-x">
            <div className="px-10 py-5 flex flex-col items-center xl:items-start gap-10">
                <h1 className="text-3xl font-bold ">Add Product</h1>
                <div>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;