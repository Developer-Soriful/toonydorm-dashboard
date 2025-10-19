import { useState } from "react";
import LocationMap from "../ui/LocationMap";

const StatusBadge = ({ status }) => {
    let bgColor = '';
    let textColor = '';
    let icon = null;

    switch (status) {
        case 'Pending':
            bgColor = 'bg-yellow-100';
            textColor = 'text-[#854D0E]';
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clipPath="url(#clip0_355_16665)">
                        <path d="M8.62498 15.1668C12.3069 15.1668 15.2916 12.1821 15.2916 8.50016C15.2916 4.81826 12.3069 1.8335 8.62498 1.8335C4.94308 1.8335 1.95831 4.81826 1.95831 8.50016C1.95831 12.1821 4.94308 15.1668 8.62498 15.1668Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.625 5.8335V8.50016" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.625 11.1665H8.63167" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_355_16665">
                            <rect width="16" height="16" fill="white" transform="translate(0.625 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            );
            break;
        case 'Completed':
            bgColor = 'bg-green-100';
            textColor = 'text-[#166534]';
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clipPath="url(#clip0_355_16742)">
                        <path d="M15.159 7.16666C15.4635 8.66086 15.2465 10.2143 14.5442 11.5679C13.842 12.9214 12.6969 13.9934 11.3 14.6049C9.9031 15.2164 8.33876 15.3305 6.86787 14.9282C5.39699 14.526 4.10847 13.6316 3.21719 12.3943C2.32591 11.157 1.88575 9.65148 1.97011 8.12892C2.05448 6.60635 2.65826 5.15872 3.68077 4.02744C4.70329 2.89616 6.08273 2.14961 7.58905 1.9123C9.09537 1.67498 10.6375 1.96123 11.9583 2.72333" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.625 7.83317L8.625 9.83317L15.2917 3.1665" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_355_16742">
                            <rect width="16" height="16" fill="white" transform="translate(0.625 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            );
            break;
        case 'Cancelled':
            bgColor = 'bg-red-100';
            textColor = 'text-[#991B1B]';
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clipPath="url(#clip0_355_16899)">
                        <path d="M8.62498 15.1668C12.3069 15.1668 15.2916 12.1821 15.2916 8.50016C15.2916 4.81826 12.3069 1.8335 8.62498 1.8335C4.94308 1.8335 1.95831 4.81826 1.95831 8.50016C1.95831 12.1821 4.94308 15.1668 8.62498 15.1668Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.625 6.5L6.625 10.5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.625 6.5L10.625 10.5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_355_16899">
                            <rect width="16" height="16" fill="white" transform="translate(0.625 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            );
            break;
        default:
            bgColor = 'bg-gray-100';
            textColor = 'text-gray-600';
            break;
    }

    return (
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
            {icon} {status}
        </span>
    );
};

