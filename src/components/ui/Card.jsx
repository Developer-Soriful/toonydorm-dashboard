const Card = ({ title, children, className = '' }) => {
    return (
        <div className={`location_magement_card h-full flex flex-col gap-4 ${className}`}>
            {title && <h3 className="text-[15.3px] font-medium text-[#333]">{title}</h3>}
            {children}
        </div>
    );
};

export default Card;