
const SummaryCardItem = ({ Icon, text, value, iconBgColor, iconColor }) => {
    return (
        <div className="flex items-center gap-3">
            {/* Icon Circle */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgColor} ${iconColor}`}>
                <Icon size={16} />
            </div>
            <div className="flex flex-col gap-[5px]">
                {/* Text Label */}
                <div className="text-[#6B7280]">{text}</div>
                {/* Value */}
                <div className="font-bold text-[#333] text-[17px]">{value}</div>
            </div>
        </div>
    );
};

export default SummaryCardItem;