import React, { useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Avatar } from '@mui/material';
import { themeSwitcher } from '../../Redux/Reducers/ThemeSlice';
import { useDispatch } from 'react-redux';


const SkeletonComponant = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark')
            dispatch(themeSwitcher('dark'))
        }
    }, [])
    return (

        <div className='px-6 flex flex-col gap-2 w-full'>

            <nav className='px-6 py-3 flex items-center justify-between fixed bg-slate-50 dark:bg-black/50 right-0 left-0 top-0 z-10'>
                <div>
                    <h1 className='text-1xl  font-bold'>Hi, Welcome Back <span className='text-blue-500'> User!</span> 👋</h1>
                </div>

                <div className='flex gap-10 items-center'>
                    <div className='flex items-center p-1 gap-1 bg-gray-100 rounded-full'>
                        {/* <SearchIcon /> */}
                        <input className="bg-inherit  rounded-full outline-none" type="text" placeholder='Search' />
                    </div>

                    <div>
                        <Avatar alt={'R'} src={''} />
                    </div>
                </div>

            </nav>


            <div className='grid bg-white dark:bg-slate-900 gap-3 grid-cols-3 mt-20'>
                <div> <Skeleton variant="rectangular" className="rounded-lg" height={220} /></div>
                <div> <Skeleton variant="rectangular" className="rounded-lg" height={220} /></div>
                <div> <Skeleton variant="rectangular" className="rounded-lg" height={220} /></div>
                <div className="col-span-2"> <Skeleton variant="rectangular" className="rounded-lg" height={350} /></div>
                <div> <Skeleton variant="rectangular" className="rounded-lg" height={350} /></div>
            </div>

        </div>

    )
}

export default SkeletonComponant