import { images } from "./images";

// Menu data with paths added
export const menus_data = [
    { id: 1, path: '/', icon: images.dashboard_icon, Title: "Dashboard" },
    { id: 2, path: 'user', icon: images.menu_user, Title: "User" },
    { id: 3, path: 'request', icon: images.icon2, Title: "Request" },
    { id: 4, path: 'location-monitoring', icon: images.location, Title: "Location Monitoring" },
    { id: 5, path: 'notification', icon: images.notification2, Title: "Notification" },
    { id: 6, path: 'block-accounts', icon: images.blocked, Title: "Block Accounts" },
    { id: 7, path: 'account', icon: images.user2, Title: "Account" }
];

// this is for dashboard overview 

export const dashboard_overview = [
    {
        id: 1,
        title: "Total Users",
        value: 2543,
        change: "+12%",
        changeText: "from last period",
        changeType: "up",
        icon: images.user
    },
    {
        id: 2,
        title: "Active Providers",
        value: 128,
        change: "+5%",
        changeText: "from last period",
        changeType: "up",
        icon: images.protected_done
    },
    {
        id: 3,
        title: "Ongoing Requests",
        value: 37,
        change: "-12%",
        changeText: "from last period",
        changeType: "down",
        icon: images.icon
    },
    {
        id: 4,
        title: "Completed Requests",
        value: 1849,
        change: "+18%",
        changeText: "from last period",
        changeType: "up",
        icon: images.checked
    }
];

// this data for overview chart
export const chartData = [
    { name: 'Jan', requests: 65 },
    { name: 'Feb', requests: 58 },
    { name: 'Mar', requests: 88 },
    { name: 'Apr', requests: 80 },
    { name: 'May', requests: 55 },
    { name: 'Jun', requests: 55 },
    { name: 'Jul', requests: 40 },
];
// Data for the Donut Chart
export const responseRateData = [
    { name: 'Success', value: 85, color: '#FFC107' },
    { name: 'Failed', value: 15, color: '#343A40' },
];

