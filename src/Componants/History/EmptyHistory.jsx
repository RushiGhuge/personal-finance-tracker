import React from 'react'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


const EmptyHistory = () => {
    return (

        <main className="w-full h-40 flex flex-col gap-5 justify-center items-center">
            <WorkHistoryIcon className='text-slate-800 dark:text-slate-300'  fontSize='large' />
            <h1 className='text-slate-600 text-2xl font-bold italic dark:text-slate-400'>Empty History</h1>
        </main>
    )
}

export default EmptyHistory