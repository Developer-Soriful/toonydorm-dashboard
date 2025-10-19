import { Outlet } from "react-router"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"

const App = () => {
  return (
    <div className="flex min-h-screen">
      {/* this is for left side bar  */}
      <div className="w-[256px]">
        <SideBar></SideBar>
      </div>
      <div className="flex flex-col w-full">
        {/* this is for nav bar */}
        <div>
          <NavBar></NavBar>
        </div>
        {/* this is for main section all routes render here */}
        <main className="p-6 bg-[#F5F5F5] overflow-y-auto h-[calc(100vh-65.97px)]">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}

export default App
