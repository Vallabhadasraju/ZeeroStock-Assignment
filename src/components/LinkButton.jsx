import { Link } from "react-router-dom";

function LinkButton({ to, variant = "primary", type, className, onClick, children }){
    const colors = {
        primary: "bg-(--green-100)",
        danger: "bg-red-500",
        success: "bg-green-500",
    }

    return(
        <Link className={`${className} whitespace-nowrap flex justify-between items-center text-neutral-300 font-bold py-2 px-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 ${colors[variant]}`} to={to} type={type} onClick={onClick}>
            {children}
        </Link>
    )
}

export default LinkButton;