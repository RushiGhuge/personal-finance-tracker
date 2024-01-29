import React, { useEffect } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import { IconButton, Tooltip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { signOut } from "firebase/auth";
import { auth } from '../../FireBase/firebase';
import { Link, useNavigate } from 'react-router-dom';
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

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark')
            dispatch(themeSwitcher('dark'))
        }
    }, [])

    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark')
            dispatch(themeSwitcher('light'))
        } else {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
            dispatch(themeSwitcher('dark'))
        }
    }

    return (
        <nav className="fixed w-12 bg-slate-700 dark:bg-slate-700 text-slate-100 h-screen pt-3 z-1000 flex flex-col items-center gap-2">

            <Tooltip title="Dashbord" placement='right' arrow>
                <Link to=''>
                    <IconButton className=' dark:text-slate-700'>
                        <DashboardIcon className="text-slate-200 hover:text-white  "/>
                    </IconButton>
                </Link>
            </Tooltip>


            <Tooltip title="History" placement='right' arrow>
                <Link to='history'>
                    <IconButton className='text-slate-600 dark:text-slate-50'>
                        <HistoryIcon className="text-slate-200 hover:text-white  "/>
                    </IconButton>
                </Link>
            </Tooltip>

            <Tooltip title="Charts" placement='right' arrow>
                <Link to='charts'>
                    <IconButton className='text-slate-600 dark:text-slate-50'>
                        <BarChartIcon className="text-slate-200 hover:text-white " />
                    </IconButton>
                </Link>
            </Tooltip>

            <Tooltip title="Theme Change" placement='right' arrow>
                <IconButton className='text-slate-600 dark:text-slate-50' onClick={toggleTheme}>
                    <Brightness4Icon className="text-slate-200 hover:text-white "/>
                </IconButton>
            </Tooltip>

            <Tooltip title="Lot Out" placement='right' arrow>
                <IconButton  onClick={logOut}>
                    <LogoutIcon className="text-slate-200 hover:text-white "/>
                </IconButton>
            </Tooltip>
        </nav>
    )
}

export default SideNavbar