import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/Final-Logo-png.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";

const Navbar = () => {
 
    const [theme, setTheme] = useState('light')

    useEffect(() => {

        localStorage.setItem('theme', theme)
        const localThemme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localThemme)

    }, [theme])

    const handleTogg = e => {
        console.log(e.target.value)
        if (e.target.checked) {
            setTheme('coffee')
        }
        else {
            setTheme('light')
        }
    }

    console.log(theme)








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
                  

                    {/*theme */}
                    <label  className="swap mt-1 swap-rotate ">

                        {/* this hidden checkbox controls the state */}
                        <input
                            onChange={handleTogg}
                            type="checkbox"
                            className="theme-controller"
                            value="synthwave" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

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