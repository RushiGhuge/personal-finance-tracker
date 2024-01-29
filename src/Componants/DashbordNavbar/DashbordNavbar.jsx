import React, { lazy, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
const ProfilePage = lazy(() => import('../Profile/ProfilePage'))
import NotificationsIcon from '@mui/icons-material/Notifications';


const DashbordNavbar = () => {

    const { user } = useSelector((s) => s.User);
    const [profileOpen, setProfileOpen] = useState(false)

    return (
        <nav className='h-12 flex items-center justify-end p-6 pt-1 pb-0'>
            <div className='flex gap-3 items-center'>
                <div>
                    <Tooltip title="Search">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications">
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                    </Tooltip>
                </div>

                <div className="cursor-pointer">
                    <Tooltip title="Profile" arrow>
                        <div size='small' onClick={() => {
                            setProfileOpen(true)
                        }}>
                            <div className="flex items-center gap-2">
                                <Avatar sx={{ width: '30px', height: '30px',border:"2px solid white" }} alt={user.email} src={user.photoURL} />
                                <p>
                                    {user.displayName || 'User'}
                                </p>
                            </div>
                        </div>
                    </Tooltip>
                </div>
            </div>

            <ProfilePage profileOpen={profileOpen} setProfileOpen={setProfileOpen} user={user} />

        </nav>
    )
}

export default DashbordNavbar