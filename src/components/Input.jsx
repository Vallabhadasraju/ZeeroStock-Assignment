import { CircleAlert } from 'lucide-react';
import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';


const Input = forwardRef((props, ref) => {
    const { formState: { errors } } = useFormContext();
    const fieldError = errors[props.name];

    return(
        <div className={`${props.className} min-w-60 max-w-120 flex flex-col gap-2`}>
            <span className="font-medium text-neutral-800">{props.label}</span>
            <input ref={ref} {...props} className={`[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&-moz-appearance]:textfield border-(--black-100) w-full px-4 py-2 border-3 rounded-lg outline-0`} />
            {fieldError && 
                <div className={`flex items-center gap-2 text-red-500`}>
                    <CircleAlert size={16}/>
                    <span>{errors[props.name].message}</span>
                </div>
            }
        </div>
    )
})

export default Input;