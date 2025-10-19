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

// this is for request table data 
export const requestsData = [
    {
        id: 'R001',
        helpSeeker: { name: 'Jane Cooper', avatar: 'https://via.placeholder.com/32x32?text=JC' },
        userId: 'User101',
        number: '(702) 555-0122',
        location: '1901 Thorridge Cir....',
        status: 'Pending',
        helpers: [],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R002',
        helpSeeker: { name: 'Cody Fisher', avatar: 'https://via.placeholder.com/32x32?text=CF' },
        userId: 'User102',
        number: '(709) 555-0104',
        location: '3891 Ranchview Dr....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R003',
        helpSeeker: { name: 'Jerome Bell', avatar: 'https://via.placeholder.com/32x32?text=JB' },
        userId: 'User103',
        number: '(671) 555-0100',
        location: '2972 Westheimer R....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
            { id: 3, avatar: 'https://via.placeholder.com/24x24?text=H3' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R004',
        helpSeeker: { name: 'Jenny Wilson', avatar: 'https://via.placeholder.com/32x32?text=JW' },
        userId: 'User104',
        number: '(406) 555-0120',
        location: '2118 Thorridge Cir....',
        status: 'Pending',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R005',
        helpSeeker: { name: 'Darlene Robertson', avatar: 'https://via.placeholder.com/32x32?text=DR' },
        userId: 'User105',
        number: '(319) 555-0115',
        location: '2464 Royal Ln. Mes....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R006',
        helpSeeker: { name: 'Theresa Webb', avatar: 'https://via.placeholder.com/32x32?text=TW' },
        userId: 'User106',
        number: '(239) 555-0108',
        location: '2464 Royal Ln. Mes....',
        status: 'Completed',
        helpers: [],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R007',
        helpSeeker: { name: 'Kristin Watson', avatar: 'https://via.placeholder.com/32x32?text=KW' },
        userId: 'User107',
        number: '(201) 555-0124',
        location: '6391 Elgin St. Celin....',
        status: 'Cancelled',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R008',
        helpSeeker: { name: 'Ralph Edwards', avatar: 'https://via.placeholder.com/32x32?text=RE' },
        userId: 'User108',
        number: '(505) 555-0125',
        location: '3891 Ranchview Dr....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
            { id: 3, avatar: 'https://via.placeholder.com/24x24?text=H3' },
            { id: 4, avatar: 'https://via.placeholder.com/24x24?text=H4' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R009',
        helpSeeker: { name: 'Ronald Richards', avatar: 'https://via.placeholder.com/32x32?text=RR' },
        userId: 'User109',
        number: '(219) 555-0114',
        location: '3517 W. Gray St. Lit....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
            { id: 3, avatar: 'https://via.placeholder.com/24x24?text=H3' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R010',
        helpSeeker: { name: 'Dianne Russell', avatar: 'https://via.placeholder.com/32x32?text=DR' },
        userId: 'User110',
        number: '(252) 555-0126',
        location: '2715 Ash Dr. San Jo....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R011',
        helpSeeker: { name: 'Leslie Alexander', avatar: 'https://via.placeholder.com/32x32?text=LA' },
        userId: 'User111',
        number: '(629) 555-0129',
        location: '8502 Preston Rd. In....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R012',
        helpSeeker: { name: 'Robert Fox', avatar: 'https://via.placeholder.com/32x32?text=RF' },
        userId: 'User112',
        number: '(217) 555-0113',
        location: '4140 Parker Rd. All....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R013',
        helpSeeker: { name: 'Brooklyn Simmons', avatar: 'https://via.placeholder.com/32x32?text=BS' },
        userId: 'User113',
        number: '(704) 555-0127',
        location: '2464 Royal Ln. Mes....',
        status: 'Cancelled',
        helpers: [],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R014',
        helpSeeker: { name: 'Floyd Miles', avatar: 'https://via.placeholder.com/32x32?text=FM' },
        userId: 'User114',
        number: '(205) 555-0100',
        location: '4517 Washington A....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
    {
        id: 'R015',
        helpSeeker: { name: 'Bessie Cooper', avatar: 'https://via.placeholder.com/32x32?text=BC' },
        userId: 'User115',
        number: '(316) 555-0116',
        location: '8502 Preston Rd. In....',
        status: 'Completed',
        helpers: [
            { id: 1, avatar: 'https://via.placeholder.com/24x24?text=H1' },
            { id: 2, avatar: 'https://via.placeholder.com/24x24?text=H2' },
        ],
        timeCreated: '2025-09-15 14:30',
    },
];