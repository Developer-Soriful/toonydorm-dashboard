import Dropdown from '../ui/Dropdown';
import Card from '../ui/Card';
import SummaryCardItem from '../ui/SummaryCardItem';
import LocationListItem from '../ui/LocationListItem';
import LocationMap from '../ui/LocationMap';
import { LuUsers } from 'react-icons/lu';
import { BiQuestionMark } from 'react-icons/bi';
import { GoShieldCheck } from 'react-icons/go';
import { FaHandshake } from 'react-icons/fa6';

const Location_Monitoring = () => {
    const summaryData = [
        { Icon: LuUsers, text: 'Online Users', value: 6, iconBgColor: 'bg-[#fcecec]', iconColor: 'text-[#D93A3A]' },
        { Icon: BiQuestionMark, text: 'Help Seeker', value: 2, iconBgColor: 'bg-[#fff9da]', iconColor: 'text-[#CA8B06]' },
        { Icon: GoShieldCheck, text: 'Help giver', value: 2, iconBgColor: 'bg-[#DBEAFE]', iconColor: 'text-[#2563EB]' },
        { Icon: FaHandshake, text: 'Both', value: 2, iconBgColor: 'bg-[#e6f5f1]', iconColor: 'text-[#0DB17B]' },
    ];

    const recentLocations = [
        { Icon: LuUsers, name: 'John Doe', timeAgo: '2 mins ago', status: 'Active', iconBgColor: 'bg-[#FEF9C3]', iconColor: 'text-[#CA8A04]' },
        { Icon: GoShieldCheck, name: 'Jane Doe', timeAgo: '5 mins ago', status: 'Active', iconBgColor: 'bg-[#DBEAFE]', iconColor: 'text-[#2563EB]' },
        { Icon: LuUsers, name: 'Alice', timeAgo: '10 mins ago', status: 'Active', iconBgColor: 'bg-[#FEF9C3]', iconColor: 'text-[#CA8A04]' },
        { Icon: GoShieldCheck, name: 'Bob', timeAgo: '15 mins ago', status: 'Active', iconBgColor: 'bg-[#DBEAFE]', iconColor: 'text-[#2563EB]' },
    ];

    const filterOptions = [{ value: 'All', label: 'All' }];

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[20px] font-bold text-[#1F2937]">Location Management</h1>
                <div className="flex space-x-4">
                    <Dropdown label="Role" options={filterOptions} selectedValue="All" />
                    <Dropdown label="Range" options={filterOptions} selectedValue="All" />
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Map Column */}
                <div className="md:col-span-2">
                    <Card className="p-0 h-full">
                        <LocationMap />
                    </Card>
                </div>

                {/* Summary & Recent Column */}
                <div className="flex flex-col gap-6">
                    <Card title="Summary">
                        {summaryData.map((item, index) => (
                            <SummaryCardItem key={index} {...item} />
                        ))}
                    </Card>

                    <Card title="Recent Locations">
                        <div className="flex flex-col gap-3">
                            {recentLocations.map((item, index) => (
                                <LocationListItem key={index} {...item} />
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Location_Monitoring;
