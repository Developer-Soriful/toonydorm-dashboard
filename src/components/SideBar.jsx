import { NavLink } from "react-router"
import { menus_data } from "../constans"
import { images } from "../constans/images"

const SideBar = () => {

    return (
        <div className="h-screen bg-[#333C4A] flex flex-col justify-between py-4">
            {/* this is for side bar icon and menus */}
            <div className="flex flex-col gap-[32px]">
                {/* this is for side bar icons */}
                <div className="flex gap-3 items-center  px-6">
                    <div className="w-10 h-10 bg-black rounded-full p-2">
                        <img src={images.sidebar_icon} alt="" />
                    </div>
                    <p className="side_icon_text text-[15.3px] whitespace-nowrap">Safe Rader Admin</p>
                </div>
                {/* this is for menus */}
                <div className="flex flex-col  gap-3">
                    {
                        menus_data.map(data => {
                            return (
                                <NavLink
                                    to={data.path}
                                    key={data.id}
                                    className={({ isActive }) =>
                                        `flex gap-3 items-center py-3 px-6 hover:bg-[#474f5c] hover:border-l-[3px] hover:border-white transition-all ${isActive
                                            ? "bg-[#474f5c] border-l-[3px] border-white"
                                            : ""
                                        }`
                                    }
                                >
                                    <div>
                                        <img src={data.icon} alt={data.Title} />
                                    </div>
                                    <span className="side_icon_text w-full h-full">
                                        {data.Title}
                                    </span>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            {/* this is for logout icon */}
            <div className="flex items-center gap-3 cursor-pointer py-3 hover:bg-[#474f5c] px-6 hover:border-l-[3px] hover:border-white">
                <button>
                    <img src={images.logout2} alt="" />
                </button>
                <p className="side_icon_text">Logout</p>
            </div>
        </div>
    )
}

export default SideBar