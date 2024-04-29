import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/Final-Logo-png.png'
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";

const Navbar = () => {
    const { handleLogoutUser, user } = useContext(AuthContext)

    const { displayName, photoURL } = user || {};
    console.log(displayName, photoURL);
    console.log(photoURL)

    const profiles = user &&
        <div className=" bg-base-100  lg:tooltip mt-3" data-tip={displayName} >
            <div className="flex-none mt-1 gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img className="" alt="Tailwind CSS Navbar component" src={photoURL} />
                        </div>
                    </div>
                    <ul tabIndex={0} className=" z-[1] p-2 shadow menu menu-sm dropdown-content bg-black opacity-10 rounded-box w-52">
                        <li>
                            <p className="justify-between text-white font-semibold">{displayName}</p>
                        </li>
                        <li>
                            <Link to={'/login'} onClick={handleLogoutUser} className="justify-between text-white font-semibold">Logout</Link>
                        </li>



                    </ul>
                </div>
            </div>
        </div>

    return (
        <div>


            <div className="navbar bg-base-100 shadow-lg lg:fixed z-10 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="gap-y-3 font-bold text-xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded- w-52">

                            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-success font-bold' : 'font-bold'}>Home</NavLink>

                        </ul>
                    </div>
                    <NavLink to={'/'}>  <img className='h-12' src={logo} alt="" /></NavLink>


                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu  menu-horizontal px-1 font-bold gap-x-4 ">
                        <NavLink to={'/'} className={({ isActive }) => isActive ? "block text-xl py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "font-bold"}>Home</NavLink>
                        <NavLink to={'/alltourist'} className={({ isActive }) => isActive ? "text-xl block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "font-bold"}> All Tourists Spot</NavLink>
                        <NavLink to={'/addtourist'} className={({ isActive }) => isActive ? "block py-2 px-3 text-xl bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "font-bold"}>Add-tourist-spot</NavLink>
                        <NavLink to={'/mylist'} className={({ isActive }) => isActive ? "block  text-xl py-2 px-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" : "font-bold"}>Mylist</NavLink>






                    </ul>
                </div>
                <div className="navbar-end m-2">
                <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
                    {
                        user ? profiles : <div>
                            <Link to={'/login'} className="btn text-white btn-success">Login</Link>
                            <Link to={'/register'} className="btn text-white bg-purple-700 ml-4">Register</Link>
                        </div>
                    }


                </div>



            </div>















        </div>
    );
};

export default Navbar;