function Button({ variant = "primary", children, onClick, ...props}){
    const colors = {
        natural: "bg-(--neutral-100)",
        primary: "bg-(--blue-100)",
        danger: "bg-(--red-100)",
        success: "bg-(--green-100)",
    }

    return(
        <button className={`${props.className} w-fit flex items-center gap-2 text-neutral-300 font-bold py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 ${colors[variant]}`} onClick={onClick} type={props.type}>
            {children}
        </button>
    )
}

export default Button;