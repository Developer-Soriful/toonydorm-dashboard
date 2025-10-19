import { useState } from 'react';
import LocationMap from '../ui/LocationMap';

const UserDetailsModal = ({ user, onClose }) => {
    // Static mock data matching the User Details image (image_dd1faf.png)
    const mockDetails = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        registered: '2025-01-15',
        userId: 'User101',
        isOnline: true,
        accountStatus: 'Online',
        locationSharing: 'Enabled',
        lastActive: '2023-09-15 14:30',
        helpsGiven: 12,
        helpsTaken: 3,
    };

    // Live location data or location from props (example)
    const [currentLocation] = useState({
        // Example location (New York) - adjust as needed
        lat: 40.7128,
        lng: -74.0060,
        address: '123 Main St, New York, NY'
    });

    if (!user) return null;
    console.log(user);

    return (
        // Modal Overlay (Fixed position, full screen, semi-transparent background)
        <div className="fixed inset-0 backdrop-blur-lg flex justify-center items-center z-50">

            {/* Modal Content */}
            <div className="modal_layout relative transform transition-all duration-300 scale-100 opacity-100">

                {/* Header with Close Button */}
                <div className="flex justify-between items-start pb-4 mb-4">
                    <h2 className="text-[17px] font-bold text-[#333C4A] ">User Details</h2>
                    <button onClick={onClose} className="text-red-500 hover:text-red-700 p-1 rounded-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Left Column: User Profile & Status */}
                    <div className="col-span-1 space-y-4">

                        {/* Profile Info Card */}
                        <div className="flex flex-col items-start p-6 gap-4  rounded-[8px] border border-[#E5E7EB]">
                            <div className="flex justify-center items-center flex-col w-full gap-4">
                                <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" alt={mockDetails.name} className="w-[96px] h-[96px] rounded-full object-cover mb-3" />
                                <h3 className="text-xl font-semibold text-[#333C4A]">{user.name}</h3>
                                <span className="user_icon text-white">User</span>
                            </div>
                            <div>
                                <p className="flex gap-2 text-[#333C4A] text-[11.9px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M14.6666 4.66675L8.67259 8.48475C8.46918 8.60289 8.23814 8.66512 8.00292 8.66512C7.76769 8.66512 7.53666 8.60289 7.33325 8.48475L1.33325 4.66675" stroke="#495664" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M13.3333 2.66675H2.66659C1.93021 2.66675 1.33325 3.2637 1.33325 4.00008V12.0001C1.33325 12.7365 1.93021 13.3334 2.66659 13.3334H13.3333C14.0696 13.3334 14.6666 12.7365 14.6666 12.0001V4.00008C14.6666 3.2637 14.0696 2.66675 13.3333 2.66675Z" stroke="#495664" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg> 					{user.email}
                                </p>
                                <p className="flex gap-2 text-[#333C4A] text-[11.9px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.33325 1.33325V3.99992" stroke="#495664" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10.6667 1.33325V3.99992" stroke="#495664" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z" stroke="#495664" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 6.66675H14" stroke="#495664" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Registered: {mockDetails.registered}
                                </p>
                                <p className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M5.99984 7.33341C6.73622 7.33341 7.33317 6.73646 7.33317 6.00008C7.33317 5.2637 6.73622 4.66675 5.99984 4.66675C5.26346 4.66675 4.6665 5.2637 4.6665 6.00008C4.6665 6.73646 5.26346 7.33341 5.99984 7.33341Z" stroke="#495664" strokeWidth="1.5" />
                                        <path d="M8.66659 10.0001C8.66659 10.7367 8.66659 11.3334 5.99992 11.3334C3.33325 11.3334 3.33325 10.7367 3.33325 10.0001C3.33325 9.26341 4.52659 8.66675 5.99992 8.66675C7.47325 8.66675 8.66659 9.26341 8.66659 10.0001Z" stroke="#495664" strokeWidth="1.5" />
                                        <path d="M14.6666 8.00008C14.6666 10.5141 14.6666 11.7714 13.8853 12.5521C13.1039 13.3327 11.8473 13.3334 9.33325 13.3334H6.66658C4.15259 13.3334 2.89525 13.3334 2.11459 12.5521C1.33392 11.7707 1.33325 10.5141 1.33325 8.00008C1.33325 5.48608 1.33325 4.22875 2.11459 3.44808C2.89592 2.66741 4.15259 2.66675 6.66658 2.66675H9.33325C11.8473 2.66675 13.1046 2.66675 13.8853 3.44808C14.1986 3.76141 14.3859 4.15075 14.4986 4.66675M12.6666 8.00008H9.99992M12.6666 6.00008H9.33325M12.6666 10.0001H10.6666" stroke="#495664" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span className="text-[#333C4A] text-[11.9px]">
                                        {user.id}
                                    </span>
                                </p>
                                <p className="text-sm font-medium text-[#22C55E] flex items-center gap-4">
                                    <span className="h-[10px] w-[10px] rounded-full bg-[#22C55E]"></span>
                                    {user.activeStatus}
                                </p>
                            </div>
                        </div>

                        {/* Status Information Card */}
                        <div className="p-4 bg-white border border-gray-200 rounded-lg">
                            <h4 className="text-[13.6px] text-[#333C4A] font-medium">Status Information</h4>
                            <div className="text-sm space-y-1">
                                <p className="flex justify-between">
                                    <span className="text-[11.9px] text-[#333C4A]">Account Status:</span>
                                    <span className="font-medium text-green-600">Online</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-[11.9px] text-[#333C4A]">Location Sharing:</span>
                                    <span className="font-medium text-green-600">Enabled</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-[11.9px] text-[#333C4A]">Last Active:</span>
                                    <span className="text-[11.9px] text-[#333C4A]">{user.lastActive}</span>
                                </p>
                            </div>
                        </div>

                        {/* Help Activity Summary Card */}
                        <div className="p-4 bg-white border border-gray-200 rounded-lg flex flex-col gap-4">
                            <h4 className="text-[13.6px] font-medium">Help Activity Summary</h4>
                            <div className="flex justify-around text-center gap-4">
                                <div className="helps_given">
                                    <p className="text-[20.4px] font-bold text-[#2563EB]">{mockDetails.helpsGiven}</p>
                                    <span className="text-[10.2px] text-[#333C4A]">Helps Given</span>
                                </div>
                                <div className="helps_taken">
                                    <p className="text-2xl font-bold text-[#16A34A]">{mockDetails.helpsTaken}</p>
                                    <span className="text-[10.2px] text-[#333C4A]">Helps Taken</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Columns: Map and Activity */}
                    <div className="col-span-2 space-y-4">

                        {/* Current Location Map - Leaflet Integration with Zoom Control */}
                        <div className="p-4 bg-white border border-gray-200 rounded-lg">
                            <h4 className="text-[13.6px] text-[#1F2937] font-medium mb-2">Current Location</h4>

                            <div className="relative h-64 rounded-lg overflow-hidden">
                                <LocationMap />
                            </div>
                        </div>

                        {/* Recent Helps Given */}
                        <div className="p-4 bg-white border border-gray-200 rounded-lg text-[13.6px] text-[#1F2937]">
                            <h4 className="text-[13.6px] text-[#1F2937] font-medium mb-2">Recent Helps Given</h4>
                            <ul className="space-y-2 text-sm">
                                {['R001', 'R002'].map(req => (
                                    <li key={req} className="flex justify-between recent_helps_given">
                                        <span className="">Request # {req}</span>
                                        <div className="flex justify-center items-center gap-6">
                                            <span className="text-gray-500 text-xs">2025-09-10 09:45</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91767 1.37468 7.768C1.91581 6.4559 2.83435 5.33402 4.01386 4.5446C5.19336 3.75517 6.58071 3.33374 8.00001 3.33374C9.41932 3.33374 10.8067 3.75517 11.9862 4.5446C13.1657 5.33402 14.0842 6.4559 14.6253 7.768C14.6809 7.91767 14.6809 8.08232 14.6253 8.232C14.0842 9.54409 13.1657 10.666 11.9862 11.4554C10.8067 12.2448 9.41932 12.6663 8.00001 12.6663C6.58071 12.6663 5.19336 12.2448 4.01386 11.4554C2.83435 10.666 1.91581 9.54409 1.37468 8.232Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Helps Taken */}
                        <div className="p-4 bg-white border border-gray-200 rounded-lg">
                            <h4 className="text-[13.6px] text-[#1F2937] font-medium mb-2">Recent Helps Taken</h4>
                            <ul className="space-y-2 text-sm">
                                {['R003'].map(req => (
                                    <li key={req} className="recent_helps_given flex justify-between">
                                        <span className="text-gray-700">Request # {req}</span>
                                        <div className="flex justify-center gap-4 ">
                                            <span className="text-gray-500 text-xs">2025-09-10 09:45</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91767 1.37468 7.768C1.91581 6.4559 2.83435 5.33402 4.01386 4.5446C5.19336 3.75517 6.58071 3.33374 8.00001 3.33374C9.41932 3.33374 10.8067 3.75517 11.9862 4.5446C13.1657 5.33402 14.0842 6.4559 14.6253 7.768C14.6809 7.91767 14.6809 8.08232 14.6253 8.232C14.0842 9.54409 13.1657 10.666 11.9862 11.4554C10.8067 12.2448 9.41932 12.6663 8.00001 12.6663C6.58071 12.6663 5.19336 12.2448 4.01386 11.4554C2.83435 10.666 1.91581 9.54409 1.37468 8.232Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg> 					 </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex justify-between pt-4 space-x-3 mt-4">
                    <button className="block_btn hover:bg-red-200 transition text-[#991B1B] text-[13.6px] cursor-pointer">Block User</button>
                    <button onClick={onClose} className="close_btn hover:bg-yellow-600 transition text-[13.6px] text-[#1F2937] cursor-pointer">Close</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsModal;