// src/components/Request.jsx

import { useState, useMemo } from 'react';
import { requestsData } from '../../constans';

// Sub-components
const TableFilters = ({ searchTerm, onSearchChange, statusFilter, onStatusChange }) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-[200px]">
            {/* Search Input */}
            <div className="relative w-full ">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full !pl-10 status_role focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </span>
            </div>

            {/* Status Dropdown */}
            <div className="flex items-center space-x-2 w-full sm:w-auto">
                <span className="text-gray-600 text-sm font-medium">Status:</span>
                <select
                    className="status_role"
                    value={statusFilter}
                    onChange={(e) => onStatusChange(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
                {/* Custom arrow for select */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const StatusBadge = ({ status }) => {
    let bgColor = '';
    let textColor = '';
    let icon = null;

    switch (status) {
        case 'Pending':
            bgColor = 'request_panding';
            textColor = 'text-[#854D0E]';
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clip-path="url(#clip0_355_16665)">
                        <path d="M8.62498 15.1668C12.3069 15.1668 15.2916 12.1821 15.2916 8.50016C15.2916 4.81826 12.3069 1.8335 8.62498 1.8335C4.94308 1.8335 1.95831 4.81826 1.95831 8.50016C1.95831 12.1821 4.94308 15.1668 8.62498 15.1668Z" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.625 5.8335V8.50016" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.625 11.1665H8.63167" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_355_16665">
                            <rect width="16" height="16" fill="white" transform="translate(0.625 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            ); // Clock icon
            break;
        case 'Completed':
            bgColor = 'request_completed';
            textColor = 'text-[#166534]';
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clip-path="url(#clip0_355_16742)">
                        <path d="M15.159 7.16666C15.4635 8.66086 15.2465 10.2143 14.5442 11.5679C13.842 12.9214 12.6969 13.9934 11.3 14.6049C9.9031 15.2164 8.33876 15.3305 6.86787 14.9282C5.39699 14.526 4.10847 13.6316 3.21719 12.3943C2.32591 11.157 1.88575 9.65148 1.97011 8.12892C2.05448 6.60635 2.65826 5.15872 3.68077 4.02744C4.70329 2.89616 6.08273 2.14961 7.58905 1.9123C9.09537 1.67498 10.6375 1.96123 11.9583 2.72333" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.625 7.83317L8.625 9.83317L15.2917 3.1665" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_355_16742">
                            <rect width="16" height="16" fill="white" transform="translate(0.625 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            ); // Checkmark icon
            break;
        case 'Cancelled':
            bgColor = 'request_cancelled';
            textColor = 'text-[#991B1B]';
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <g clip-path="url(#clip0_355_16899)">
                        <path d="M8.62498 15.1668C12.3069 15.1668 15.2916 12.1821 15.2916 8.50016C15.2916 4.81826 12.3069 1.8335 8.62498 1.8335C4.94308 1.8335 1.95831 4.81826 1.95831 8.50016C1.95831 12.1821 4.94308 15.1668 8.62498 15.1668Z" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.625 6.5L6.625 10.5" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.625 6.5L10.625 10.5" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_355_16899">
                            <rect width="16" height="16" fill="white" transform="translate(0.625 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
            ); // Cross icon
            break;
        default:
            bgColor = 'bg-gray-100';
            textColor = 'text-gray-600';
            break;
    }

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
            {icon}
            {status}
        </span>
    );
};

const HelperAvatars = ({ helpers }) => {
    if (!helpers || helpers.length === 0) {
        return <span className="text-gray-500">No Helpers</span>;
    }

    const displayedHelpers = helpers.slice(0, 3); // Show max 3, then +N

    return (
        <div className="flex -space-x-2 overflow-hidden">
            {displayedHelpers.map((helper, index) => (
                <img
                    key={helper.id}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    src={helper.avatar}
                    alt={`Helper ${helper.id}`}
                    style={{ zIndex: displayedHelpers.length - index }} // Stack visually
                />
            ))}
            {helpers.length > 3 && (
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 text-xs text-gray-600 ring-2 ring-white">
                    +{helpers.length - 3}
                </span>
            )}
        </div>
    );
};

const TableRow = ({ request }) => {
    const handleViewDetails = () => {
        alert(`Viewing details for Request ID: ${request.id}`);
    };

    const handleDeleteRequest = () => {
        alert(`Deleting Request ID: ${request.id}`);
    };

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {request.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                        <img className="h-8 w-8 rounded-full" src={request.helpSeeker.avatar} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{request.helpSeeker.name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {request.userId}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {request.number}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {request.location}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <StatusBadge status={request.status} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <HelperAvatars helpers={request.helpers} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {request.timeCreated}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center space-x-2">
                    <button
                        onClick={handleViewDetails}
                        className="text-blue-600 "
                        title="View Details"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clip-path="url(#clip0_355_16678)">
                                <path d="M1.37456 8.73224C1.319 8.58256 1.319 8.41792 1.37456 8.26824C1.91569 6.95614 2.83423 5.83427 4.01374 5.04484C5.19324 4.25541 6.58059 3.83398 7.99989 3.83398C9.41919 3.83398 10.8065 4.25541 11.986 5.04484C13.1655 5.83427 14.0841 6.95614 14.6252 8.26824C14.6808 8.41792 14.6808 8.58256 14.6252 8.73224C14.0841 10.0443 13.1655 11.1662 11.986 11.9556C10.8065 12.7451 9.41919 13.1665 7.99989 13.1665C6.58059 13.1665 5.19324 12.7451 4.01374 11.9556C2.83423 11.1662 1.91569 10.0443 1.37456 8.73224Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.99988 10.5C9.10445 10.5 9.99988 9.60457 9.99988 8.5C9.99988 7.39543 9.10445 6.5 7.99988 6.5C6.89531 6.5 5.99988 7.39543 5.99988 8.5C5.99988 9.60457 6.89531 10.5 7.99988 10.5Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_355_16678">
                                    <rect width="16" height="16" fill="white" transform="translate(-0.00012207 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button
                        onClick={handleDeleteRequest}
                        className="text-red-600 "
                        title="Delete Request"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <g clip-path="url(#clip0_355_16681)">
                                <path d="M7.99992 15.1668C11.6818 15.1668 14.6666 12.1821 14.6666 8.50016C14.6666 4.81826 11.6818 1.8335 7.99992 1.8335C4.31802 1.8335 1.33325 4.81826 1.33325 8.50016C1.33325 12.1821 4.31802 15.1668 7.99992 15.1668Z" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.99988 6.5L5.99988 10.5" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.99988 6.5L9.99988 10.5" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_355_16681">
                                    <rect width="16" height="16" fill="white" transform="translate(-0.00012207 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};


const RequestsTable = ({ data }) => {
    const tableHeaders = [
        'Request ID',
        'Help Seeker',
        'User ID',
        'Number',
        'Location',
        'Status',
        'Helpers',
        'Time Created',
        'Actions',
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {tableHeaders.map((header) => (
                            <th
                                key={header}
                                scope="col"
                                className="px-6 py-3 text-left text-xs text-[14px] text-[#333] font-semibold uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.length > 0 ? (
                        data.map((request) => <TableRow key={request.id} request={request} />)
                    ) : (
                        <tr>
                            <td colSpan={tableHeaders.length} className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                No requests found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// =================================================================
// THIS IS THE REVISED TablePagination COMPONENT
// =================================================================
const TablePagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    // Simple page number generation
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
            <div className="text-sm text-gray-700 mb-4 sm:mb-0">
                Showing <span className="font-semibold">{startItem}</span> to <span className="font-semibold">{endItem}</span> of{' '}
                <span className="font-semibold">{totalItems}</span> Requests
            </div>

            {/* START OF REVISED PAGINATION NAV */}
            <nav className="flex items-center space-x-2" aria-label="Pagination">
                {/* Previous Button - Styled for border-[#CA8B06] and rounded-lg, text only */}
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg border border-[#CA8B06] bg-white text-gray-700 hover:bg-gray-50 transition 
                        ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Previous
                </button>

                {/* Dynamic Page Numbers - Styled for border-[#CA8B06] and active state */}
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        aria-current={currentPage === page ? 'page' : undefined}
                        className={`px-4 py-2 rounded-lg font-medium transition 
                            ${currentPage === page
                                ? 'bg-[#CA8B06] text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-gray-50 border border-[#CA8B06]'
                            }`}
                    >
                        {page}
                    </button>
                ))}

                {/* Next Button - Styled for border-[#CA8B06] and rounded-lg, text only */}
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg border border-[#CA8B06] bg-white text-gray-700 hover:bg-gray-50 transition 
                        ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    Next
                </button>
            </nav>
            {/* END OF REVISED PAGINATION NAV */}
        </div>
    );
};


const Request = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // As seen in the mock data, showing 10-15 items per page

    // Filter and paginate data
    const filteredAndPaginatedData = useMemo(() => {
        let filteredData = requestsData.filter((request) => {
            const matchesSearch =
                request.helpSeeker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.number.includes(searchTerm);

            const matchesStatus =
                statusFilter === 'All' || request.status === statusFilter;

            return matchesSearch && matchesStatus;
        });

        // Pagination
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData.slice(startIndex, endIndex);
    }, [searchTerm, statusFilter, currentPage, itemsPerPage]); // Re-run only when these change

    const totalFilteredItems = useMemo(() => {
        return requestsData.filter((request) => {
            const matchesSearch =
                request.helpSeeker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                request.number.includes(searchTerm);

            const matchesStatus =
                statusFilter === 'All' || request.status === statusFilter;

            return matchesSearch && matchesStatus;
        }).length;
    }, [searchTerm, statusFilter]);


    return (
        <div>
            <div className="pb-6 flex justify-between">
                <h1 className="dashboard_heading">Requests Management</h1>
            </div>
            <div className="min-h-screen bg-white">
                <div className="p-6">
                    <TableFilters
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        statusFilter={statusFilter}
                        onStatusChange={setStatusFilter}
                    />

                    <RequestsTable data={filteredAndPaginatedData} />

                    <TablePagination
                        totalItems={totalFilteredItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Request;