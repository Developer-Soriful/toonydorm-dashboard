import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { BsExclamationCircle } from 'react-icons/bs';

// --- Shared Components ---

const DashboardCard = ({ title, children }) => (
    <div className="recent_activity_card">
        <h2>{title}</h2>
        {children}
    </div>
);

const ActivityItem = ({ title, description, time }) => (
    <div className="flex items-center justify-between gap-4 border-b border-gray-100 last:border-b-0 p-3">
        {/* this is for activity left side content */}
        < div className='flex justify-center items-center gap-4'>
            <div className='recent_activity_list_icon p-[10px] rounded-full'>
                <BsExclamationCircle color='#CA8B06' size={28} />
            </div>
            <div className="flex-grow">
                <p className="text-[13.6px] text-[#333] font-medium">{title}</p>
                <p className="text-[11.9px] text-[#6B7280]">{description}</p>
                <p className="text-[10.2px] text-[#9CA3AF]">{time}</p>
            </div>
        </div >
        {/* this is for activity right side content  */}
        <div className='flex justify-center items-center gap-3'>
            <span className='cursor-pointer'>
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
        </div>
    </div>
);

// --- Mock API Fetch Function ---
// Replace this function's body with your actual fetch/axios call.

const mockFetchActivityData = (page, limit) => {
    const TOTAL_ITEMS = 200;
    const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / limit);

    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, TOTAL_ITEMS);

    const activitiesSlice = Array.from({ length: endIndex - startIndex }, (_, i) => ({
        id: `R${String(startIndex + i + 1).padStart(3, '0')}`,
        type: 'emergency',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-500">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.166 2.307-1.166 2.98 0l7.163 12.415c.673 1.166-.17 2.605-1.49 2.605H2.822c-1.32 0-2.163-1.44-1.49-2.605L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
        ),
        title: `Request update for R${String(startIndex + i + 1).padStart(3, '0')}`,
        description: `API mock data for page ${page}.`,
        time: `${(startIndex + i + 1) * 3} minutes ago`,
    }));

    return {
        currentPage: page,
        itemsPerPage: limit,
        totalItems: TOTAL_ITEMS,
        totalPages: TOTAL_PAGES,
        activities: activitiesSlice,
    };
};

// --- Main Component ---

const ITEMS_PER_PAGE = 5;

const RecentActivityFeed = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activityData, setActivityData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paginationMeta, setPaginationMeta] = useState({
        totalItems: 0,
        totalPages: 1,
        itemsPerPage: ITEMS_PER_PAGE
    });

    // 1. API Fetch Logic
    const fetchDataForPage = useCallback(async (page) => {
        setIsLoading(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 300));

        // --- INTEGRATION POINT: Replace mockFetch with your actual API call ---
        // const response = await fetch(`/api/dashboard/activities?page=${page}&limit=${ITEMS_PER_PAGE}`);
        // const data = await response.json();
        const data = mockFetchActivityData(page, ITEMS_PER_PAGE);
        // ---------------------------------------------------------------------

        setActivityData(data.activities);
        setPaginationMeta({
            totalItems: data.totalItems,
            totalPages: data.totalPages,
            itemsPerPage: data.itemsPerPage,
        });
        setCurrentPage(page);
        setIsLoading(false);
    }, []);

    // Initial Fetch on Mount
    useEffect(() => {
        fetchDataForPage(1);
    }, [fetchDataForPage]);

    // 2. Pagination Handlers
    const goToPreviousPage = () => fetchDataForPage(currentPage - 1);
    const goToNextPage = () => fetchDataForPage(currentPage + 1);
    const goToPage = (number) => fetchDataForPage(number);

    // 3. Dynamic Page Number Generation (shows a controlled range of page buttons)
    const getPageNumbers = useMemo(() => {
        const pagesToShow = 5;
        const current = currentPage;
        const total = paginationMeta.totalPages;
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
    }, [currentPage, paginationMeta.totalPages]);


    // --- Render ---

    return (
        <DashboardCard title={
            <p className='recent_activity_heading'>Recent Activity</p>
        }>
            {/* Activity List */}
            <div className="divide-y divide-gray-100 min-h-[300px]">
                {isLoading ? (
                    <div className="p-4 text-center text-gray-500">Loading activities...</div>
                ) : activityData.length > 0 ? (
                    activityData.map((activity) => (
                        <ActivityItem
                            key={activity.id}
                            icon={activity.icon}
                            title={activity.title}
                            description={activity.description}
                            time={activity.time}
                        />
                    ))
                ) : (
                    <div className="p-4 text-center text-gray-500">No activities found.</div>
                )}
            </div>

            {/* Pagination Footer */}
            {paginationMeta.totalItems > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-700">
                    {/* Status Text */}
                    <div className="pagination_left_content">
                        Showing <span className="font-semibold">{activityData.length}</span> (Page {currentPage}) of{' '}
                        <span className="font-semibold">{paginationMeta.totalItems}</span> requests
                    </div>

                    {/* Pagination Controls */}
                    <nav className="flex items-center space-x-2" aria-label="Pagination">
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
                                className={`px-4 py-2 rounded-[6px] font-medium transition 
                           ${currentPage === number
                                        ? 'bg-[#CA8B06] text-white shadow-md'
                                        : 'bg-white border border-[#CA8B06]'
                                    }`}
                            >
                                {number}
                            </button>
                        ))}

                        {/* Next Button */}
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === paginationMeta.totalPages || isLoading}
                            className={`px-4 py-2 rounded-lg border border-[#CA8B06] bg-white text-gray-700 hover:bg-gray-50 transition 
                         ${currentPage === paginationMeta.totalPages || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Next
                        </button>
                    </nav>
                </div>
            )}
        </DashboardCard>
    );
};

export default RecentActivityFeed;