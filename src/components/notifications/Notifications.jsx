import { useState, useEffect, useCallback } from 'react';
import { FaUserCircle, FaCheck } from 'react-icons/fa';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import NotificationControlsSettings from './NotificationControlsSettings';

// --- Configuration ---
const ITEMS_PER_PAGE = 6;
const NOTIFICATION_TYPES = ['New Request', 'Helper Joined', 'New User Registered', 'Request Completed'];

// --- DUMMY API CALL (Mimics a production API endpoint) ---
const fetchNotifications = async (page, statusFilter) => {
    // 1. Simulate Network Latency
    await new Promise(resolve => setTimeout(resolve, 300));

    // 2. Generate a large, consistent dataset (200 items total)
    const FULL_DATASET = Array.from({ length: 200 }, (_, i) => {
        const type = NOTIFICATION_TYPES[i % NOTIFICATION_TYPES.length];
        // Simulate 'New' status for the first few items
        const isNew = i < 6;

        return {
            id: `notif-${1000 + i}`,
            type,
            description: `${type} for user ID: ${1000 + i}`,
            time: `2025-10-19 ${12 + i % 12}:30:${10 + i % 50}`,
            status: isNew ? 'Unread' : 'Read',
            isNew: isNew,
            // showMarkAsRead is true ONLY for the very first notification (index 0) 💥
            showMarkAsRead: i === 0,
        };
    });

    // 3. Apply Filtering
    const filteredData = FULL_DATASET.filter(n =>
        statusFilter === 'All' || n.status === statusFilter
    );

    // 4. Calculate Pagination
    const totalCount = filteredData.length;
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    let paginatedData = filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Check if the current page starts with the notification that should have the Mark as Read button
    if (page === 1 && paginatedData.length > 0) {
        paginatedData = paginatedData.map((item, index) => ({
            ...item,
            showMarkAsRead: index === 0, // Only the first item on this page has it visible
        }));
    } else {
        // Ensure no other page shows the 'Mark as Read' button
        paginatedData = paginatedData.map(item => ({
            ...item,
            showMarkAsRead: false,
        }));
    }


    // 5. Return the structured API response
    return {
        notifications: paginatedData,
        totalCount,
        totalPages,
    };
};



const NotificationItem = ({ type, description, time, id, isNew, showMarkAsRead }) => {
    let IconComponent;

    switch (type) {
        case 'New Request':
            IconComponent = <div className='bg-[#DBEAFE] p-[10px] rounded-full'> <HiOutlineExclamationCircle size={20} color='#2563EB'><FaUserCircle size={16} /></HiOutlineExclamationCircle></div>;
            break;
        case 'New User Registered':
            IconComponent = <div className='bg-[#F3F4F6] p-[10px] rounded-full'> <HiOutlineExclamationCircle size={20} color='#4B5563'><FaUserCircle size={16} /></HiOutlineExclamationCircle></div>;
            break;
        case 'Helper Joined':
            IconComponent = <div className='bg-[#DCFCE7] p-[10px] rounded-full'> <HiOutlineExclamationCircle size={20} color='#16A34A'><FaUserCircle size={16} /></HiOutlineExclamationCircle></div>;
            break;
        case 'Request Completed':
            IconComponent = <div className='bg-[#F3E8FF] p-[10px] rounded-full'> <HiOutlineExclamationCircle size={20} color='#9333EA'><FaUserCircle size={16} /></HiOutlineExclamationCircle></div>;
            break;
        default:
            IconComponent = <div className='bg-[#DCFCE7] p-[10px] rounded-full'> <HiOutlineExclamationCircle size={20} colorClass="bg-blue-500"><FaUserCircle size={16} /></HiOutlineExclamationCircle></div>;
    }

    // Only apply yellow highlight if it's 'New' and it's the item that has the 'Mark as Read' action visible
    const cardStyle = isNew && showMarkAsRead ? 'read_mark' : 'notification_table_data';

    return (
        <div className={` flex justify-between items-center ${cardStyle}`}>
            <div className='flex justify-center items-start gap-3'>
                {IconComponent}
                <div className="flex flex-col gap-[9px] ">
                    <div className="flex items-center gap-2">
                        <p className='text-sm text-[#333] font-medium'>{type}</p>
                        {isNew && (
                            <span className="new_notification">New</span>
                        )}
                    </div>
                    <p className="text-[#333] text-[12px]">{description}</p>
                    <div className="text-[#6B7280] text-[10px]">
                        {time} • ID: {id}
                    </div>
                </div>
            </div>
            {showMarkAsRead && (
                <button className="flex items-center justify-center text-blue-500 text-xs font-medium ml-4 mt-1 hover:text-blue-700 transition duration-150">
                    <FaCheck size={10} className="mr-1" /> Mark as Read
                </button>
            )}
        </div>
    );
};


