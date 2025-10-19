import { FaBell } from 'react-icons/fa';

const NotificationControlsSettings = ({ isGlobalEnabled, setIsGlobalEnabled }) => {
    return (
        <div className="notification_controls flex justify-between items-center">
            {/* Left Side Icon and Text */}
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100 text-[#fde047] flex-shrink-0">
                    <FaBell size={18} />
                </div>
                <div>
                    <div className="text-gray-800 font-medium">Global Notifications</div>
                    <div className="text-sm text-gray-500">Enable/disable all notifications</div>
                </div>
            </div>
            {/* right side  */}
            <button
                onClick={() => setIsGlobalEnabled(!isGlobalEnabled)}
                className={`${isGlobalEnabled ? 'bg-yellow-500' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                aria-pressed={isGlobalEnabled}
            >
                <span
                    className={`${isGlobalEnabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
            </button>
        </div>
    );
};

export default NotificationControlsSettings;