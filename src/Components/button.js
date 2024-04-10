import { useMemo } from "react";

const Button = ({ children, variant }) => {
    console.log('VARIANT', variant)
    const className = useMemo(() => `
        text-primary-${variant}
        border-primary-${variant}
        border-2
        rounded-3xl
        py-2
        px-6
    `, [variant])

    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Button;
