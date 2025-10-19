
const LocationListItem = ({ Icon, name, timeAgo, status, iconBgColor, iconColor }) => {
    return (
        <div className="flex gap-3 ">

            {/* Icon Circle */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgColor} ${iconColor} flex-shrink-0`}>
                <Icon size={20} />
            </div>

            {/* Name and Status */}
            <div className="flex-1">
                <div className="font-medium text-gray-800">{name}</div>
                <div className="text-sm text-gray-500">{timeAgo} • <span className="text-[#6B7280] text-[10.2px]">{status}</span></div>
            </div>
        </div>
    );
};

export default LocationListItem;