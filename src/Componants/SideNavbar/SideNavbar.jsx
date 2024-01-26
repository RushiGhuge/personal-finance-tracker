import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import { IconButton, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { signOut } from "firebase/auth";
import { auth, doc } from '../../FireBase/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { themeSwitcher } from '../../Redux/Reducers/ThemeSlice';



const SideNavbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const logOut = () => {
        const logOutFlag = window.confirm('Are you sure you want to log out?')
        if (logOutFlag) {
            signOut(auth).then(() => {
                // Sign-out successful.
                navigate('/login')
            }).catch((error) => {
                // An error happened.
            });
        }

    }

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            dispatch(themeSwitcher('light'))
        } else {
            document.documentElement.classList.add('dark')
            dispatch(themeSwitcher('dark'))
        }
    }

    return (
        <nav className="w-12 fixed bg-slate-50 dark:bg-slate-900 text-slate-100 h-screen pt-14 z-10 flex flex-col items-center gap-2">

            <Tooltip title="Dashbord" placement='right' arrow>
                <IconButton className='text-slate-600 dark:text-slate-50'>
                    <DashboardIcon />
                </IconButton>
            </Tooltip>



            <Tooltip title="History" placement='right' arrow>
                <IconButton className='text-slate-600 dark:text-slate-50'>
                    <HistoryIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Charts" placement='right' arrow>
                <IconButton className='text-slate-600 dark:text-slate-50'>
                    <BarChartIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Theme Change" placement='right' arrow>
                <IconButton className='text-slate-600 dark:text-slate-50' onClick={toggleTheme}>
                    <Brightness4Icon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Lot Out" placement='right' arrow>
                <IconButton className='text-slate-600 dark:text-slate-50' onClick={logOut}>
                    <LogoutIcon />
                </IconButton>
            </Tooltip>
        </nav>
    )
}

export default SideNavbar