// Helper component for the Helpers section
const HelpersSection = ({ helpers }) => {
    const [userSelected, setUserSelected] = useState(null)
    const userViewDetails = (user) => {
        console.log(user);
    }
    const helperCount = helpers.helpers?.length || 0;
    return (
        <div className="request_user_card h-full">
            <h3 className="text-[#333333] text-sm">Helpers ({helperCount})</h3>
            <div className="z-10 w-full overflow-y-auto flex flex-col gap-4">
                {
                    helpers.helpers.map(helper => {
                        return <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-2">
                                <img className="w-10 h-10 rounded-full" src={helper.avatar} alt="" />
                                <div>
                                    <p className="text-[12px] text-[#111827]">{helper.name}</p>
                                    <p className="text-[#6B7280] text-[12px]">Id: {helper.userId}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className='cursor-pointer w-full' onClick={() => userViewDetails(helper)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91768 1.37468 7.768C1.91581 6.4559 2.83435 5.33403 4.01386 4.5446C5.19336 3.75517 6.58071 3.33374 8.00001 3.33374C9.41932 3.33374 10.8067 3.75517 11.9862 4.5446C13.1657 5.33403 14.0842 6.4559 14.6253 7.768C14.6809 7.91768 14.6809 8.08232 14.6253 8.232C14.0842 9.5441 13.1657 10.666 11.9862 11.4554C10.8067 12.2448 9.41932 12.6663 8.00001 12.6663C6.58071 12.6663 5.19336 12.2448 4.01386 11.4554C2.83435 10.666 1.91581 9.5441 1.37468 8.232Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span className='cursor-pointer w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <g clip-path="url(#clip0_283_7365)">
                                            <path d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8.00004 1.33333C4.31814 1.33333 1.33337 4.3181 1.33337 8C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 6L6 10" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6 6L10 10" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_283_7365">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                        </div>

                    })

                }
            </div>
        </div>
    );
};


const UserRequestModal = ({ request, onClose }) => {
    // Fallback for when data is loading or missing
    if (!request) return null;
    console.log(request);

    // Use mock data structure if request is present
    const {
        id,
        helpSeeker,
        status,
        timeCreated,
        location,
        number,
        helpers,
        requestType = "Medical" // Assume a default type if not provided in request object
    } = request;

    // Fallback for location (map placeholder text based on location)
    const mapPlaceholderText = location || "Location Not Found";

    const handleBlock = () => {
        console.log(`Blocking user: ${helpSeeker.name} (${helpSeeker.id})`);
        alert(`User ${helpSeeker.name} has been blocked.`);
        onClose();
    };

    return (
        <div className="fixed inset-0 backdrop-blur-lg flex justify-center items-center z-50">
            <div className="modal_layout relative transform transition-all duration-300 scale-100 opacity-100">
                {/* Modal Header */}
                <div className=" flex justify-between py-6">
                    <h2 className="text-[17px] text-[#333C4A] font-bold">User Details</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 5L5 15" stroke="url(#paint0_linear_355_15202)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 5L15 15" stroke="url(#paint1_linear_355_15202)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_355_15202" x1="0" y1="5" x2="0" y2="15" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D93A3A" />
                                    <stop offset="0.5" stop-color="#E94A4A" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_355_15202" x1="0" y1="5" x2="0" y2="15" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D93A3A" />
                                    <stop offset="0.5" stop-color="#E94A4A" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">

                    {/* Left Column: Details & Helpers */}
                    <div className="h-full flex flex-col gap-4">
                        {/* Help Seeker Details */}
                        <div className="request_user_card gap-4">
                            <h3 className="text-[14px] text-[#333]">
                                Help Seeker (R{id})
                            </h3>
                            <div className="flex items-center gap-3">
                                <img
                                    className="h-12 w-12 rounded-full object-cover"
                                    src={helpSeeker.avatar}
                                    alt={helpSeeker.name}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/48x48/CCCCCC/333333?text=User" }}
                                />
                                <div>
                                    <p className="text-[12px] text-[#111827]">{helpSeeker.name}</p>
                                    <p className="text-[#6B7280] text-[10px]">ID: {helpSeeker.id}</p>
                                </div>
                            </div>

                            <div className="">
                                <p className=""><span className="text-[#6B7280]">Request Type:</span> <span className="text-[#333333]">{requestType}</span></p>
                                <div className="flex items-center gap-2">
                                    <span classNam e="text-[#6B7280]">Status:</span>
                                    <StatusBadge status={status} />
                                </div>
                                <p className=""><span className="text-[#6B7280]">Time Created:</span> <span className="text-[#333333]">{timeCreated}</span></p>
                                <div className=''>
                                    <p className="text-[#6B7280]">Location:</p>
                                    <p className="font-normal"><span className="text-[#333333]">{location}</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Helpers Section */}
                        <HelpersSection helpers={request} />
                    </div>

                    {/* Right Column: Map Placeholder */}
                    <div className="lg:col-span-2 request_modal_location">
                        <h3 className="text-sm text-[#333C4A] font-medium">Current Location</h3>
                        <div className="location">
                            {/* this is the live location */}
                            <LocationMap />
                        </div>
                    </div>
                </div>

                {/* Modal Footer (Action Buttons) */}
                <div className="flex justify-between">
                    <button
                        onClick={handleBlock}
                        className="block_btn cursor-pointer"
                    >
                        Block User
                    </button>
                    <button
                        onClick={onClose}
                        className="close_btn text-sm text-[#1F2937] cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserRequestModal;
