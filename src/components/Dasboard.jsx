import { IoIosArrowRoundUp } from "react-icons/io"
import { dashboard_overview } from "../constans"
import { FaArrowDownLong } from "react-icons/fa6"
import RequestsOverTimeChart from "./dashboard/RequestsOverTimeChart"
import ResponseRateChart from "./dashboard/ResponseRateChart"
import RecentActivityFeed from "./dashboard/RecentActivityFeed"

const Dasboard = () => {
    return (
        <div>
            <div className="pb-6 flex justify-between">
                <h1 className="dashboard_heading">Dashboard Overview</h1>
                <div className="flex justify-center items-center p-3">
                    <select className="time_selected p-3" name="" id="">
                        <option value="all">All</option>
                        <option value="1months">1 months</option>
                        <option value="6months">6 months</option>
                        <option value="1year">1 year</option>
                    </select>
                </div>
            </div>
            {/* dashboard overview details */}
            <div className="flex justify-between gap-6 ">
                {
                    dashboard_overview.map(data => {
                        return <div key={data.id} className=" flex justify-between items-start bg-[#fff] w-full p-6 dashboard_overview_layout">
                            <div className="flex flex-col gap-[9px]">
                                <h2 className="dashboard_overview_first_text">{data.title}</h2>
                                <p className="dashboard_oveview_number">{data.value}</p>
                                <div className="dashboard_overview_last_text flex items-center">
                                    {data.changeType === "up" ? (
                                        <IoIosArrowRoundUp className="text-green-500 text-lg" />
                                    ) : (
                                        <FaArrowDownLong size={11} className="text-red-500 text-lg" />
                                    )}
                                    <span>{data.change}</span>
                                    <span>{data.changeText}</span>
                                </div>
                            </div>
                            {/* ✅ Use the correct icon from data */}
                            <div className="bg-[#FFD100] rounded-full p-3 flex items-center justify-center">
                                <img src={data.icon} alt={data.title} className="w-6 h-6 object-contain" />
                            </div>
                        </div>
                    })
                }
            </div>
            {/* this container for dashboard overview chart */}
            <div className="flex gap-6 my-6">
                {/* this is for request over time  */}
                <div className="w-full flex-3">
                    <RequestsOverTimeChart></RequestsOverTimeChart>
                </div>
                {/* this is for response rate success */}
                <div className="w-full h-full flex-[1.2]">
                    <ResponseRateChart></ResponseRateChart>
                </div>
            </div>
            {/* this container for recent activity */}
            <div>
                <RecentActivityFeed></RecentActivityFeed>
            </div>
        </div>
    )
}

export default Dasboard
