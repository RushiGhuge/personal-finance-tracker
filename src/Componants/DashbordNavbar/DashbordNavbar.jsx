import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';



const DashbordNavbar = () => {

    const { user } = useSelector((s) => s.User);

    return (
        <nav className='shadow-lg px-6 py-2 flex items-center justify-between fixed bg-slate-50 dark:bg-slate-800 dart:text-slate-100 right-0 left-0 top-0 z-10'>
            <div>
                <h1 className='text-1xl dark:text-slate-100 font-bold max-sm:text-sm'>Hi, Welcome Back <span className='text-blue-500'> {user.displayName || 'User'}!</span> 👋</h1>
            </div>

            <div className='flex gap-10 items-center'>
                <div className='flex items-center p-1 gap-1 bg-gray-100 rounded-full max-sm:hidden '>
                    <SearchIcon />
                    <input className="bg-inherit  rounded-full outline-none" type="text" placeholder='Search' />
                </div>

                <div>
                    <Avatar sx={{width:'35px', height:'35px'}} alt={user.email} src={user.photoURL} />
                </div>
            </div>

        </nav>
    )
}

export default DashbordNavbar