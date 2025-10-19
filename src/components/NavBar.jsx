import { LuSearch } from "react-icons/lu"
import { images } from "../constans/images"

const NavBar = () => {
    return (
        <div className="header_layout flex justify-between items-center">
            {/* this is header left */}
            <p className="text-[17px] text-[#333C4A]">Welcome to Safe Rader</p>
            {/* this is header right bar*/}
            <div className="flex justify-center items-center gap-4">
                {/* this is search bar */}
                <div className="relative ">
                    <LuSearch className="absolute top-[13px] left-4" />
                    <input className="focus:outline-none header_search_bar" type="text" placeholder="Search..." />
                </div>
                {/* this is for notification */}
                <div className="flex justify-center items-center  gap-4 pr-4">
                    <div className="cursor-pointer h-[42px] w-[42px] flex justify-center items-center relative">
                        {/* this is notification aleart */}
                        <span className="notification_aleart absolute top-0 right-0"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M9.41602 17.5C9.5623 17.7533 9.7727 17.9637 10.0261 18.11C10.2794 18.2563 10.5668 18.3333 10.8593 18.3333C11.1519 18.3333 11.4393 18.2563 11.6926 18.11C11.946 17.9637 12.1564 17.7533 12.3027 17.5" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.57771 12.772C3.46885 12.8913 3.397 13.0397 3.37092 13.1991C3.34484 13.3585 3.36564 13.522 3.4308 13.6698C3.49595 13.8176 3.60266 13.9433 3.73792 14.0316C3.87319 14.1198 4.03119 14.1669 4.19271 14.167H17.526C17.6875 14.167 17.8456 14.1202 17.9809 14.0321C18.1163 13.944 18.2231 13.8184 18.2884 13.6708C18.3538 13.5231 18.3748 13.3596 18.3489 13.2001C18.323 13.0407 18.2514 12.8923 18.1427 12.7728C17.0344 11.6303 15.8594 10.4162 15.8594 6.66699C15.8594 5.34091 15.3326 4.06914 14.3949 3.13146C13.4572 2.19378 12.1855 1.66699 10.8594 1.66699C9.53329 1.66699 8.26152 2.19378 7.32384 3.13146C6.38616 4.06914 5.85938 5.34091 5.85938 6.66699C5.85938 10.4162 4.68354 11.6303 3.57771 12.772Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="bg-[#FFD100] p-[7px] rounded-full  cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                <path d="M15.1094 15.75V14.25C15.1094 13.4544 14.7933 12.6913 14.2307 12.1287C13.6681 11.5661 12.905 11.25 12.1094 11.25H7.60938C6.81373 11.25 6.05066 11.5661 5.48805 12.1287C4.92545 12.6913 4.60938 13.4544 4.60938 14.25V15.75" stroke="#333C4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.85938 8.25C11.5162 8.25 12.8594 6.90685 12.8594 5.25C12.8594 3.59315 11.5162 2.25 9.85938 2.25C8.20252 2.25 6.85938 3.59315 6.85938 5.25C6.85938 6.90685 8.20252 8.25 9.85938 8.25Z" stroke="#333C4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p>Admin User</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