// Updated request table data with helpers' name added
export const requestsData = [
    {
        id: 'User101',  // Changed to userId
        helpSeeker: { name: 'Jane Cooper', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
        number: '(702) 555-0122',
        location: '1901 Thorridge Cir....',
        status: 'Pending',
        helpers: [],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User102',  // Changed to userId
        helpSeeker: { name: 'Cody Fisher', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
        number: '(709) 555-0104',
        location: '3891 Ranchview Dr....',
        status: 'Completed',
        helpers: [
            { userId: 'User103', name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },  // Added name
            { userId: 'User104', name: 'Mike Smith', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User103',  // Changed to userId
        helpSeeker: { name: 'Jerome Bell', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
        number: '(671) 555-0100',
        location: '2972 Westheimer R....',
        status: 'Completed',
        helpers: [
            { userId: 'User105', name: 'James Lee', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },  // Added name
            { userId: 'User106', name: 'Robert Brown', avatar: 'https://randomuser.me/api/portraits/men/7.jpg' },  // Added name
            { userId: 'User107', name: 'David Clark', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User104',  // Changed to userId
        helpSeeker: { name: 'Jenny Wilson', avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },
        number: '(406) 555-0120',
        location: '2118 Thorridge Cir....',
        status: 'Pending',
        helpers: [
            { userId: 'User108', name: 'Chris Johnson', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },  // Added name
            { userId: 'User109', name: 'Mark Adams', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User105',  // Changed to userId
        helpSeeker: { name: 'Darlene Robertson', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' },
        number: '(319) 555-0115',
        location: '2464 Royal Ln. Mes....',
        status: 'Completed',
        helpers: [
            { userId: 'User110', name: 'George Harris', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },  // Added name
            { userId: 'User111', name: 'Daniel Walker', avatar: 'https://randomuser.me/api/portraits/men/14.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User106',  // Changed to userId
        helpSeeker: { name: 'Theresa Webb', avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
        number: '(239) 555-0108',
        location: '2464 Royal Ln. Mes....',
        status: 'Completed',
        helpers: [],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User107',  // Changed to userId
        helpSeeker: { name: 'Kristin Watson', avatar: 'https://randomuser.me/api/portraits/women/16.jpg' },
        number: '(201) 555-0124',
        location: '6391 Elgin St. Celin....',
        status: 'Cancelled',
        helpers: [
            { userId: 'User112', name: 'Tom Lee', avatar: 'https://randomuser.me/api/portraits/men/17.jpg' },  // Added name
            { userId: 'User113', name: 'Steve Walker', avatar: 'https://randomuser.me/api/portraits/men/18.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User108',  // Changed to userId
        helpSeeker: { name: 'Ralph Edwards', avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
        number: '(505) 555-0125',
        location: '3891 Ranchview Dr....',
        status: 'Completed',
        helpers: [
            { userId: 'User114', name: 'Will Smith', avatar: 'https://randomuser.me/api/portraits/men/20.jpg' },  // Added name
            { userId: 'User115', name: 'Chris Rock', avatar: 'https://randomuser.me/api/portraits/men/21.jpg' },  // Added name
            { userId: 'User116', name: 'Kevin Hart', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },  // Added name
            { userId: 'User117', name: 'Jack Black', avatar: 'https://randomuser.me/api/portraits/men/23.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User109',  // Changed to userId
        helpSeeker: { name: 'Ronald Richards', avatar: 'https://randomuser.me/api/portraits/men/24.jpg' },
        number: '(219) 555-0114',
        location: '3517 W. Gray St. Lit....',
        status: 'Completed',
        helpers: [
            { userId: 'User118', name: 'John Smith', avatar: 'https://randomuser.me/api/portraits/men/25.jpg' },  // Added name
            { userId: 'User119', name: 'James Brown', avatar: 'https://randomuser.me/api/portraits/men/26.jpg' },  // Added name
            { userId: 'User120', name: 'Mike Tyson', avatar: 'https://randomuser.me/api/portraits/men/27.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User110',  // Changed to userId
        helpSeeker: { name: 'Dianne Russell', avatar: 'https://randomuser.me/api/portraits/women/28.jpg' },
        number: '(252) 555-0126',
        location: '2715 Ash Dr. San Jo....',
        status: 'Completed',
        helpers: [
            { userId: 'User121', name: 'Emma White', avatar: 'https://randomuser.me/api/portraits/men/29.jpg' },  // Added name
            { userId: 'User122', name: 'Oliver Green', avatar: 'https://randomuser.me/api/portraits/men/30.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User111',  // Changed to userId
        helpSeeker: { name: 'Leslie Alexander', avatar: 'https://randomuser.me/api/portraits/women/31.jpg' },
        number: '(629) 555-0129',
        location: '8502 Preston Rd. In....',
        status: 'Completed',
        helpers: [
            { userId: 'User123', name: 'Liam Johnson', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },  // Added name
            { userId: 'User124', name: 'Ethan Davis', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User112',  // Changed to userId
        helpSeeker: { name: 'Robert Fox', avatar: 'https://randomuser.me/api/portraits/men/34.jpg' },
        number: '(217) 555-0113',
        location: '4140 Parker Rd. All....',
        status: 'Completed',
        helpers: [
            { userId: 'User125', name: 'Lucas Harris', avatar: 'https://randomuser.me/api/portraits/men/35.jpg' },  // Added name
            { userId: 'User126', name: 'Noah Allen', avatar: 'https://randomuser.me/api/portraits/men/36.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User113',  // Changed to userId
        helpSeeker: { name: 'Brooklyn Simmons', avatar: 'https://randomuser.me/api/portraits/women/37.jpg' },
        number: '(704) 555-0127',
        location: '2464 Royal Ln. Mes....',
        status: 'Cancelled',
        helpers: [],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User114',  // Changed to userId
        helpSeeker: { name: 'Floyd Miles', avatar: 'https://randomuser.me/api/portraits/men/38.jpg' },
        number: '(205) 555-0100',
        location: '4517 Washington A....',
        status: 'Completed',
        helpers: [
            { userId: 'User127', name: 'Samuel Thomas', avatar: 'https://randomuser.me/api/portraits/men/39.jpg' },  // Added name
            { userId: 'User128', name: 'David Moore', avatar: 'https://randomuser.me/api/portraits/men/40.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'User115',  // Changed to userId
        helpSeeker: { name: 'Bessie Cooper', avatar: 'https://randomuser.me/api/portraits/women/41.jpg' },
        number: '(316) 555-0116',
        location: '8502 Preston Rd. In....',
        status: 'Completed',
        helpers: [
            { userId: 'User129', name: 'Zoe Martin', avatar: 'https://randomuser.me/api/portraits/men/42.jpg' },  // Added name
            { userId: 'User130', name: 'Grace Lee', avatar: 'https://randomuser.me/api/portraits/men/43.jpg' },  // Added name
        ],
        timeCreated: '2025-09-15 14:30',
    },
];
