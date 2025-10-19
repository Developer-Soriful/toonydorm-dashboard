const Button = ({
    children,      // Inner content (text, icon, etc.)
    onClick,       // Click handler
    className = "", // Custom classes
    disabled = false, // Disabled state
    type = "button",  // Button type
    style = {},      // Inline styles
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400 ${className}`}
            disabled={disabled}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;
