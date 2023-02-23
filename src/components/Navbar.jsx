import React from 'react';
import Logo from '../assets/Logo.svg'

const Navbar = () => {
    return (

    <div className="navbar bg-slate-900">
        
        <div className="flex-1">
            <img className="btn btn-ghost normal-case text-xl" src={Logo} alt="" />
        </div>

        <div className="flex-none ">

            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>

        <div className="dropdown dropdown-end">
            <ul className="menu menu-horizontal px-1">
                <li tabIndex={0}>
                    <a> MENU
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Create Movie</a></li>
                        <li><a className="btn">Log out</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        </div>
    </div>

    )
}

export default Navbar