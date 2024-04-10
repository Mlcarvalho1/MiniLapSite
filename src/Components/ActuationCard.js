 const ActuationCard = ({ icon, title, children}) => {
    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center
            "
        >
            <img className="h-[120px] top-[60px] relative" src={icon} alt="guts"/>

            <div className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-md
                rounded-lg
                p-6
                pt-[60px]
                max-w-[350px]
                h-[400px]
            ">  
                <h2 className="mt-8 mb-12 text-xl font-semibold">{title}</h2>
                <div className="mt-2 text-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ActuationCard;
