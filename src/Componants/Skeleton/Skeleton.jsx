import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Avatar } from '@mui/material';


const SkeletonComponant = () => {
    return (

        <div className='px-6 flex flex-col gap-2 w-full'>

            <nav className='px-6 py-3 flex items-center justify-between fixed bg-slate-50 right-0 left-0 top-0 z-10'>
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


            <div className='grid bg-white gap-3 grid-cols-3 mt-14'>
                <div> <Skeleton variant="rectangular" height={220} /></div>
                <div> <Skeleton variant="rectangular" height={220} /></div>
                <div> <Skeleton variant="rectangular" height={220} /></div>
                <div className="col-span-2"> <Skeleton variant="rectangular" height={350} /></div>
                <div> <Skeleton variant="rectangular" height={350} /></div>
            </div>

        </div>

    )
}

export default SkeletonComponant