import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import UserDetailsModal from '../users/UserDetailsModal';
// Correct Heroicons Imports

// --- MOCK DATA ---
const usersData = [
    { id: 'User101', name: 'Jane Cooper', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=1' },
    { id: 'User102', name: 'Cody Fisher', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=2' },
    { id: 'User103', name: 'Jerome Bell', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=3' },
    { id: 'User104', name: 'Jenny Wilson', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=4' },
    { id: 'User105', name: 'Darlene Robertson', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=5' },
    { id: 'User106', name: 'Theresa Webb', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=6' },
    { id: 'User107', name: 'Kristin Watson', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=7' },
    { id: 'User108', name: 'Ralph Edwards', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=8' },
    { id: 'User109', name: 'Ronald Richards', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=9' },
    { id: 'User110', name: 'Dianne Russell', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=10' },
    { id: 'User111', name: 'Leslie Alexander', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=11' },
    { id: 'User112', name: 'Robert Fox', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=12' },
    { id: 'User113', name: 'Brooklyn Simmons', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=13' },
    { id: 'User114', name: 'Floyd Miles', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=14' },
    { id: 'User115', name: 'Bessie Cooper', email: 'name@email.com', dateBlocked: '2025-09-15 14:30', avatar: 'https://i.pravatar.cc/50?img=15' },
];

const BlockAccount = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalRequests = 200;
    const requestsPerPage = usersData.length;
    const totalPages = Math.ceil(totalRequests / requestsPerPage);
    // this is for modal on of state 
    const [modal, setModal] = useState(false)
    // this is for user data selet state 
    const [selectedUser, setSelectedUser] = useState(null)
    // this function for blocked person view modal 
    const onViewDetails = (user) => {
        setSelectedUser(user)
        setModal(!modal)
    }
    // this is for modal close function 
    const onClose = () => {
        setModal(false)
    }
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="pb-6 flex justify-between">
                <h1 className="dashboard_heading">User Management</h1>
            </div>
            <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
                {/* Search and Filter Row */}
                <div className="flex justify-between items-center mb-6 ">
                    <div className="relative flex items-center w-2/3">
                        <IoSearchOutline className="absolute left-4 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 text-gray-800 text-base"
                        />
                    </div>

                    {/* Status Filter Dropdown */}
                    <div className="flex justify-end">
                        <div className='flex justify-center items-center gap-2 text-[#333] text-[11.9px]'>
                            <span>Status:</span>
                            <select
                                id="status-filter"
                                className="block h-[45px] w-full rounded-[6px] border border-gray-300 py-2 pl-3 pr-10 text-base text-gray-700 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"
                            >
                                <option value="All"> All</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Table Component */}
                <div className="overflow-x-auto bg-white rounded-lg ">
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* Table Header */}
                        <thead className="bg-gray-50">
                            <tr>
                                {['User ID', 'Name', 'Email', 'Date Blocked', 'Actions'].map((header) => (
                                    <th
                                        key={header}
                                        className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody className="bg-white divide-y divide-gray-200">
                            {usersData.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>

                                    {/* Name with Avatar column */}
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden">
                                                <img className="h-full w-full object-cover" src={user.avatar} alt={user.name} />
                                            </div>
                                            <div className="ml-4 text-sm font-medium text-gray-900">{user.name}</div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.dateBlocked}</td>

                                    {/* Actions column */}
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => onViewDetails(user)} className="text-blue-500 hover:text-blue-700 p-2 rounded-full hover:bg-blue-50 transition duration-150 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <g clip-path="url(#clip0_360_18614)">
                                                    <path d="M1.37456 8.73224C1.319 8.58256 1.319 8.41792 1.37456 8.26824C1.91569 6.95614 2.83423 5.83427 4.01374 5.04484C5.19324 4.25541 6.58059 3.83398 7.99989 3.83398C9.41919 3.83398 10.8065 4.25541 11.986 5.04484C13.1655 5.83427 14.0841 6.95614 14.6252 8.26824C14.6808 8.41792 14.6808 8.58256 14.6252 8.73224C14.0841 10.0443 13.1655 11.1662 11.986 11.9556C10.8065 12.7451 9.41919 13.1665 7.99989 13.1665C6.58059 13.1665 5.19324 12.7451 4.01374 11.9556C2.83423 11.1662 1.91569 10.0443 1.37456 8.73224Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M7.99988 10.5C9.10445 10.5 9.99988 9.60457 9.99988 8.5C9.99988 7.39543 9.10445 6.5 7.99988 6.5C6.89531 6.5 5.99988 7.39543 5.99988 8.5C5.99988 9.60457 6.89531 10.5 7.99988 10.5Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_360_18614">
                                                        <rect width="16" height="16" fill="white" transform="translate(-0.00012207 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                <div className="flex justify-between items-center pt-4 pb-2">
                    {/* Info Text */}
                    <div className="text-sm font-medium text-gray-600">
                        Showing <span className="text-yellow-600">15 of 200</span> Requests
                    </div>

                    {/* Pagination Buttons */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                            className={`flex items-center space-x-1 px-4 py-2 border rounded-lg text-sm font-semibold transition duration-150
              ${currentPage === 1 ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}
            `}
                        >
                            {/* <ChevronLeftIcon className="h-5 w-5" /> */}
                            <span>Previous</span>
                        </button>

                        {/* Current Page Indicator (Gold Circle) */}
                        <div className="w-9 h-9 flex items-center justify-center bg-yellow-600 text-white rounded-lg text-sm font-semibold">
                            {currentPage}
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                            className={`flex items-center space-x-1 px-4 py-2 border rounded-lg text-sm font-semibold transition duration-150
              ${currentPage === totalPages ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-gray-700 border-gray-300 hover:bg-gray-50'}
            `}
                        >
                            <span>Next</span>
                            {/* <ChevronRightIcon className="h-5 w-5" /> */}
                        </button>
                    </div>
                </div>
            </div>
            {/* this is modal */}
            {
                modal && <UserDetailsModal user={selectedUser} onClose={onClose} />
            }
        </div>
    );
};

export default BlockAccount;