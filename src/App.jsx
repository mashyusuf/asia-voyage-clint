import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer"




function App() {

  return (
    <>
    <div className="h-[90px]  ">

      <Navbar></Navbar>
    </div>
    <div className="max-w-[1440px] m-auto">

      <Outlet></Outlet>

      <div className=" w-[1440px] ">
        <Footer></Footer>
      </div>
    </div>
    </>
  )
}

export default App
