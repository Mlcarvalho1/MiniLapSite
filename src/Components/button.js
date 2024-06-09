import { useMemo } from "react";

const Button = ({ children, className, onClick, style }) => {
    const classes = useMemo(() => `
        border-2
        rounded-3xl
        py-2
        px-6
        border-primary-pure
        cursor-pointer
        active:bg-primary-low
    `, [])

    return (
        <div className={[classes + className]} style={style} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button;