const Notifications = () => { // Changed component name to NotificationPage
    // --- STATE MANAGEMENT ---
    const [activeTab, setActiveTab] = useState('Notifications');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    // this is for global enabled button state
    const [isGlobalEnabled, setIsGlobalEnabled] = useState(true);
    // API DATA State
    const [notifications, setNotifications] = useState([]);
    const [totalNotifications, setTotalNotifications] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const statusOptions = [
        { value: 'All', label: 'All' },
        { value: 'Read', label: 'Read' },
        { value: 'Unread', label: 'Unread' },
    ];

    // --- API INTEGRATION FUNCTION ---
    const loadNotifications = useCallback(async () => {
        setIsLoading(true);
        try {
            // 💥 API CALL INTEGRATION POINT 💥
            const response = await fetchNotifications(currentPage, selectedStatus);

            setNotifications(response.notifications);
            setTotalNotifications(response.totalCount);
            setTotalPages(response.totalPages);

        } catch (error) {
            console.error("Failed to fetch notifications:", error);
            setNotifications([]);
            setTotalNotifications(0);
            setTotalPages(1);
        } finally {
            setIsLoading(false);
        }
    }, [currentPage, selectedStatus]);

    // --- EFFECT HOOK: Triggers data fetch ---
    useEffect(() => {
        loadNotifications();
    }, [loadNotifications]);

    // --- HANDLERS ---
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        setCurrentPage(1);
    };

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
        setCurrentPage(1);
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const getTabClass = (tabName) => {
        return activeTab === tabName
            ? 'active_tab cursor-pointer'
            : 'none_active_tab cursor-pointer';
    };


    return (
        <div className="min-h-screen layout_box_shadow p-6">
            <div className="">

                {/* --- HEADER BAR (Tabs and Status Dropdown) --- */}
                <div className="flex justify-between items-center border-b border-gray-200 pb-[3px]">
                    <div className="flex text-[12px]">

                        {/* Notifications Tab */}
                        <div
                            className={getTabClass('Notifications')}
                            onClick={() => handleTabChange('Notifications')}
                        >
                            Notifications
                        </div>

                        {/* Notification Controls Tab */}
                        <div
                            className={getTabClass('Notification Controls')}
                            onClick={() => handleTabChange('Notification Controls')}
                        >
                            Notification Controls
                        </div>
                    </div>

                    {/* Status Dropdown */}
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <span className='text-[#333] text-[12px]'>Status:</span>
                        <div className="relative">
                            <select
                                value={selectedStatus}
                                onChange={(e) => handleStatusChange(e.target.value)}
                                className="appearance-none time_selected p-[13px] text-[16px] text-[#333]"
                            >
                                {statusOptions.map(option => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                    <mask id="path-1-inside-1_909_2241" fill="white">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0202 6.47945C11.2155 6.67471 11.2155 6.9913 11.0202 7.18654L8.35357 9.85321C8.15831 10.0485 7.84177 10.0485 7.64651 9.85321L4.97982 7.18654C4.78456 6.9913 4.78456 6.67471 4.97982 6.47945C5.17508 6.28419 5.49167 6.28419 5.68693 6.47945L8.00004 8.79254L10.3132 6.47945C10.5084 6.28419 10.825 6.28419 11.0202 6.47945Z" />
                                    </mask>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0202 6.47945C11.2155 6.67471 11.2155 6.9913 11.0202 7.18654L8.35357 9.85321C8.15831 10.0485 7.84177 10.0485 7.64651 9.85321L4.97982 7.18654C4.78456 6.9913 4.78456 6.67471 4.97982 6.47945C5.17508 6.28419 5.49167 6.28419 5.68693 6.47945L8.00004 8.79254L10.3132 6.47945C10.5084 6.28419 10.825 6.28419 11.0202 6.47945Z" fill="black" />
                                    <path d="M11.0202 7.18654L10.3132 6.47938L10.3131 6.47943L11.0202 7.18654ZM8.35357 9.85321L7.64647 9.1461V9.1461L8.35357 9.85321ZM7.64651 9.85321L8.35361 9.1461L8.35361 9.1461L7.64651 9.85321ZM4.97982 7.18654L5.68692 6.47943L5.68689 6.4794L4.97982 7.18654ZM5.68693 6.47945L4.97982 7.18656L4.97982 7.18656L5.68693 6.47945ZM8.00004 8.79254L7.29294 9.49965L8.00004 10.2067L8.70714 9.49965L8.00004 8.79254ZM10.3132 6.47945L9.60608 5.77233L9.60607 5.77234L10.3132 6.47945ZM11.0202 6.47945L10.3131 7.18657C10.1179 6.99132 10.1178 6.6747 10.3132 6.47938L11.0202 7.18654L11.7273 7.89369C12.3132 7.3079 12.3131 6.3581 11.7273 5.77233L11.0202 6.47945ZM11.0202 7.18654L10.3131 6.47943L7.64647 9.1461L8.35357 9.85321L9.06068 10.5603L11.7273 7.89365L11.0202 7.18654ZM8.35357 9.85321L7.64647 9.1461C7.84172 8.95084 8.15835 8.95084 8.35361 9.1461L7.64651 9.85321L6.9394 10.5603C7.52519 11.1461 8.47489 11.1461 9.06068 10.5603L8.35357 9.85321ZM7.64651 9.85321L8.35361 9.1461L5.68692 6.47943L4.97982 7.18654L4.27271 7.89365L6.9394 10.5603L7.64651 9.85321ZM4.97982 7.18654L5.68689 6.4794C5.88222 6.67471 5.88217 6.99132 5.68693 7.18656L4.97982 6.47945L4.27271 5.77235C3.68695 6.35811 3.6869 7.30789 4.27275 7.89368L4.97982 7.18654ZM4.97982 6.47945L5.68693 7.18656C5.49166 7.38182 5.17508 7.38182 4.97982 7.18656L5.68693 6.47945L6.39403 5.77235C5.80825 5.18656 4.8585 5.18656 4.27271 5.77235L4.97982 6.47945ZM5.68693 6.47945L4.97982 7.18656L7.29294 9.49965L8.00004 8.79254L8.70714 8.08543L6.39403 5.77234L5.68693 6.47945ZM8.00004 8.79254L8.70714 9.49965L11.0203 7.18657L10.3132 6.47945L9.60607 5.77234L7.29294 8.08542L8.00004 8.79254ZM10.3132 6.47945L11.0203 7.18657C10.825 7.38182 10.5084 7.38182 10.3131 7.18657L11.0202 6.47945L11.7273 5.77233C11.1415 5.18657 10.1919 5.18657 9.60608 5.77233L10.3132 6.47945Z" fill="#333333" mask="url(#path-1-inside-1_909_2241)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- CONTENT AREA --- */}
                <div className="mt-6 flex flex-col gap-6">
                    {activeTab === 'Notifications' && (
                        <>
                            {isLoading ? (
                                <div className="p-8 text-center text-gray-500">Loading notifications...</div>
                            ) : (
                                <>
                                    {/* --- NOTIFICATION FEED --- */}
                                    {notifications.map((notif) => (
                                        <NotificationItem
                                            key={notif.id}
                                            {...notif}
                                        />
                                    ))}

                                    {/* --- PAGINATION BAR --- */}
                                    <div className="mt-8 flex justify-between items-center text-sm">

                                        <div className="text-gray-600">
                                            Showing <span className="font-semibold">{notifications.length}</span> of <span className="font-semibold">{totalNotifications}</span> Notifications
                                        </div>

                                        <div className="flex space-x-2">
                                            {/* Previous Button */}
                                            <button
                                                onClick={goToPreviousPage}
                                                disabled={currentPage === 1}
                                                className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
                                            >
                                                Previous
                                            </button>

                                            {/* Current Page Button */}
                                            <button className="px-3 py-1 border border-yellow-600 rounded-md text-white bg-yellow-600 font-semibold">
                                                {currentPage}
                                            </button>

                                            {/* Next Button */}
                                            <button
                                                onClick={goToNextPage}
                                                disabled={currentPage >= totalPages}
                                                className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    {activeTab === 'Notification Controls' && (
                        <div className='flex flex-col gap-6'>
                            <NotificationControlsSettings
                                isGlobalEnabled={isGlobalEnabled}
                                setIsGlobalEnabled={setIsGlobalEnabled}
                            />
                            <div className='flex justify-end'>
                                <button className='save_settings flex justify-center items-center   '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                        <path d="M11.6656 2.25C12.0613 2.25564 12.4387 2.41738 12.7156 2.7L15.5656 5.55C15.8482 5.82695 16.01 6.20435 16.0156 6.6V14.25C16.0156 14.6478 15.8576 15.0294 15.5763 15.3107C15.295 15.592 14.9134 15.75 14.5156 15.75H4.01562C3.6178 15.75 3.23627 15.592 2.95496 15.3107C2.67366 15.0294 2.51563 14.6478 2.51562 14.25V3.75C2.51562 3.35218 2.67366 2.97064 2.95496 2.68934C3.23627 2.40804 3.6178 2.25 4.01562 2.25H11.6656Z" stroke="#333C4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.0156 15.75V10.5C13.0156 10.3011 12.9366 10.1103 12.796 9.96967C12.6553 9.82902 12.4645 9.75 12.2656 9.75H6.26562C6.06671 9.75 5.87595 9.82902 5.7353 9.96967C5.59464 10.1103 5.51562 10.3011 5.51562 10.5V15.75" stroke="#333C4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5.51562 2.25V5.25C5.51562 5.44891 5.59464 5.63968 5.7353 5.78033C5.87595 5.92098 6.06671 6 6.26562 6H11.5156" stroke="#333C4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className='text-sm text-[#333C4A]'>Save Settings</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;