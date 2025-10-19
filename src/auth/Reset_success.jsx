import { Link} from "react-router"

const Reset_success = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className='auth_layout flex flex-col  justify-center items-center'>
                {/* this is for login top section */}
                <div className="flex flex-col justify-center items-center px-[48px] gap-6">
                    {/* login form icon */}
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
                            <path d="M58.1363 27.1666C59.3541 33.1434 58.4862 39.3571 55.6772 44.7714C52.8682 50.1857 48.288 54.4734 42.7003 56.9195C37.1126 59.3655 30.8553 59.8221 24.9717 58.213C19.0882 56.6038 13.9341 53.0264 10.369 48.0771C6.80389 43.1278 5.04326 37.1059 5.3807 31.0157C5.71815 24.9254 8.13328 19.1349 12.2233 14.6098C16.3134 10.0846 21.8311 7.09845 27.8564 6.14918C33.8817 5.19991 40.0504 6.34493 45.3336 9.39331" stroke="#FFD100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M24 29.8334L32 37.8334L58.6667 11.1667" stroke="#FFD100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <div className="flex flex-col gap-3 justify-center items-center">
                        <p className="text-[20px] font-bold">Password Reset Successful</p>
                        <span className="text-sm text-[#6B7280]">You can now login with your new password</span>
                    </div>
                </div>
                {/* this is for login form */}
                <div className="w-full">
                    <div className="w-full flex flex-col gap-5">
                        {/* this is for login submmiting button --> login btn */}
                        <Link to={'/login'} className="login_btn text-[#333C4A] text-sm cursor-pointer">
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset_success
