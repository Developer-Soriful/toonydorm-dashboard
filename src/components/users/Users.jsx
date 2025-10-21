import { useState, useMemo, useCallback, useEffect } from 'react';
import UserDetailsModal from './UserDetailsModal';

// --- Shared Components ---

// Reusing the DashboardCard for consistent styling
const DashboardCard = ({ title, children, className = '' }) => (
    <div className={`user_card ${className}`}>
        {title && <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>}
        {children}
    </div>
);

// --- Dummy Data ---
// In a real application, this data would be fetched from an API.
const DUMMY_TOTAL_USERS = 200;
const generateDummyUsers = (count) => {
    const roles = ['Help Seeker', 'Help Provider', 'Both'];
    const statuses = ['Online', 'Offline'];
    const users = [];

    for (let i = 0; i < count; i++) {
        users.push({
            id: `User${100 + i + 1}`,
            name: `User Name ${i + 1}`,
            email: `user${i + 1}@example.com`,
            avatar: `https://i.pravatar.cc/150?img=${(i % 50) + 1}`, // Cycle through some images
            role: roles[Math.floor(Math.random() * roles.length)],
            activeStatus: statuses[Math.floor(Math.random() * statuses.length)],
            lastActive: `2025-09-15 14:${String(10 + i % 50).padStart(2, '0')}`,
        });
    }
    return users;
};

const ALL_DUMMY_USERS = generateDummyUsers(DUMMY_TOTAL_USERS);

