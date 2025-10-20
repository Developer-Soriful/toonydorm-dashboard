// src/components/AdminProfilePage.jsx (or wherever you want to put it)

import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router';

// Reusable Input Field Component
const PasswordInputField = ({ label, placeholder, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full pl-10 pr-4 py-2 border text-[#333] border-[#E0E0E0] rounded-[6px] focus:outline-none"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* Lock Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                >
                    {/* Eye Icon */}
                    {showPassword ? (
                        <FaEyeSlash />

                    ) : (
                        <IoEyeSharp />
                    )}
                </button>
            </div>
        </div>
    );
};

const AdminProfilePage = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handlePasswordChange = (e) => {
        e.preventDefault();
        // Here you would typically send these passwords to your backend
        console.log('Password Change Request:', {
            currentPassword,
            newPassword,
            confirmNewPassword,
        });
        alert('Password change initiated (check console for values)');
        // Reset form or show success message
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };

    return (
        <div className=" bg-gray-100 ">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="font-bold text-[20px] text-[#1F2937]">Admin Profile</h1>
                <Link to={'/login'} className="user_logout">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                        <path d="M12.0625 12.75L15.8125 9L12.0625 5.25" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.8125 9H6.8125" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.8125 15.75H3.8125C3.41468 15.75 3.03314 15.592 2.75184 15.3107C2.47054 15.0294 2.3125 14.6478 2.3125 14.25V3.75C2.3125 3.35218 2.47054 2.97064 2.75184 2.68934C3.03314 2.40804 3.41468 2.25 3.8125 2.25H6.8125" stroke="#374151" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className='text-[13.6px] text-[#1F2937] font-medium'>Logout</span>
                </Link>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Profile Card */}
                <div className="min-w-[356px] layout_box_shadow p-6">
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-[128px] h-[128px] rounded-full overflow-hidden bg-gray-200 flex items-center justify-center mb-4">
                            {/* Replace with actual image in production */}
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="Admin Avatar" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-[17px] font-bold text-[#333]">Admin User</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <span className='user_profile_icons'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.3841 12.5 12.5 12.5H7.5C6.61594 12.5 5.7681 12.8512 5.14297 13.4763C4.51785 14.1014 4.16666 14.9493 4.16666 15.8333V17.5" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 10 2.5C8.15905 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15905 9.16667 10 9.16667Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-[#333C4A] text-[11.9px]">Admin ID</p>
                                <p className="text-[13.6px] text-[#333]">A001</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className='user_profile_icons'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.3333 5.8335L10.8408 10.606C10.5866 10.7537 10.2978 10.8315 10.0037 10.8315C9.70972 10.8315 9.42092 10.7537 9.16666 10.606L1.66666 5.8335" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16.6667 3.3335H3.33333C2.41286 3.3335 1.66666 4.07969 1.66666 5.00016V15.0002C1.66666 15.9206 2.41286 16.6668 3.33333 16.6668H16.6667C17.5871 16.6668 18.3333 15.9206 18.3333 15.0002V5.00016C18.3333 4.07969 17.5871 3.3335 16.6667 3.3335Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-[#333C4A] text-[11.9px]">Email</p>
                                <p className="text-[13.6px] text-[#333]">admin@emergency-assistance.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className='user_profile_icons' >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_348_8761)">
                                        <path d="M11.5267 13.8065C11.6988 13.8855 11.8927 13.9036 12.0764 13.8577C12.2601 13.8118 12.4228 13.7047 12.5375 13.554L12.8333 13.1665C12.9886 12.9595 13.1899 12.7915 13.4213 12.6758C13.6527 12.5601 13.9079 12.4998 14.1667 12.4998H16.6667C17.1087 12.4998 17.5326 12.6754 17.8452 12.988C18.1577 13.3006 18.3333 13.7245 18.3333 14.1665V16.6665C18.3333 17.1085 18.1577 17.5325 17.8452 17.845C17.5326 18.1576 17.1087 18.3332 16.6667 18.3332C12.6884 18.3332 8.87311 16.7528 6.06006 13.9398C3.24702 11.1267 1.66666 7.31142 1.66666 3.33317C1.66666 2.89114 1.84226 2.46722 2.15482 2.15466C2.46738 1.8421 2.8913 1.6665 3.33333 1.6665H5.83333C6.27536 1.6665 6.69928 1.8421 7.01184 2.15466C7.3244 2.46722 7.5 2.89114 7.5 3.33317V5.83317C7.5 6.09191 7.43976 6.3471 7.32404 6.57853C7.20833 6.80995 7.04032 7.01126 6.83333 7.1665L6.44333 7.459C6.29034 7.57582 6.18251 7.74199 6.13816 7.9293C6.0938 8.1166 6.11565 8.31348 6.2 8.4865C7.3389 10.7997 9.21202 12.6705 11.5267 13.8065Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_348_8761">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <div>
                                <p className="text-[#333C4A] text-[11.9px]">Phone</p>
                                <p className="text-[13.6px] text-[#333]">+1 (555) 987-6543</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className='user_profile_icons'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M16.6667 10.8335C16.6667 15.0002 13.75 17.0835 10.2833 18.2919C10.1018 18.3534 9.90462 18.3505 9.725 18.2835C6.25 17.0835 3.33334 15.0002 3.33334 10.8335V5.00021C3.33334 4.7792 3.42113 4.56724 3.57741 4.41096C3.73369 4.25468 3.94566 4.16688 4.16667 4.16688C5.83334 4.16688 7.91667 3.16688 9.36667 1.90021C9.54321 1.74938 9.7678 1.6665 10 1.6665C10.2322 1.6665 10.4568 1.74938 10.6333 1.90021C12.0917 3.17521 14.1667 4.16688 15.8333 4.16688C16.0543 4.16688 16.2663 4.25468 16.4226 4.41096C16.5789 4.56724 16.6667 4.7792 16.6667 5.00021V10.8335Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <div>
                                <p className="text-[#333C4A] text-[11.9px]">Last Login</p>
                                <p className="text-[13.6px] text-[#333]">2023-09-15 08:30</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Change Password Card */}
                <div className="w-full  layout_box_shadow p-6 flex flex-col">
                    <h2 className="text-[17px] font-medium text-[#333] mb-6">Change Password</h2>
                    <form onSubmit={handlePasswordChange} className='flex flex-col justify-between'>
                        <PasswordInputField
                            label={
                                <p className='text-[11.9px] text-[#333]'>
                                    Current Password
                                </p>
                            }
                            placeholder="Enter current password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <PasswordInputField
                            label={
                                <p className='text-[11.9px] text-[#333]'>
                                    Enter New Password
                                </p>
                            }
                            placeholder='Enter New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <PasswordInputField
                            label={
                                <p className='text-[11.9px] text-[#333]'>
                                    Confirm new Password
                                </p>
                            }
                            placeholder="Confirm new password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#FFD100] hover:bg-yellow-600 text-[#333C4A] font-medium text-[13.6px] py-2 px-4 rounded-md mt-4"
                        >
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminProfilePage;
