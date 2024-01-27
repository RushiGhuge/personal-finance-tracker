import React, { lazy, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
const ProfilePage = lazy(() => import('../Profile/ProfilePage'))



const DashbordNavbar = () => {

    const { user } = useSelector((s) => s.User);
    const [profileOpen, setProfileOpen] = useState(false)

    return (
        <nav className='backdrop-blur shadow-sm px-6 py-2 flex items-center justify-between supports-backdrop-blur:bg-white/60 dark:bg-transparent fixed dark:bg-slate-800 dart:text-slate-100 right-0 left-0 top-0 z-10'>
            <div>
                <h1 className='text-1xl dark:text-slate-100 font-bold max-sm:text-sm'>Hi, Welcome Back <span className='text-blue-500'> {user.displayName || 'User'}!</span> 👋</h1>
            </div>

            <div className='flex gap-10 items-center'>
                <div className='flex items-center p-1 gap-1 bg-slate-200 dark:bg-slate-800 rounded-md px-2 max-sm:hidden '>

                    <SearchIcon />
                    <input className="bg-inherit  rounded-full outline-none " type="text" placeholder='Search' />
                </div>

                <div>
                    <Tooltip title="Profile" arrow>
                        <div size='small' onClick={() => {
                            setProfileOpen(true)
                        }}>
                            <Avatar sx={{ width: '35px', height: '35px' }} alt={user.email} src={user.photoURL} />
                        </div>
                    </Tooltip>
                </div>
            </div>

            <ProfilePage profileOpen={profileOpen} setProfileOpen={setProfileOpen} user={user} />

        </nav>
    )
}

export default DashbordNavbar