// --- UserRow Component ---
const UserRow = ({ user, onViewDetails }) => (
    <tr className="border-b border-[#EBEBEB] hover:bg-gray-50">
        <td className="px-6 text-[#333] text-[14px]">{user.id}</td>
        <td className="px-6 text-[#333] text-[14px]  mt-6 flex items-center">
            <img src={user.avatar} alt={user.name} className="w-[28px] h-[28px] rounded-full mr-3 object-cover" />
            <span className="font-medium text-gray-900">{user.name}</span>
        </td>
        <td className="px-6 text-[#333] text-[14px]">{user.email}</td>
        <td className="px-6 ">
            {/* Role Badge Styling */}
            <span className={`px-3 py-[4px] text-[10.2px] font-semibold rounded-full ${user.role === 'Help Seeker' ? 'bg-[#fff9da] text-[#CA8B06]' :
                user.role === 'Help Provider' ? 'bg-[#DBEAFE] text-[#1E40AF]' :
                    'bg-[#cdece2] text-[#079c6d]'
                }`}>
                {user.role}
            </span>
        </td>
        <td className="px-6">
            {/* Status Badge Styling */}
            <span className={`px-3 py-[4px] text-[10.2px] font-semibold rounded-full ${user.activeStatus === 'Online' ? 'bg-[#dcfce7] text-[#166534]' :
                'bg-[#FEE2E2] text-[#991b1b]'
                }`}>
                {user.activeStatus}
            </span>
        </td>
        <td className="px-6 text-[#333] text-[14px]">{user.lastActive}</td>
        <td className='flex justify-center items-center gap-3 mr-15 pb-6'>
            <span className='cursor-pointer' onClick={() => onViewDetails(user)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91768 1.37468 7.768C1.91581 6.4559 2.83435 5.33403 4.01386 4.5446C5.19336 3.75517 6.58071 3.33374 8.00001 3.33374C9.41932 3.33374 10.8067 3.75517 11.9862 4.5446C13.1657 5.33403 14.0842 6.4559 14.6253 7.768C14.6809 7.91768 14.6809 8.08232 14.6253 8.232C14.0842 9.5441 13.1657 10.666 11.9862 11.4554C10.8067 12.2448 9.41932 12.6663 8.00001 12.6663C6.58071 12.6663 5.19336 12.2448 4.01386 11.4554C2.83435 10.666 1.91581 9.5441 1.37468 8.232Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
            <span className='cursor-pointer'>
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
        </td>
    </tr>
);


// --- Main User Table Component ---

const Users = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15; // As per the image: "Showing 15 of 200 users"
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);
    // this is for modal close function 
    const onClose = () => {
        setModal(false)
    }
    // this is for modal properly opening 
    const onViewDetails = (user) => {
        setSelectedUser(user)
        setModal(!modal)
    }

    // Filtered and Searched Data (Client-side, for demo purposes)
    const filteredUsers = useMemo(() => {
        return ALL_DUMMY_USERS.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.id.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesRole = selectedRole === 'All' || user.role === selectedRole;
            const matchesStatus = selectedStatus === 'All' || user.activeStatus === selectedStatus;
            return matchesSearch && matchesRole && matchesStatus;
        });
    }, [searchTerm, selectedRole, selectedStatus]);

    // Pagination calculations based on filtered data
    const totalItems = filteredUsers.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Mimic API call for current page data
    const currentUsers = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredUsers.slice(startIndex, endIndex);
    }, [currentPage, filteredUsers, itemsPerPage]);

    // --- Pagination Logic (Adjusted for client-side filtering) ---
    const goToPage = useCallback((pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages && pageNumber !== currentPage) {
            setCurrentPage(pageNumber);
        }
    }, [currentPage, totalPages]); // Dependencies for useCallback

    const goToPreviousPage = () => goToPage(currentPage - 1);
    const goToNextPage = () => goToPage(currentPage + 1);

    // Effect to reset page when filters or search change
    useEffect(() => {
        setCurrentPage(1); // Reset to first page when search/filters change
    }, [searchTerm, selectedRole, selectedStatus]);


    const getPageNumbers = useMemo(() => {
        const pagesToShow = 5;
        const current = currentPage;
        const total = totalPages;
        const delta = Math.floor(pagesToShow / 2);

        let start = current - delta;
        let end = current + delta;

        if (start < 1) {
            end = Math.min(total, end + (1 - start));
            start = 1;
        }
        if (end > total) {
            start = Math.max(1, start - (end - total));
            end = total;
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    }, [currentPage, totalPages]);


    // --- Render ---

    return (
        <div>
            <div className="pb-6 flex justify-between">
                <h1 className="dashboard_heading">User Management</h1>
                <div className="flex justify-center items-center p-3">
                    <select className="time_selected p-3" name="" id="">
                        <option value="all">All</option>
                        <option value="1months">1 months</option>
                        <option value="6months">6 months</option>
                        <option value="1year">1 year</option>
                    </select>
                </div>
            </div>
            <DashboardCard className="!p-0"> {/* Remove default padding, as content has its own */}
                {/* Top Controls: Search and Filters */}
                <div className="flex flex-col sm:flex-row items-center justify-between p-6 border-b border-gray-100 bg-white rounded-t-xl">
                    {/* Search Input */}
                    <div className="relative w-full sm:w-1/3 mr-0 sm:mr-4 mb-4 sm:mb-0">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full h-[45px] text-[#CCCCCC] text-[16px] pl-10 pr-4 py-2 border border-gray-300 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex items-center space-x-4">
                        {/* Role Filter */}
                        <div className='flex justify-center items-center gap-2 text-[#333] text-[11.9px]'>
                            <span>Role:</span>
                            <select
                                id="role-filter"
                                className="block h-[45px] w-full rounded-[6px] border border-gray-300 py-2 pl-3 pr-10 text-base text-gray-700 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="Help Seeker">Help Seeker</option>
                                <option value="Help Provider">Help Provider</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>
                        {/* Status Filter */}
                        <div className='flex justify-center items-center gap-2 text-[#333] text-[11.9px]'>
                            <span>Status:</span>
                            <select
                                id="status-filter"
                                className="block h-[45px] w-full rounded-[6px] border border-gray-300 py-2 pl-3 pr-10 text-base text-gray-700 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:text-sm"
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                            >
                                <option value="All"> All</option>
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Main Table */}
                <div className="overflow-x-auto"> {/* Ensures horizontal scroll on small screens */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-[#f5f5f5] text-[#333] text-[14px]">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left uppercase tracking-wider font-semibold">User ID</th>
                                <th scope="col" className="px-6 py-3 text-left uppercase tracking-wider font-semibold">Name</th>
                                <th scope="col" className="px-6 py-3 text-left uppercase tracking-wider font-semibold">Email</th>
                                <th scope="col" className="px-6 py-3 text-left uppercase tracking-wider font-semibold">Role</th>
                                <th scope="col" className="px-6 py-3 text-left uppercase tracking-wider font-semibold">Active Status</th>
                                <th scope="col" className="px-6 py-3 text-left uppercase tracking-wider font-semibold">Last Active</th>
                                <th scope="col" className="px-6 py-3 text-start uppercase tracking-wider font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {isLoading ? (
                                <tr>
                                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">Loading users...</td>
                                </tr>
                            ) : currentUsers.length > 0 ? (
                                currentUsers.map((user) => (
                                    <UserRow onViewDetails={onViewDetails} key={user.id} user={user} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">No users found matching your criteria.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700 rounded-b-xl bg-white">
                    {/* Status Text */}
                    <div className="pagination_left_content">
                        Showing <span className="font-semibold">{currentUsers.length}</span> of{' '}
                        <span className="font-semibold">{totalItems}</span> users
                    </div>

                    {/* Pagination Controls */}
                    <nav className="flex items-center  space-x-2" aria-label="Pagination">
                        {/* Previous Button */}
                        <button
                            onClick={goToPreviousPage}
                            disabled={currentPage === 1 || isLoading}
                            className={`px-4 py-2 rounded-lg border border-[#CA8B06] bg-white text-gray-700 hover:bg-gray-50 transition 
                       ${currentPage === 1 || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Previous
                        </button>

                        {/* Dynamic Page Numbers */}
                        {getPageNumbers.map((number) => (
                            <button
                                key={number}
                                onClick={() => goToPage(number)}
                                disabled={isLoading}
                                className={`px-4 py-2 rounded-lg font-medium transition 
                         ${currentPage === number
                                        ? 'bg-[#CA8B06] text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-[#CA8B06]'
                                    }`}
                            >
                                {number}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages || isLoading}
                            className={`px-4 py-2 rounded-lg border border-[#CA8B06] bg-white text-gray-700 hover:bg-gray-50 transition 
                       ${currentPage === totalPages || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Next
                        </button>
                    </nav>
                </div>
            </DashboardCard>
            {/* htis is user details modal */}
            {modal && <UserDetailsModal user={selectedUser} onClose={onClose} />}

        </div>
    );
};

export default Users;